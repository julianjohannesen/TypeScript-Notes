# Interfaces

TS allows you to create custom types using the **interface** keyword.

Interfaces are only used at transpile time and never appear in your runtime code.

```ts
interface Contact {
    id: number;
    name: string;
    // The question mark indicates that this field is optional
    birthdate?: Date;
}
// primaryContact is assigned type 'Contact'
let primaryContact: Contact;
```

The syntax is very close to JS class syntax, however, each line ends in an optional semicolon rather than a comma.

Notice the question mark at the end of 'birthdate?'. That question mark indicates that the field is optional. Because it's an optional field, the TS compiler will not raise an error if you leave this field out when you define primaryContact.

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
    // Include any field from Address
    postalCode: 02145
}
```

But can you create, for example, custom types for state and postal code that match a particular regexp pattern?

There's a lot more to interfaces and to typing objects in general. For example, in the TS official documentation, during the discussion of ["Everyday Types"](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html), which is early on in the Handbook, it's mentioned that in JavaScript, if you access a property that doesn’t exist, you’ll get the value **undefined** rather than a runtime error. Because of this, when you read from an optional property, you’ll have to check for undefined before using it. This comes up because, when you pass an object to a function as a parameter, and that object has optional properties, you may end up in this situation. 

```js
// We give types to the object parameter and to the properties in that object
function printName(obj: { first: string; last?: string }) {
    // Error - might crash if 'obj.last' wasn't provided!
    console.log(obj.last.toUpperCase());
    
    // This is one traditional way to check whether a property exists before trying to reference it. There are several.
    if (obj.last !== undefined) {
        console.log(obj.last.toUpperCase());
    }
 
    // Here's a safe alternative using modern "optional chaining" which will return undefined if "last" is undefined or null.
    console.log(obj.last?.toUpperCase());
}
```

## Type Interfaces and Type Aliases

Type interfaces and type aliases are very similar. They can both be extended in a way. You can extend an interface using the 'extends' keyword, in the same way you might extend a class. You can also extend a type alias using an intersection of type aliases. However, type aliases are more limited in their functionality. This is from the TS Handbook:

```ts
//Extending an interface

interface Animal {name: string}
interface Bear extends Animal {honey: boolean}

const bear = getBear() 
bear.name
bear.honey
        
//Extending a type via intersections

type Animal = {name: string}
type Bear = Animal & {honey: boolean}

const bear = getBear();
bear.name
bear.honey
```

However, types are more limited. You can add fields to an interface later on, but you can't do that with a type alias.

```ts
//Adding new fields to an existing interface

interface Bloop {greeting: string}
interface Bloop {numero: number}
interface Bloop {greet: (greeting, numero) => void}

const blooper: Bloop = {
  greeting: "Hello", 
  numero: 5, 
  greet: (greeting, numero)=>console.log(greeting + ", number " + numero)
}

blooper.greet(blooper.greeting, blooper.numero);
        
//A type cannot be changed after being created

type Schmoop = {greeting: string}
type Schmoop = {numero: number}

 // Error: Duplicate identifier 'Schmoop'.
 ```

