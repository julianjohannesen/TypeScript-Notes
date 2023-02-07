// The JS version
// const todoItems = [
//     { id: 1, title: "Learn HTML", status: "done", completedOn: new Date("2021-09-11") },
//     { id: 2, title: "Learn TypeScript", status: "in-progress" },
//     { id: 3, title: "Write the best app in the world", status: "todo" },
// ]
// Second create an enum for TodoStatus
var TodoStatus;
(function (TodoStatus) {
    TodoStatus["Todo"] = "todo";
    TodoStatus["InProgress"] = "in-progress";
    TodoStatus["Done"] = "done";
})(TodoStatus || (TodoStatus = {}));
// Third, create a Todo[] array, meaning that this is an array containing Todo typed items
var todoItems = [
    {
        id: 1,
        title: "Learn HTML",
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
// The JS version
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
    var id = getNextId(todoItems);
    var newTodo = {
        id: id,
        title: todo,
        status: TodoStatus.Todo
    };
    todoItems.push(newTodo);
    return newTodo;
}
// The JS version 
// function getNextId(items) {
//     return items.reduce((max, x) => (x.id > max) ? max : x.id, 0) + 1
// }
// The TS version
// getNestId takes an array of Todo items and returns a number
function getNextId(items) {
    // Return currentItem.id, until currentItem.id becomes larger than the accumulator, and then return the accumulator
    return items.reduce(
    // The accumulator and current value
    function (max, currentItem) {
        return currentItem.id > max
            ?
                max
            :
                currentItem.id;
    }, 0) + 1;
}
var newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app");
console.log(JSON.stringify(newTodo));
