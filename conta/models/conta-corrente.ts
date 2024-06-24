import { Cliente } from "../../cliente/models/cliente";
import { IConta } from "../interface/conta.interface";

export class ContaCorrente implements IConta {
  public saldo: number;
  private limiteChequeEspecial: number = 100;

  constructor(public number: string, public cliente: Cliente, saldoInicial: number = 0) {
    this.saldo = saldoInicial;
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number): void {
    if (valor <= this.saldo + this.limiteChequeEspecial) {
      this.saldo -= valor;
    } else {
      console.log("\nSaldo insuficiente, mesmo com o cheque especial.")
    }
  }

  transferir(valor: number, contaDestino: IConta): void {
    if (valor <= this.saldo + this.limiteChequeEspecial) {
      this.saldo -= valor;
      contaDestino.depositar(valor);
      console.log(`\nTransferência de R$${valor} da conta do(a) cliente ${this.cliente.nomeCompleto} para a conta do(a) cliente ${contaDestino.cliente.nomeCompleto} realizada com sucesso.`);
    } else {
      console.log("\nSaldo insuficiente, não será possível a transferência desse valor.")
    }
  }

  exibirSaldo(): void {
    console.log(`\nO saldo atual da conta é ${this.saldo}`)
  }
}