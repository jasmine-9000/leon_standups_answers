/*An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the array and no difference with it, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).

findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')
*/

function leonsBetterSolution(arr, mixArr) {
    if(arr.length === mixArr.length) return 0;

    let arrSum = arr.reduce((a,c) => a+ c, 0)
    let mixSum = mixArr.reduce((a,c) => a+ c, 0)
    return arrSum - mixSum
}

function leonsEvenBetterSolution(arr, mixArr) {
    if(arr.length === mixArr.length) return 0; // base case: just return.
    let hashMap = {}
    mixArr.forEach(n => {
        if(!(n in hashMap)) {
         hashMap[n] = 1;   
        }
    })
    let res;
    for(let i = 0; i < arr.length; i++) {
        let n = arr[i];
        if(!(n in hashMap)) {
            return n
        }
    }
}

function leonsNaiveSolution(arr, mixArr) {
    return arr.filter(n => mixArr.indexOf(n) === -1)[0] || 0
}

// arguments: 
// @arg arr1: array with only integers in it. 
// @arg arr2: array with only integers in it. this one will always be more 
function mySolution(arr1, arr2) {
    let resultArray = arr1.filter(i => arr2.indexOf(i) === -1);
    if(resultArray.length > 0) {
        return resultArray[0];
    }
    return 0;

}
const findDeletedNumber = leonsEvenBetterSolution



test(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
test(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
test(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')
test(findDeletedNumber([1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20], [5,7,6,9,4,8,1,2,3,11,12,13,14,15,16,17,18,19]), 20, 'Deletion')
test(findDeletedNumber([1,2,3,4,5,100,7,8,9,11,12,13,14,15,16,17,18,19,20], [1,2,3,4,5,7,8,9,11,12,13,14,15,16,17,18,19,20]), 100, 'Deletion')
test(findDeletedNumber([-1, 1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), -1, 'Deletion')




function test(result, expected, expectedDeletionStatus) {
    let resultDeletionStatus = "Deletion";
    if(result === expected) {
        if(result === 0) {
            resultDeletionStatus = "No deletion"
        }
        if(resultDeletionStatus === expectedDeletionStatus) {
            console.log("PASSED")
            return;
        }
    }
    console.log("FAILED")
}