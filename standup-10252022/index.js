/*

Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

solve([[1,2],[4],[5,6]]),4)
solve([[1,2],[4,4],[5,6,6]]),4)
solve([[1,2],[3,4],[5,6]]),8)
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)

*/

const solve = myBetterSolution
// only these cases will be tested.
// if they all print true, then every test passes.
test(solve([[1,2],[4],[5,6]]),4)
test(solve([[1,2],[4,4],[5,6,6]]),4)
test(solve([[1,2],[3,4],[5,6]]),8)
test(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)


// my solution
// @arg arrTuple: multidimensional array of digits. length is always 3.
// @return integer: number of unique arrays that can be picked. 
function mySolution(arrTuple) {
    let resultsArray = [];
    let arr1 = arrTuple[0];
    let arr2 = arrTuple[1] 
    let arr3 = arrTuple[2] 
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            for(let k = 0; k < arr3.length; k++) {
                let arr = [arr1[i], arr2[j], arr3[k]];
                resultsArray.push(JSON.stringify(arr));
            }
        }
    }
    let resultSet = new Set(resultsArray)
    return resultSet.size;
}

function test(a, b) {
    console.log(a === b);
}

function myBetterSolution(arrTuple) {

    return arrTuple.map(arr => new Set(arr))
        .reduce((acc, c) => acc * c.size, 1)

}