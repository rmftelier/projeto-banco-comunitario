import { Cliente } from "../../cliente/models/cliente";

export interface IConta {
  saldo: number;
  cliente: Cliente;
  depositar(valor: number): void;
  sacar(valor: number): void;
  transferir(valor: number, contaDestino: IConta): void;
}