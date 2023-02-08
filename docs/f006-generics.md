## Generics

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
