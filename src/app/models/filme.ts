export class Filme {
  constructor(
    public readonly _id: string,
    public titulo: string,
    public ano: number,
    public diretor: string,
    public genero: string,
    public capaUrl: string,  
  ) {}
}
