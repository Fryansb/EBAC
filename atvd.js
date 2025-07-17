class Carro {
    constructor(marca, modelo, ano, portas) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.portas = portas;
    }

    exibirDetalhes() {
        return `Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}, Portas: ${this.portas}`;
    }

    acelerar() {
        return `${this.marca} ${this.modelo} está acelerando!`;
    }

    ligarFarol() {
        return `${this.marca} ${this.modelo} ligou o farol.`;
    }
}

class Moto {
    constructor(marca, modelo, ano, cilindradas) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cilindradas = cilindradas;
    }

    exibirDetalhes() {
        return `Moto: ${this.marca} ${this.modelo}, Ano: ${this.ano}, Cilindradas: ${this.cilindradas}`;
    }

    acelerar() {
        return `${this.marca} ${this.modelo} está acelerando!`;
    }
}

// Criando as instâncias que faltavam
const meuCarro1 = new Carro("Ford", "Ka", 2020, 4);
const meuCarro2 = new Carro("Chevrolet", "Onix", 2022, 4);
const minhaMoto = new Moto("Yamaha", "MT-07", 2021, 689);

console.log(meuCarro1.exibirDetalhes());
console.log(meuCarro1.acelerar());
console.log(meuCarro1.ligarFarol());

console.log("\n");

console.log(meuCarro2.exibirDetalhes());
console.log(meuCarro2.acelerar());

console.log("\n");

console.log(minhaMoto.exibirDetalhes());
console.log(minhaMoto.acelerar());