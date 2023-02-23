# Type Literals

Literals can be represented by different types depending on how the variables assigned to them are declared. Because a string variable declared with "let" can change to any other string, TS considers it to have a type of "string." However, because string variable declared with const cannot change, TS considers it to have a type of whatever its actual value is. See the example below. 

```ts
let changingString = "Hello World";
changingString = "Olá Mundo";
// Because `changingString` can represent any possible string, that is how TypeScript describes it in the type system
changingString; //-> Hover over this to see "let changingString: string"
 
const constantString = "Hello World";
// Because `constantString` can only represent 1 possible string, it has a literal type representation
constantString; //-> Hover over this to see "const constantString: "Hello World""
```

What's the point of that?

What's useful about type literals is that you can combine them with type unions to create type unions that accept only specific values:

```ts
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre"); //Notice that center is spelled incorrectly. TS will catch this error.
//-> TS Error: Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.
```

Because of type literals, the type union above not only specifies that there are three acceptable string arguments, but also exactly which strings are acceptable.
