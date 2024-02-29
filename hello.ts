// function sayHello(person: string){
//   return 'Hello, ' + person;
// }

// const user = [1,2,3]
// console.log(sayHello(user));

// let isDone: boolean = false;
// const createdByNewBoolean: boolean = new Boolean(1);

// let myName: string = 'Tom';
// const myAge: number = 25;

// const sentence: string = `Hello, my name is ${myName}. I'll be ${myAge + 1} years old next month.`;

// console.log(sentence);

// function alertName(): void {
//   alert('My name is Tom');
// }

// const num: number | undefined = undefined;

// const num: any = undefined
// console.log(num.foo());
// console.log(num.foo.bar());

// const num = null;
// console.log(num.foo());
// console.log(num.foo.bar());

// let num:string | number = "seven";
// num = true;

// function getLength(something: string | number): number{
//   // return something.length;
//   return something.toString().length;
// }

// interface Person {
//   readonly name: string;
//   age: number;
//   gender?: string;
//   [propName:string]: number | string | undefined;
// }

// const tom:Person = {
//   name: 'Tom',
//   age: 25,
// }

// tom.name = 'alice';

const fibonacci: number[]|string[] = [1, 1, 2, 3, 5];
fibonacci.push(8);

const fibonacci2: Array<number|string> = [1, 1, 2, 3, 5];
fibonacci2.push('8');

interface fibonacciArray {
  [index: number] : number | boolean; 
}

const fibonacci3: fibonacciArray = [1, 1, 2, 3, true];

function sum() {
  const args: {
    [index: number]: number;
    length: number;
    callee: Function;
  } = arguments;
}