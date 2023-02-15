// Below, the original JS version of each block of code precedes the TS version
// Second create an enum for TodoStatus. Remember that if you don't supply a value like we have here, then TS will interpret these options as 0, 1, 3, ... etc.
var TodoStatus;
(function (TodoStatus) {
    TodoStatus["Todo"] = "todo";
    TodoStatus["InProgress"] = "in-progress";
    TodoStatus["Done"] = "done";
})(TodoStatus || (TodoStatus = {}));
// Third, create a Todo[] array, meaning that this is an array containing Todo typed items.
const todoItems = [
    {
        id: 1,
        title: "Learn HTML",
        // We use dot notation to indicate the TodoStatus option
        status: TodoStatus.Done,
        completedOn: new Date("2021-09-11")
    },
    {
        id: 2,
        title: "Learn TypeScript",
        status: TodoStatus.InProgress
    },
    {
        id: 3,
        title: "Write the best app in the world",
        status: TodoStatus.Todo
    }
];
// The JS version of the addTodoItem function. Here we create an id and a also a newTodo object. Then we push the new todo object to todoItems and also return the new todo object.
// function addTodoItem(todo) {
//     const id = getNextId(todoItems)
//     const newTodo = { id, title: todo, status: "todo" }
//     todoItems.push(newTodo)
//     return newTodo
// }
// The TS version
// The param is a string, but the function returns an item of type Todo
function addTodoItem(todo) {
    // Add the type to id
    //? When I call getNextId, should I supply a type for todoItems?
    const id = getNextId(todoItems);
    const newTodo = {
        id,
        title: todo,
        // Use the enum here.
        status: TodoStatus.Todo
    };
    todoItems.push(newTodo);
    return newTodo;
}
// The JS version of the getNextId() function
// function getNextId(items) {
// the reducer starts at 0 and the callback takes an accumulator called 'max' and a current value called 'x' and returns either the accumulator or the value of the current todo item's id property, depending on whether the value of the current todo item's id exceeds the accumulator value
//     return items.reduce((max, x) => (x.id > max) ? max : x.id, 0) + 1
// }
// The TS version
// getNextId takes an array of Todo items and returns a number
function getNextId(items) {
    // Return currentItem.id, until currentItem.id becomes larger than the accumulator, and then return the accumulator
    return items.reduce(
    // The accumulator and current value
    (max, currentItem) => {
        return currentItem.id > max
            ?
                max
            :
                currentItem.id;
    }, 0) + 1;
}
const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app");
console.log(JSON.stringify(newTodo));
// The app transpiles without errors and correctly returns the new Todo object when you run node f004-example-ts-conversion.js. However, you can further generalize the getNextId() function with a generic like this:
function getNextId2(items) {
    return items.reduce((max, x) => (x.id > max) ? max : x.id, 0) + 1;
}
// <T extends {id:number} > is an example of a generic that constrains the possible arguments for getNextId2 to arrays of items that are objects with an id property and with the id being of type 'number.' If you attempt to use a generic without supplying the 'extends {id:number}' information, you'll get a TS error, because TS requires that you supply that additional info about 'id'
