import { Filme } from './filme';

describe('Filme', () => {
  it('should create an instance', () => {
    expect(new Filme(
      'id_do_filme',
      'Título do Filme',
      2021,
      'Diretor Exemplo',
      'Gênero Exemplo',
      'https://example.com/capa.jpg'
    )).toBeTruthy();
  });
});
