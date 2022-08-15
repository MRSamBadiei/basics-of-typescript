## Basics

### number

```typescript
let id: number = 10;
```

### string

```typescript
let name: string = "Sam";
```

### boolean

```typescript
let isDone: boolean = false;
```

### any

```typescript
let time: any = "mm:ss";
```

## Union

```typescript
let uid: string | number;
```

## Array

### number

```typescript
let id: number[] = [1, 2, 3, 4, 5];
```

### string

```typescript
let id: string[] = ["s", "sam", "new"];
```

### boolean

```typescript
let id: boolean[] = [false, true, false];
```

### any

```typescript
let id: any[] = [1, "x", false, 5];
```

## Tuple

```typescript
let user: [number, string, boolean] = [1, "sam", true];
```

```typescript
let user: [number, boolean][] = [
  [1, true],
  [2, false],
  [3, true],
];
```

## Enum

> starts from 0 but you can change it later

```typescript
enum dir {
  up, // 0
  down, // 1
}
enum dir2 {
  up = "up",
  down = "down",
}
```

## Objects

```typescript
const user: {
  uid: number;
  data: string;
} = {
  uid: 1,
  data: "sam",
};
```

## Type assertion

```typescript
let uid: any = 1;
let userId = <number>cid;
let userId2 = cid as number;
```

## Functions

```typescript
function sum(x: number, y: number): number {
  return x + y;
}
```

## Type

```typescript
type uid = string | number;

let x: uid = 2;
```

## interface

```typescript
interface Uid {
  readonly id: number;
  name?: string;
}

const user: Uid = {
  id: 123,
  name: "sam",
};
```

