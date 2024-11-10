import { IFilme } from "./filme";

export interface ICategoria {
  _id: string;
  nome: string;
  filmes: IFilme[];
}
