## Typing Functions

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

Now Ts will raise an error if the returned object does not have type Contact.

Imagine that clone() took a function and you wanted to provide type information for that function. You could do that like this:

```ts
function clone(
    source: Contact,
    // A type signature for the function 'myFunction' 
    myFunction: (source:Contact) => Contact
    ): Contact {
        return Object.apply({}, source)
}
```

The new syntax looks like a function signature. It's succinctly showing the type of the parameter that the function myFunction takes and also showing the type of the object returned by myFunction.

You can also add methods to an Interface like this:

```ts
Interface Contact {
    id: number;
    name: string;
    // Function 'clone' takes a Contact and returns a Contact
    clone(source: Contact): Contact;
}
```

A function that takes no parameters would look like this:

```ts
Interface Contact {
    id: number;
    name: string;
    // Function 'clone' takes no parameters and returns a Contact
    clone(): Contact;
}
```
