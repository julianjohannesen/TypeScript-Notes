## Types

### Type **Inferences**

TS does not allow you to change the type of a variable once that variable is assigned a value. 

If you declare a variable and an assign it a value using ordinary JS in a TS file, TS will **infer** that the variable has the given data type.  For example, 

```js
let x = 5; 
```

...will result in TS inferring that x is type number. Attempting to change a variable's type will result in an error.

### Type **Shapes**

An object’s shape describes, among other things, what properties and methods it does or doesn’t contain.

TypeScript’s tsc command will let you know if your code tries to access properties and methods that don’t exist:

```js
"MY".toLowercase();
// Property 'toLowercase' does not exist on type '"MY"'.
// Did you mean 'toLowerCase'?
```

### Type **Any**

What happens when a variable is declared without being assigned an initial value? In situations where it isn’t able to infer a type, TypeScript will consider a variable to be of type **any**. For example,

```ts
// TS will assign type any to x
let x;
x = 'Apple';
// Changing type doesn't result in an error
x = 47;
```

Variables of type any can be assigned to any value and TypeScript won’t give an error if they’re reassigned to a different type later on.

### Type Annotation

In some situations, we’d like to declare a variable without an initial value while still ensuring that it will only ever be assigned values of a certain type. If left as any, TypeScript won’t be able to protect us from accidentally assigning a variable to an incorrect type that could break our code.

We can tell TypeScript what type something is or will be by using a **type annotation**.

We provide a type annotation by appending a variable with a colon (:) and the type (e.g., number, string, or any).

```ts
let mustBeAString : string;
mustBeAString = 'Catdog';
 
mustBeAString = 1337;
// Error: Type 'number' is not assignable to type 'string'
```

See [File 3](./f003-type-examples.md) for some examples of type annotations.

### Type Aliases

A type alias allows you to give a different name to a type, so that your interfaces, etc. can be more descriptive.

```ts
type ContactName = string;
```

### enums

You can provide a list of acceptable values for a type with an enum.

```ts
enum ContactStatus {
    Active,
    Inactive,
    New
}
```

If you refer to an enum like this, it will give you a 0-indexed number value when you hover over it in your code. However, you can also add values when you define the enum, e.g.

```ts
enum ContactStatus {
    Active = 'active',
    Inactvie = 'inactive',
    New = 'new'
}

let primaryContact: Contact = {
    //...
    status: ContactStatus.Active
}
```

Hovering over 'ContactStatus.Active' will show the value 'active.'