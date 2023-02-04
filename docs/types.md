## Types

### Type Inferences

TS does not allow you to change the type of a variable once that variable is assigned a value. If you declare a variable and an assign it a value, TS will **infer** that the variable has the given data type.  For example, let x = 5; will result in TS inferring that x is type number. Attempting to change a variable's type will result in an error. 


### Type Shapes

An object’s shape describes, among other things, what properties and methods it does or doesn’t contain.

TypeScript’s tsc command will let you know if your code tries to access properties and methods that don’t exist:

```js
"MY".toLowercase();
// Property 'toLowercase' does not exist on type '"MY"'.
// Did you mean 'toLowerCase'?
```

### Any

There are some places where TypeScript will not try to infer what type something is—generally when a variable is declared without being assigned an initial value. In situations where it isn’t able to infer a type, TypeScript will consider a variable to be of type any.

Variables of type any can be assigned to any value and TypeScript won’t give an error if they’re reassigned to a different type later on.

### Variable Type Annotations

In some situations, we’d like to declare a variable without an initial value while still ensuring that it will only ever be assigned values of a certain type. If left as any, TypeScript won’t be able to protect us from accidentally assigning a variable to an incorrect type that could break our code.

We can tell TypeScript what type something is or will be by using a **type annotation**.

We provide a type annotation by appending a variable with a colon (:) and the type (e.g., number, string, or any).

```ts
let mustBeAString : string;
mustBeAString = 'Catdog';
 
mustBeAString = 1337;
// Error: Type 'number' is not assignable to type 'string'
```

### Intefaces
TS allows you to create **interfaces** that tell TS about a custom type you've created. 

```ts
intefact Contact {
    id: number;
    name: String;
    birthdate: Date;
}
```

The syntax is very close to JS class syntax, however, each line ends in a semicolon rather than a comma.

Intefaces are only used at transpile time and never appear in your runtime code. 
