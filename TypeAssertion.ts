// interface Cat {
//   name: string;
//   run(): void;
// }

// interface Fish {
//   name: string;
//   swim(): void;
// }

// function getName(animal:Cat | Fish) {
//   return animal.name;
// }

// function isFish(animal: Cat | Fish){
//   if (typeof animal.swim === 'function') {
//     return true;
//   }
//   return false;
// }

// function isFish(animal: Cat | Fish) {
//   if (typeof (animal as Fish).swim === 'function') {
//     return true;
//   }
//   return false;
// }

// class ApiError extends Error {
//   code: number = 0;
// }

// class HttpError extends Error {
//   statusCode: number = 200;
// }

// function isApiError(error : Error) {
//   if (typeof (error as ApiError).code === 'number') {
//     return true;
//   }
//   return false;
// }

// function isApiError(error: Error) {
//   if (error instanceof ApiError) {
//     return true;
//   }
//   return false;
// }

// function toBoolean(something: any) : boolean {
//   // return something as boolean;
//   return Boolean(something);
// }

export {};

function getCacheData(key:string): any {
  return (window as any).cache[key];
}

interface Cat {
  name: string;
  run(): void;
}

const tom = getCacheData('tom') as Cat;
tom.run();
