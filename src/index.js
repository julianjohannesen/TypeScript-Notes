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
    console.log('The tracker value is: ' + tracker);
    console.log('The joined result is: ', result.join(''));
    return result.join('');
}
console.log(solution(4600));
