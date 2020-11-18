

import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("ricardo", 11122233541);
const cliente2 = new Cliente("sabryna", 12345648995);


const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);


contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente(cliente2, 1002);


console.log(ContaCorrente.numeroDeContas)
