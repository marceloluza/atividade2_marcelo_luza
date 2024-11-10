import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ListaCategoriasComponent } from "./components/lista-categorias/lista-categorias.component";
import { CategoriaComponent } from "./components/categoria/categoria.component";
import { CategoriaFilmesService } from './services/categoria-filmes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ListaCategoriasComponent,
    CategoriaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public categoriaService = inject(CategoriaFilmesService);
}
