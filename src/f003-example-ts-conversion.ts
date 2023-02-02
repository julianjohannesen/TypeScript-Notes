/* Original JS below:

const formattedDate = formatDate(new Date())

console.log(`Today's date is ${formattedDate}`)

function formatDate(date) {
    return date.toLocaleDateString("en-US", {
        dateStyle: "medium"
    })
}

*/

const formattedDate:String = formatDate(new Date())

console.log(`Today's date is ${formattedDate}`)

function formatDate(date:Date) {
    return date.toLocaleDateString("en-US", {
        dateStyle: "medium"
    })
}