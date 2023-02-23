# Type Assertions

From the TS Handbook section on [Type Assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions):

Sometimes you will have information about the type of a value that TypeScript can’t know about.

For example, if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.

In this situation, you can use a type assertion to specify a more specific type:

```ts
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```

Here's the same thing using the alternative angle bracket syntax:

```ts
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

You can only use type assertions to make your variables' types more or less specific.

