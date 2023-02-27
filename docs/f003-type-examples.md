# Type Examples

Keep in mind that you wouldn't actually type annotate most of these examples in practice, because TypeScript can infer their the correct type without any help.

## Numbers

```ts
let first:number = 123;         // number 
let second: number = 0x37CF;    // hexadecimal
let third:number = 0o377;       // octal
let fourth: number = 0b111001;  // binary  

console.log(first);  // 123 
console.log(second); // 14287
console.log(third);  // 255
console.log(fourth); // 57 
```

## Strings

```ts
let employeeName:string = "John Smith"; 
let employeeDept:string = "Finance"; 

// Pre-ES6 
let employeeDesc1: string = employeeName + " works in the " + employeeDept + " department."; 

// Post-ES6 
let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department.`; 

console.log(employeeDesc1);//John Smith works in the Finance department. 
console.log(employeeDesc2);//John Smith works in the Finance department. 
```

## Boolean

```ts
let isPresent:boolean = true;
```

Always use lower "boolean."

## Arrays

There are two ways to indicate the type "array" in TS:

1. Using square brackets. This method is similar to how you would declare arrays in JavaScript.

```ts
// An array of strings
let fruits: string[] = ['Apple', 'Orange', 'Banana'];
```

2. Using a generic array type, Array<elementType>.

```ts
// An array of strings
let fruits: Array<string> = ['Apple', 'Orange', 'Banana'];
```

Note that you can also have arrays of arrays.

```ts
// string[][] indicates an array of one or more arrays of strings
const arrayOfArraysOfStrings: (string[])[] = [['hello'], ['world']];
```

We added parentheses in that type to clarify that the things inside the array have the type string[]. But those parentheses aren't necessary and are rarely used in real-world TypeScript code.

```ts
const arrayOfArraysOfStrings: string[][] = [['hello'], ['world']];
```

## Tuples

Tuples are similar to arrays, however, they can have different types in each index. This is different from arrays, where every element must have the same type.

## Objects

The following is from Execute Program's course on TypeScript Basics.

In JavaScript, myObject.someProperty will return undefined if someProperty doesn't exist. This has caused an uncountable number of errors in production applications. The most common symptom is the "undefined is not a function" error when we do myObject.someProperty().

```ts
// Notice that this is a type and not an interface
type User = {
    // Notice that there's no comma between email: string and admin: boolean
    // You could use an optional semicolon
    email: string
    admin: boolean
};
let amir: User = {
    // When you declare the actual variable, you use normal JS syntax, including the comma
    email: 'amir@example.com',
    admin: true,
};
amir.admin; //-> true
```

The object type syntax looks similar to the literal object syntax. However, we can NOT use expressions like 1 + 1 or true || false in a type. That would be a syntax error because **expressions are never allowed in types**.

```ts
// Don't use in expressions in TS types
type User = {email: string, admin: true || false};
//-> syntax error: on line 1: ';' expected.
```

Another example of the fact that in type declarations, we don't use commas between values.

```ts
type Reservation = {
    user: {
        email: string
        admin: boolean
    } // Notice that there's no comma here
    roomNumber: number
};
```

Notice that there's no comma between the two objects making up Reservation!

## Note about NaN

NaN is a problem, because any operation involving Nan will return NaN. That means that NaNs can propagate through your code.  In addition, NaN is not identical to anything, not even itself, so you can't easily check for it. Instead, you have to check for the resulting NaN with isNaN().

Imagine we want a function to turn any string representing a number into a number. parseFloat() might seem like a good solution. However, when parseFloat() fails, it returns NaN.

```ts
parseFloat('three') //->NaN
```

Here's how we have to do it:

```ts
function stringToNumber(s: string): number | undefined { 
    const n = parseFloat(s); 
    if (isNaN(n)) { 
        return undefined
    } 
    return n; 
}
```

When we use this function, the TypeScript compiler makes us check for undefined before using the result as a number.

```ts
stringToNumber('3') + 1; // type error: Object is possibly 'undefined'.
const n = stringToNumber('3');
n !== undefined ? n + 1 : undefined; // n will return 4
```
