import { ICliente } from "../interface/cliente.interface";

export class Cliente implements ICliente {

  constructor(
    public id: number,
    public nomeCompleto: string,
    public endereco: string,
    public telefone: string,
    public rendaSalarial: number
  ) {
    this.id = id,
      this.nomeCompleto = nomeCompleto,
      this.endereco = endereco,
      this.telefone = telefone,
      this.rendaSalarial = rendaSalarial
  }
}