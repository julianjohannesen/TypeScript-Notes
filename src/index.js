/*
Nothing to see here.
*/
console.log("Hello, world!");
function solution(number) {
    var tracker = number;
    var instances = [];
    var magnitudes = { 0: 1000, 1: 500, 2: 100, 3: 50, 4: 10, 5: 5, 6: 1 };
    var sizeHash = { 0: 'M', 1: 'D', 2: 'C', 3: 'L', 4: 'X', 5: 'V', 6: 'I' };
    var result = [];
    function getNumeralInstances(remaining, size) {
        return Math.floor(remaining / size);
    }
    function updateRemaining(remaining, size) {
        return remaining -= Math.floor(remaining / size) * size;
    }
    // For each Roman numeral magnitude, store the number of instances that we'll need of that magnitude in the instances array and then update the remaining number left
    function getInstances() {
        for (var x = 0; x < Object.keys(magnitudes).length; x++) {
            // For each type of Roman numeral, find out how many of that type are needed to express the number and store that number in an array
            // When x=0, tracker=number, size=1000
            instances.push(getNumeralInstances(tracker, magnitudes[x]));
            console.log(instances);
            // Update the tracker keeping track of how much number is left
            // When x=0, tracker=number, size=1000
            tracker = updateRemaining(tracker, magnitudes[x]);
            console.log(tracker);
        }
    }
    getInstances();
    // Cycle through each Roman numeral type, e.g. M, then D, etc.
    for (var x = 0; x < 7; x++) {
        for (var y = 0; y < instances[x]; y++) {
            result.push(sizeHash[x]);
        }
    }
    // I need to figure out how to process the array of roman numerals to change things like IIII into IV
    console.log('The tracker value is: ' + tracker);
    console.log('The joined result is: ', result.join(''));
    return result.join('');
}
console.log(solution(4600));
function printId(id) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string', and because TS knows this, it can infer that there's no problem calling toUpperCase() on id. 
        console.log(id.toUpperCase());
    }
    else {
        // Here, TS can infer that id can only be of type number, because a string would get captured by the conditional above. So, we can call Math.round()
        console.log(Math.round(id));
    }
}
console.log(printId(3.2459));
var blooper = {
    greeting: "Hello",
    numero: 5,
    greet: function (greeting, numero) { return console.log(greeting + " number " + numero); }
};
blooper.greet(blooper.greeting, blooper.numero);
// Error: Duplicate identifier 'Schmoop'.
function first(elements) {
    return elements[0];
}
console.log(first([true, false]));
