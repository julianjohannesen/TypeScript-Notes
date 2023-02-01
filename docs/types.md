## Types

### From JS to TS
### What is TS?

TypeScript code is a superset of JavaScript code—it has all the features of traditional JavaScript but adds some new features.

- TypeScript files have the extension .ts.
- TS files are run through the TypeScript transpiler. The transpiler will check that the code adheres to TypeScript’s standards, and it will display errors when it does not.
- If the TypeScript code can be converted into working JavaScript, the transpiler will output a JavaScript version of the file (.js).

### Type Inferences

With TypeScript, when we declare a variable with an initial value, the variable can never be reassigned a value of a different data type. This is an example of **type inference**: everywhere in our program, TypeScript expects the data type of the variable to match the type of the value initially assigned to it at declaration. Attempting to change a variable's type will result in an error.

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

### Review
