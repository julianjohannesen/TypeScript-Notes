# Type Examples

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

## Array

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

## Objects

## Function