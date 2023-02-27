# Type Literals

Literals can be represented by different types depending on how the variables assigned to them are declared. Because a string variable declared with "let" can change to any other string, TS considers it to have a type of "string." However, because a string variable declared with const cannot change, TS considers it to have a type of whatever its actual value is. See the example below.

```ts
let changingString = "Hello World";
changingString = "Olá Mundo";
// Because `changingString` can represent any possible string, that is how TypeScript describes it in the type system
changingString; //-> Hover over this in a TS file to see "let changingString: string"
 
const constantString = "Hello World";
// Because `constantString` can only represent 1 possible string, it has a literal type representation
constantString; //-> Hover over this in a TS file to see "const constantString: "Hello World""
```

## Usefulness of Type Literals

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

## Note on Destructuring with Type Literals

Using destructuring with type literals can look really confusing at first.

```ts
// Note the type literal {name: string}
function userName(user: {name: string}): string {
  return user.name;
}
userName({name: 'Amir'}); //-> 'Amir'
```

Now, let's shorten this by using JavaScript destructuring, which "grabs" name out of the argument. Destructuring and object arguments sometimes look strange together, but remember that the type is to the right of the : symbol.

```ts
// {name} is the destructured variable and :{name: string} is the type
function userName({name}: {name: string}): string {
  return name;
}
userName({name: 'Amir'}); //->'Amir'
```

## Type Assignment with Literal Types

Consider the following:

```ts
function aBoolean(): boolean { return true; }
let t: true = aBoolean();
t; //-> type error: Type 'boolean' is not assignable to type 'true'.
```

It's not possible to assign a wider type like **boolean** to a narrower type like the literal **true**. Consider this analogy. Take a drawer for forks and knives. It's perfectly fine to put either a fork or a knife in that drawer. Now consider a drawer for only forks. Putting a "fork | knife" in that drawer won't work, because a "fork | knife" might turn out to a knife.
