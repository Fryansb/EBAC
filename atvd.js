// CLASSE MÃE (Superclasse)
class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    acelerar() {
        return `${this.marca} ${this.modelo} está acelerando!`;
    }

    // Método genérico que pode ser sobrescrito se necessário
    exibirDetalhes() {
        return `Veículo: ${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}

// CLASSE FILHA (Subclasse)
class Carro extends Veiculo {
    constructor(marca, modelo, ano, portas) {
        // Chama o construtor da classe mãe (Veiculo)
        super(marca, modelo, ano); 
        // Atributo específico da classe Carro
        this.portas = portas;
    }

    // Sobrescrevendo o método da classe mãe para adicionar detalhes específicos
    exibirDetalhes() {
        return `Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}, Portas: ${this.portas}`;
    }

    // Método específico da classe Carro
    ligarFarol() {
        return `${this.marca} ${this.modelo} ligou o farol.`;
    }
}

// CLASSE FILHA (Subclasse)
class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
        // Chama o construtor da classe mãe (Veiculo)
        super(marca, modelo, ano);
        // Atributo específico da classe Moto
        this.cilindradas = cilindradas;
    }

    // Sobrescrevendo o método da classe mãe para adicionar detalhes específicos
    exibirDetalhes() {
        return `Moto: ${this.marca} ${this.modelo}, Ano: ${this.ano}, Cilindradas: ${this.cilindradas}`;
    }
}

// --- INSTANCIANDO OS OBJETOS E EXECUTANDO AS AÇÕES ---

const meuCarro1 = new Carro("Ford", "Ka", 2020, 4);
const meuCarro2 = new Carro("Chevrolet", "Onix", 2022, 4);
const minhaMoto = new Moto("Yamaha", "MT-07", 2021, 689);

console.log(meuCarro1.exibirDetalhes());
console.log(meuCarro1.acelerar()); // Método herdado de Veiculo
console.log(meuCarro1.ligarFarol());

console.log("\n");

console.log(meuCarro2.exibirDetalhes());
console.log(meuCarro2.acelerar()); // Método herdado de Veiculo

console.log("\n");

console.log(minhaMoto.exibirDetalhes());
console.log(minhaMoto.acelerar()); // Método herdado de Veiculo