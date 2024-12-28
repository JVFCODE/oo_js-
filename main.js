// Classe Abstrata
class Animal {
    constructor(nome) {
        if (new.target === Animal) {
            throw new Error("Não é possível instanciar a classe Animal diretamente.");
        }
        this.nome = nome;
    }

    fazerSom() {
        throw new Error("Método 'fazerSom' deve ser implementado.");
    }
}

// Classes Herdadas
class Cachorro extends Animal {
    fazerSom() {
        return `${this.nome} diz: Au Au!`;
    }
}

class Gato extends Animal {
    fazerSom() {
        return `${this.nome} diz: Miau!`;
    }
}

// Instâncias de Objetos
const cachorro1 = new Cachorro("Rex");
const gato1 = new Gato("Mia");
const cachorro2 = new Cachorro("Buddy");

// Testando os métodos
console.log(cachorro1.fazerSom()); // Rex diz: Au Au!
console.log(gato1.fazerSom());      // Mia diz: Miau!
console.log(cachorro2.fazerSom());  // Buddy diz: Au Au!
