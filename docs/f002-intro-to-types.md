## Types

### Type Inferences

TS does not allow you to change the type of a variable once that variable is assigned a value. 

If you declare a variable and an assign it a value using ordinary JS in a TS file, TS will **infer** that the variable has the given data type.  For example, 

```js
let x = 5; 
```

...will result in TS inferring that x is type number. Attempting to change a variable's type will result in an error.

### Type Annotation


### Type Shapes

An object’s shape describes, among other things, what properties and methods it does or doesn’t contain.

TypeScript’s tsc command will let you know if your code tries to access properties and methods that don’t exist:

```js
"MY".toLowercase();
// Property 'toLowercase' does not exist on type '"MY"'.
// Did you mean 'toLowerCase'?
```

### Any

There are some places where TypeScript will not try to infer what type something is—generally when a variable is declared without being assigned an initial value. In situations where it isn’t able to infer a type, TypeScript will consider a variable to be of type **any**.

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

Intefaces are only used at transpile time and never appear in your runtime code.

```ts
intefact Contact {
    id: number;
    name: string;
    birthdate?: Date;
}

let primaryContact: Contact;
```

The syntax is very close to JS class syntax, however, each line ends in a semicolon rather than a comma.

Notice that question mark at the end of birthday. That question mark indicates that the field is optional. Because it's an optional field, tsc will not raise an error if you leave this field out when you define primaryContact.

Multiple interfaces can be combined to create a new interface. For example, we could add an Address interface to Contact to include address fields.

```ts
interface Address {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalCode: number;
}

interface Contact extends Address {
    id: number;
    name: string;
    birthDate?: Date;
}

let primaryContact: Contact = {
    id: 4456,
    name: "Bob Smith",
    postalCode: 02145
}
```

But can you create for example, custom types for state and postal code that match a particular pattern?

### Type Alias

A type alias allows you to give a different name to a type.

```ts
type ContactName = string;
```

### enums

You can provide a list of acceptable values for a type.

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

Hovering over 'ContactStatus.Active' will show the value 'active.' Perhaps this is the right way to provide a type for 'state' up above. An enum with 50 values. 

### Typing Functions

Functions can also be typed. Consider this:

```js
function clone(source){
    return Object.apply({}, source);
}
```

What if we wanted that function to only take objects of type Contact? Then we could add a type to the parameter like this:

```ts
function clone(source: Contact) {
    return Object.apply({}, source);
}
```

Now the function will only take Contacts as arguments. 

But there's a problem, because Object.apply() returns type Any, which means that TS will infer that clone() returns type Any rather than type Contact. Here's how you fix that:

```ts
function clone(source: Contact): Contact {
    return Object.apply({}, source)
}
```

Now the returned object will have type Contact.

Imagine that clone() took a function and you wanted to provide type information for that function. You could do it like this:

```ts
function clone(source: Contact, myFunction: (source:Contact) => Contact): Contact {
    return Object.apply({}, source)
}
```

The new syntax look like a function signature. It's succinctly showing the type of the parameter that the function myFunction takes and also showing the type of the object returned by myFunction.

You can also add methods to an Interface like this:

```ts
Interface Contact {
    id: number;
    name: string;
    clone(source: Contact): Contact;
}
```

### Generics

Generic types allow you to define a function such that the input and output will have the same type without specifying what that type is. For exampel,

```ts
function clone<T>(source: T): T {
    return Object.apply({}, source)
}
```

<T> is commonly used, but you can use any type you would like. You can also define multiple generics. Say you wanted the input to be of one type and the output of another:

```ts
function clone<T1, T2>(source: T1): T2{
    return Object.apply({}, source);
}
```

When you do that, you have to specify the types when you call the function like this:

```ts
let b = clone<Contact, SomeOtherType>(a);
```

You can also add generic constraints that will contrain the types of inputs or ouput in a generic type. For example, if you add the word 'extends T1' to T2 above, you require that T2 has to at least match T1 in terms of its properties and methods, although it can add additional properties and methods beyond that. Note that this doesn't mean that T2 has to literally extend the interface T1, it just has to match its signature in terms of properties and methods and their types.

```ts
function clone<T1, T2>(source: T1): T2 extends T1 {
    return Object.apply({}, source);
}
```


