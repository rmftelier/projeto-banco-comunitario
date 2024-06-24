import { Banco } from "./banco";

const banco = new Banco();

const cliente1 = banco.criarCliente(1, "Roberta Meyrelles", "Rua 12, 475", "98825-6111", 1250);
const cliente2 = banco.criarCliente(2, "Larissa Silva", "Rua São Paulo, 784", "98876-5432", 600);
const cliente3 = banco.criarCliente(3, "Alice Duarte", "Rua Arco-Íris, 135", "94786-5722", 600);

const contaCorrente = banco.criarContaCorrente(cliente1);
const contaCorrente2 = banco.criarContaCorrente(cliente3);
const contaPoupanca = banco.criarContaPoupanca(cliente2, 0.02);
const contaCorrente3 = banco.criarContaCorrente(cliente2);

contaCorrente2?.depositar(5000);
contaCorrente3?.depositar(500);

if (contaCorrente) {
  contaCorrente.depositar(1000);
  contaCorrente.sacar(200);
  console.log(`\nSaldo atual da conta corrente de Roberta Meyrelles: ${contaCorrente.saldo}`)
}

contaPoupanca.depositar(500);
contaPoupanca.sacar(100);
console.log(`\nSaldo atual da conta poupança de Larissa Duarte: ${contaPoupanca.saldo}`);


if (contaCorrente) {
  contaPoupanca.transferir(200, contaCorrente);
}

banco.listarContasCorrentes();
banco.listarContasPoupancas();
banco.listarClientes();