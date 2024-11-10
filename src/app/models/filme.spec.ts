import { Filme } from './filme';

describe('Filme', () => {
  it('should create an instance', () => {
    expect(new Filme('Título do Filme', 2021)).toBeTruthy();
  });
});
