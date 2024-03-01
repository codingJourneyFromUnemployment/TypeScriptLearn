//function declaration
function sum(x: number, y: number): number {
    return x + y;
}
//function expression
const mySum:(x:number, y:number) => number = function (x: number, y : number): number {
    return x + y;
}

//interface function type

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch : SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
}

//optional parameter
function buildName(fisrtName: string, lastName?: string) {
  if (lastName) {
    console.log(fisrtName + ' ' + lastName);
  } else {
    console.log(fisrtName);
  }
}

const tomcat = buildName('Tom', 'Cat');
const tom = buildName('Tom');

//default parameter
function buildName2(fisrtName: string, lastName: string = 'Cat') {
  console.log(fisrtName + ' ' + lastName);
}

const tomcat2 = buildName2('Tom', undefined);

//rest parameter
function push(array:number[], ...items: number[]) {
  items.forEach(function(item) {
    array.push(item);
  });
}

const a:number[] = [];
push(a, 1, 2, 3);

//reload
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | undefined {
  if (typeof x === "number") {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === "string") {
    return x.split('').reverse().join('');
  } else {
    console.log('this is not a number or string');
    return undefined;
  }
}
