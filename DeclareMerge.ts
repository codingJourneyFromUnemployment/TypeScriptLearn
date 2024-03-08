export {}

function reverse(x : number) : number;
function reverse(x : string) : string;

function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('')
  }
  throw new Error('not a number or string')
}

interface Alarm {
  price: number;
  alert(s: string): string;
}

interface Alarm {
  weight: string;
  alert(s: string, n: number): string;
}

interface Alarm {
  price: number;
  weight: string;
  alert(s: string): string;
  alert(s: string, n: number): string;
}


