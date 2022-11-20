/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])

*/
// pop happens in linear time, shift happens in O(n) time

// sort in descending order, then pop off the top every time.
// O(n) time.
function leonsOptimizedSolution(arr) {
    const oddNums = arr.filter(n => n % 2).sort((a, b) => b - a);
    return arr.map(n => n % 2 === 0 ? n : oddNums.pop())
}

// sort in ascending order, then shift off the bottom every time.
// O(n^2) complexity.
function leonsNaiveSolution(arr) {
    const oddNums = arr.filter(n => n % 2 !== 0).sort((a, b) => a - b);
    return arr.map(n => n % 2 === 0 ? n : oddNums.shift())
}

function myThreeLineSolution(arr) {
    let odds = arr.filter(n => n % 2).sort()
    let oddsIndex = 0;
    return arr.map(n => n % 2 ? odds[oddsIndex++] : n )
}
function mySolution(arr) {
    let odds = arr.filter((n) => n % 2 ? n : null).sort()
    let oddsIndex = 0;
    return arr.map((n, i) => {
        if(n % 2) {
            // let's use post increment operator here.
            return odds[oddsIndex++]
        } else {
            return n
        }
    })
}
const sortArray = mySolution

test(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
test(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])


function test(results, expected) {
    if(JSON.stringify(results) === JSON.stringify(expected)) {
        console.log("PASSED")
    } else {
        console.log("FAILED")
    }
}