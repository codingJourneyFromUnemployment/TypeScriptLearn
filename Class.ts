// class Example {
//     private secret: number = 123;
//     public reveal() {
//         console.log(this.secret);
//     }
// }

// console.log(process.version)

// class Animal {
//     // protected readonly name: string;
//     public name: string;
//     public constructor(thename: string) {
//         this.name = thename;
//     }
//     saySomething(word: string) {
//         console.log(`${this.name} says ${word}`);
//     }

//     static isAnimal(animal: any) {
//         return animal instanceof Animal;
//     }
// }

// const perro = new Animal('Perro');
// perro.saySomething('Guau');

// class Gato extends Animal {
//     constructor(name: string) {
//         super(name);
//     }

//     saySomething(word: string) {
//         console.log(`${this.name} says ${word} and purrs`);
//     }

//     get gatoName() :string {
//         return this.name;
//     }

//     set gatoName(newName: string) {
//         this.name = newName;
//     }
// }

// const gato = new Gato('Gato');
// gato.saySomething('Miau');

// console.log(Animal.isAnimal(perro));

abstract class Animal {
    public name: string;
    public constructor(thename: string) {
        this.name = thename;
    }
    public abstract saySomething(word: string): void;
}

class Perro extends Animal {
    public saySomething(word: string) {
        console.log(`${this.name} says ${word}`);
    }
}

const perro : Perro = new Perro('Perro');
