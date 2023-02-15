## The keyof operator

The **keyof** operator is similar to the JS instanceof operator. It works like this:

```ts
type ContactFields = keyof Contact;

const field: ContactFields = "" // A dropdown appears showing only the fields in the Contact interface
```

What we're telling TS is that ContactFields can represent any of the fields in the Contact interface. Any variable that we create, for example, "field" can be assigned a type of ContactFields, which will automatically pop up a dropdown menu showing the fields in the Contact interface. And if we update the Contact interface with a new field, that field will show up whenever we next want to create a variable of type ContactFields.

Consider this function:

```ts
function getValue(sourceObject, propertyName) {
    return sourceObject[propertyName];
}
```

And now imagine that you want to get the status value of from a Contact type object.

```ts
const value = getValue(myContact, "sttaus")
```

Without any typing information, this spelling mistake could easily slip by and create a huge headache later, because getValue will happily return 'undefined.'

Now consider:

```ts
function getValue(sourceObject, propertyName: keyof Contact) {
    return sourceObject[propertyName];
}
```

You could also refactor this to a generic function like this:

```ts
function getValue<T>(sourceObject: T, propertyName: keyof T){
    return sourceObject[propertyName];
}
```

This is really cool. Now TS will ensure that the property name that we pass into getValue() is a property of the first argument's type. Whatever T is, propertyName will be a property of T.

Now let's go further and constrain the type of T that can be used.

```ts
function getValue<T, U extends keyof T>(sourceObject, propertyName: U) {
    return sourceObject[propertyName];
}
```

This doesn't extend the functionality of this particular function, but you could use this technique in a different function, if you had a reason to need U later on.


