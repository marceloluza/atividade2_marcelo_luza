import { Filme } from "./filme";

export class Categoria {
  constructor(
    public nome: string,
    public filmes: Filme[],
  ) {}

  public get nomeCompleto(): string {
    return `Categoria: ${this.nome}`;
  }
}
