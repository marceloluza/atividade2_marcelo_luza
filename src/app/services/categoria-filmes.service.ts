import { inject, Injectable } from '@angular/core';
import { map, ReplaySubject } from 'rxjs';

import { Categoria } from '../models/categoria';
import { Filme } from '../models/filme';
import { ICategoria } from '../interfaces/categoria';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaFilmesService {

  private httpClient = inject(HttpClient);

  private _categorias$ = new ReplaySubject<Categoria[]>(1);
  public categorias$ = this._categorias$.asObservable();

  private _categoriaSelecionada$ = new ReplaySubject<Categoria>(1);
  public categoriaSelecionada$ = this._categoriaSelecionada$.asObservable();

  constructor() {
    this.httpClient.get<ICategoria[]>('http://localhost:3000/api/categorias').pipe(
      map(categorias => categorias.map(c => new Categoria(
        c.nome,
        c.filmes.map(f => new Filme(
          f._id,
          f.titulo,
          f.ano,
          f.diretor,
          f.genero,
          f.capaUrl   
        ))
      ))),
    ).subscribe(this._categorias$);
  }

  public selecionaCategoria(c: Categoria): void {
    this._categoriaSelecionada$.next(c);
  }
}
