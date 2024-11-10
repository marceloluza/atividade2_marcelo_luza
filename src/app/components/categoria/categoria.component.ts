import { Component, Input } from '@angular/core';
import { Categoria } from '../../models/categoria';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {

  @Input({
    required: true,
  })
  public categoria!: Categoria;
}
