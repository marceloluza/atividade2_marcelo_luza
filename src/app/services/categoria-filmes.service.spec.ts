import { TestBed } from '@angular/core/testing';

import { CategoriaFilmesService } from './categoria-filmes.service';

describe('CategoriaFilmesService', () => {
  let service: CategoriaFilmesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaFilmesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
