# Generics

## Why do we need generics?

From the Handbook's section on [generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)

A major part of software engineering is building components that not only have well-defined and consistent APIs, but are also *reusable*. Components that are capable of working on the data of today as well as the data of tomorrow will give you the most *flexible* capabilities for building up large software systems.

In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is generics, that is, being able to create **a component that can work over a variety of types rather than a single one**. This allows users to consume these components and use their own types.

Without generics, we would either have to give the identity function a specific type:

```ts
function identity(arg: number): number {
  return arg;
}
```

Or, we could describe the identity function using the any type:

```ts
function identity(arg: any): any {
  return arg;
}
```

While using any is certainly generic in that it will cause the function to accept any and all types for the type of arg, we actually are losing the information about what that type was when the function returns. If we passed in a number, the only information we have is that any type could be returned.

Instead, **we need a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned**. Here, we will use a **type variable**, a special kind of variable that works on types rather than values.

```js
function identity<Type>(arg: Type): Type {
  return arg;
}
```

## Two Ways to Call a Generic Function

There are 2 ways to call a generic function: (1) explicitly or (2) using type inference.

```js
// Explicitly type the argument with a type annotation
let output = identity<string>("myString");
// Allow TS to infer the argument type
let output = identity("myString");
```

It's preferable to allow TS to infer the type, but it's not always possible to do that in more complicated code.

## Working with Generic Type Variables

When you begin to use generics, you’ll notice that when you create generic functions like identity, **the compiler will enforce that you use any generically typed parameters in the body of the function correctly**.

Consider the following function.

```js
function loggingIdentity<Type>(arg: Type): Type {
  console.log(arg.length);
  return arg; //-> ERROR: Property 'length' does not exist on type 'Type'.
}
```

Our generic Type has no length method or property. But we can narrow the type of the generic to allow using the length property. I'm not sure 'narrowing' is the right term here, but I'm going with it.

```js
// Now that we're dealing with arrays of things with type Type, we have access to the length property, because arrays have a length property.
function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}
```

Here's an alternate syntax:

```js
function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}
```

## Typing Functions with Type Variables

The type of generic functions is just like those of non-generic functions, with the type parameters listed first, similarly to function declarations:

```js
function identity<Type>(arg: Type): Type {
  return arg;
}
```

This next bit really confused me when I first looked at it. The JS equivalent of line 103 is:

```js
let myIdentity = identity
```

Everything else is part of the type information.

```ts
// I think that, in practice, if TS knows identity's type, then we don't need the typing for myIdentity.
// Here, we supply a sort of type signature for the function
let myIdentity: <MyTypeVariable> (arg: MyTypeVariable) => MyTypeVariable = identity;
```

We could also have used a different name for the generic type parameter in the type, so long as the number of type variables and how the type variables are used line up.

```ts
function identity<T>(arg: T): T {
  return arg;
}
 
let myIdentity: <Input>(arg: Input) => Input = identity;
```

## The Example from TypeScript Essential Training

Generic types allow you to define a function such that the input and output will have the same type without specifying what that type is. For example,

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

### Generic Constraints

You can also add generic constraints that will constrain the types of inputs or output in a generic type. For example, **if you add the word 'extends T1' to T2 above, you require that T2 has to at least match T1 in terms of its properties and methods, although it can add additional properties and methods beyond that**. Note that this doesn't mean that T2 has to literally extend the interface T1, it just has to match its signature in terms of properties and methods and their types.

```ts
function clone<T1, T2>(source: T1): T2 extends T1 {
    return Object.apply({}, source);
}
```

### Additional Notes on Generic Functions from Execute Program

We can define generic functions using the same <> syntax. When a function is generic, it has a "type hole", just like Array does. The hole must be filled by a type, just as number fills Array<number>.

```ts
function first<T>(elements: Array<T>): T {
  return elements[0];
}
// In practice, we don't have to supply the <boolean> type, because TS can infer it from the arguments we supply
first<boolean>([true, false]);
```

Type parameters should be UpperCamelCased This convention makes it easy for us to tell a User type from a user variable.
