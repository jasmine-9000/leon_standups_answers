/*

You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers.

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/

// there will always be 3 .
function gimme(arr) {
    let arrCopy = [...arr]
    let sortedArr = arr.sort((a,b) => a - b);
    let middleInt = sortedArr[1];
    return arrCopy.indexOf(middleInt);
    /*
    console.log(...arr)
    let arrmap = arr.map((num, index) => [num, index]);
    console.log(arrmap)
    console.log(...arrmap)
    console.log('-------')
    let sorted = arrmap.sort((a,b) => {
        console.log(a)
        console.log(b)
        console.log(a[0])
        console.log(b[0])
        return a[0] > b[0]
    })
    console.log(sorted);
    */
}

test(gimme([5,10,14]), 1)
test(gimme([2,3,1]), 0)
test(gimme([1,3,2]), 2)
test(gimme([5,15,10]), 2)
test(gimme([10,15,5]), 0)


function test(results, expected) {
    if(results === expected) {
        console.log("PASSED")
    } else {
        console.log("FAILED")
    }
}
