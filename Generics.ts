function createArray(length: number, value: any): Array<any> {
  const result = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

const array = createArray(3, 'x') // ['x', 'x', 'x']
console.log(array)

interface Item {
  id : number;
  name: string;
}

function createArray2<T>(length: number, value: T): Array<T> {
  const result = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

const items : Item[] = createArray2<Item>(3, {id: 1, name: 'item1'})
console.log(items)

function swap<T, U>(tuple : [T, U]) : [U, T] {
  return [tuple[1], tuple[0]]
}

const result = swap([7, 'seven'])
console.log(result)

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

loggingIdentity("yes")

function copyFields<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
        target[id] = (<T>source)[id];
    }
    return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };
copyFields(x, { b: 10, d: 20 });

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch1: SearchFunc;
mySearch1 = function(source: string, subString: string) {
  return source.search(subString) !== -1;
}

interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>;
}

let createArray3: CreateArrayFunc;
createArray3 = function<T>(length: number, value: T): Array<T> {
  const result = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

interface CreateArrayFunc2<T> {
  (length: number, value: T): Array<T>;
}

let createArray4: CreateArrayFunc2<any>;
createArray4 = function<T>(length: number, value: T): Array<T> {
  const result = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

createArray4(3, 'x')

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

function createArray5<T = string>(length: number, value: T): Array<T> {
  const result = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}