import { Cliente } from "./cliente/models/cliente";
import { ContaCorrente } from "./conta/models/conta-corrente";
import { ContaPoupanca } from "./conta/models/conta-poupanca";

export class Banco {
  private clientes: Cliente[] = [];
  private contasCorrentes: ContaCorrente[] = [];
  private contasPoupanca: ContaPoupanca[] = [];

  //Criar Cliente
  criarCliente(id: number, nomeCompleto: string, endereco: string, telefone: string, rendaSalarial: number): Cliente {

    const cliente = new Cliente(id, nomeCompleto, endereco, telefone, rendaSalarial);
    this.clientes.push(cliente);
    return cliente;
  }

  //Criar Conta Corrente
  criarContaCorrente(cliente: Cliente): ContaCorrente | null {
    if (cliente.rendaSalarial >= 500) {
      const conta = new ContaCorrente(`CC-${cliente.id}`, cliente, 0);
      this.contasCorrentes.push(conta);
      return conta;
    } else {
      console.log("Cliente não possui renda suficiente para abrir uma conta corrente");
      return null;
    }
  }

  criarContaPoupanca(cliente: Cliente, taxaDeJuros: number = 0.01): ContaPoupanca {
    const conta = new ContaPoupanca(`CP-${cliente.id}`, cliente, 0, taxaDeJuros);
    this.contasPoupanca.push(conta);
    return conta;
  }

  listarContasCorrentes(): void {
    console.log("\n=== Contas Correntes Criadas ===\n");
    this.contasCorrentes.forEach(conta => {
      console.log(`Número da conta: | Cliente: ${conta.cliente.nomeCompleto} | Saldo: R$${conta.saldo}\n`)
    })
  }

  listarContasPoupancas(): void {
    console.log("\n=== Contas Poupancas Criadas ===\n");
    this.contasPoupanca.forEach(conta => {
      console.log(`Número da conta: | Cliente: ${conta.cliente.nomeCompleto} | Saldo: R$${conta.saldo}\n`)
    })
  }

  listarClientes(): void {
    console.log("\n=== Clientes ===\n");
    this.clientes.forEach(cliente => {
      console.log(`Nome Completo: ${cliente.nomeCompleto} | Endereço: ${cliente.endereco} | Telefone: ${cliente.telefone} | Renda Salarial: R$${cliente.rendaSalarial}\n`)
    })
  }
}