// basic
let id: number = 1;
let company: string = "hello";
let isOk: boolean = true;
let x: any = "hi";

// array
let ids: number[] = [1, 2, 3, 4];
let arr: any[] = [1, "h", 44, true];
// tuple
let person: [number, string, boolean] = [1, "sam", true];
let employee: [number, string][] = [
  [1, "hi"],
  [2, "sam"],
  [2, "sam"],
  [2, "sam"],
];
// union
let pid: number | string;

// enum ( start from 0 but we can change it later)
enum direction {
  up, // 0
  down, // 1
}
enum direction2 {
  up = "up",
  down = "down",
}

// objects
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "sam",
};

// OR
type Point = string | number;

type User = {
  id: number;
  name: string;
};
const user2: User = {
  id: 1,
  name: "hi",
};

// type assertion
let cid: any = 1;
let customerId = <number>cid;
let customerId2 = cid as number;

// functions
function addNum(x: number, y: number): number {
  return x + y;
}
function addNum2(x: number, y: number): void {
  console.log();
}

// interface
interface UserName {
  readonly i: number;
  j?: string;
}
const user22: UserName = {
  i: 1,
  j: "s",
};
const user232: UserName = {
  i: 1,
};

interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;

// classes
interface PersonIn {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonIn {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register(): string {
    return "1";
  }
}

// subclass
class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}
const emp = new Employee(1, "s", "d");

// generics

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let num = getArray<number>([1, 2, 3, 4]);
let Strnum = getArray<string>(["1", "2", "3", "4"]);

function log(data?: { x: number; y: number }): void {
  console.log(data?.x, data?.y);
}
log({ y: 20, x: 10 });
