interface Alarm {
  alert(): void;
}

interface LightableAlarm extends Alarm {
  lightOn(): void;
  lightOff(): void;
}

interface Light {
  lightOn(): void;
  lightOff(): void;
}

class Door {

}

class SecurityDoor extends Door implements Alarm {
  alert(){
    console.log('SecurityDoor alert');
  }
}

class Car implements Alarm, Light {
  alert(){
    console.log('Car alert');
  }

  lightOn(){
    console.log('Car light on');
  }

  lightOff(){
    console.log('Car light off');
  }
}


// class Point {
//   x: number;
//   y: number;

//   constructor(_x: number, _y: number){
//     this.x = _x;
//     this.y = _y;
//   }
// }

// interface Point3d extends Point {
//   z: number;
// }

// const point: Point3d = {x: 1, y: 2, z: 3};

class Point {
  static origin = new Point(0, 0);
  static distanceToOrigin(p: Point){
    return Math.sqrt(p.x * p.x + p.y * p.y);
  }

  x:number;
  y:number;

  constructor(x: number, y: number){
    this.x = x;
    this.y = y;
  }

  printPoint(){
    console.log(`x: ${this.x}, y: ${this.y}`);
  }
}

interface PointInstanceType {
  x: number;
  y: number;
  printPoint(): void;
}

let p1: Point;
let p2: PointInstanceType;

// 1.类继承 (extends):

// 目的：复用代码，建立类之间的层次结构。
// 方法：子类自动获得父类的所有属性和方法（包括静态和实例成员）。
// 使用场景：当两个类在概念上存在“是一个(is-a)”的关系时，例如Dog extends Animal意味着每个Dog都是一个Animal。

// 2.接口实现 (implements):

// 目的：确保类满足特定的契约，即具有特定的方法和属性。
// 方法：类必须实现接口中声明的所有方法和属性，但接口不提供这些方法的实现。
// 使用场景：用于定义对象可以执行的操作，确保无论对象的具体实现如何，它都提供了一组特定的功能。例如，如果Car和Bicycle类都实现了Vehicle接口，这表明它们都提供了Vehicle接口定义的功能。

// 3.类型注解 (:):

// 目的：提供编译时的类型检查，确保变量或函数参数/返回值的类型安全。
// 方法：通过在代码中标注类型，TypeScript编译器可以在编译时进行类型检查。
// 使用场景：适用于任何需要类型安全的场合，比如变量声明、函数参数和返回类型等。它不直接影响代码的运行时行为，而是帮助开发者避免类型相关的错误