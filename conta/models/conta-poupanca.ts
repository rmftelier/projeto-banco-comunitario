import { Cliente } from "../../cliente/models/cliente";
import { IConta } from "../interface/conta.interface";

export class ContaPoupanca implements IConta {
  saldo: number;
  taxaDeJuros: number;

  constructor(public numero: string, public cliente: Cliente, saldoInicial: number = 0, taxaDeJuros: number = 0.01) {
    this.saldo = saldoInicial;
    this.taxaDeJuros = taxaDeJuros;
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number): void {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      console.log("\nSaldo insuficiente");
    }
  }

  transferir(valor: number, contaDestino: IConta): void {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      contaDestino.depositar(valor);
      console.log(`\nTransferência de R$${valor} da conta do cliente ${this.cliente.nomeCompleto} para a conta do cliente ${(contaDestino.cliente.nomeCompleto)} realizada com sucesso.`);

    } else {
      console.log("\nSaldo insuficiente");
    }
  }

  aplicarJuros(): void {
    this.saldo += this.saldo * this.taxaDeJuros;
  }
}