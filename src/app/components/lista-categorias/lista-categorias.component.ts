import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaFilmesService } from '../../services/categoria-filmes.service';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-lista-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-categorias.component.html',
  styleUrl: './lista-categorias.component.css'
})
export class ListaCategoriasComponent {
  public categoriaService = inject(CategoriaFilmesService);
}
