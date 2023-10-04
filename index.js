class PlayerHeroi {
  constructor( name, age, type) {
    this.name = name
    this.age = age
    this.type = type
  }

  atacar() {
    let ataque = '';

    switch (this.type) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'não possui ataque definido';
    }

    console.log(`O ${this.type} atacou usando ${ataque}`);
  }
}

const playerHeroi1 = new PlayerHeroi('Franklin', 30, 'mago');

playerHeroi1.atacar();







/* 
class formaDeBolo {
  constructor (saborDaMassa, saborRecheio) {
    this.saborDaMassa = saborDaMassa
    this.saborRecheio = saborRecheio
  }

  escrever() {
    console.log(`Uma descrição do bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
  }

  assar() {
    console.log ( "Assando bolo de " + this.saborDaMassa )
  }
}

let boloFesta = new formaDeBolo("chocolate", "Nutela");
let bolo2 = new formaDeBolo ("Limão", "Leite Condensado")

boloFesta.escrever();
bolo2.escrever();
bolo2.assar();

// console.log(boloFesta)
// console.log(boloFesta.saborDaMassa)


let invoice = {
  name: "Franklin",
  age: 30,
  products: {
    0: ["Mouse Logitech", 98.99],
    1: ["Teclado", 129.99],
    2: ["Monitor", 999.99],
  },
  taxes: "98.90"
}

function generateInvoice(invoice) {
  console.log(`O comprador é ${invoice.name}`)
  console.log( `A idade é ${invoice.age}`)
  console.log( `-----------`)

  for ( let index in invoice.products ) {
    let [ productName, productPrice ] = invoice.products[index]
    console.log ( `- ${productName}: R$ ${productPrice}` )
  }

}

 */









/* #################################################################
Programação orientada a objetos --> estudar
classe e objeto - saber o que é uma classe, saber o que é um objeto, como instanciar um objeto a partir de uma classe, qual a diferança de classe com um objeto e as vantagens. 
#################################################################
*/