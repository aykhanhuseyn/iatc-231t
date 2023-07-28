# TypeScript

## history

2012 - Microsoft

superset of javascript
like scss(sass, less, stylus) to css

flow -> Facebook

## syntax

```typescript
let a: number = 5;
```

## types

```typescript
type Person = {
  name: string;
}

// this is error
// type Person {
//   name: string;
// }
```

## interface

```typescript
interface Person {
  name: string;
}
interface Person {
  age: number;
}

// interface Person will be this
// interface Person {
//   name: string;
//   age: number;
// }
```

## enum

```typescript
enum Role {
  ADMIN = 'admin',
  USER = 'user',
}
```

## union, intersection, guards

## util types
