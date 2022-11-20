/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    let hashmap = new Map();
    let result = []
    nums1.forEach(n => {
        if(!hashmap.get(n)) {
            hashmap.set(n, 10);
        }  
    })
    nums2.forEach(n =>{
        if(hashmap.get(n)) {
            hashmap.delete(n)
            result.push(n);   
        }
    })
    return result
};

/*
Implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

arrayDiff([], [4,5]), [], "a was [], b was [4,5]"

arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"

arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"

*/

// time complexity: O(n + m)
function leonsBetterSolution(a,b) {
    let newSet = new Set(b); // happens in O(n);
    return a.filter(n => !newSet.has(n)); // Happens in O(m) time; newSet.has() happens in O(1) time.

}

function leonsNaiveSolution(a,b) {
    return a.filter(function(x) { return b.indexOf(x) == -1;});
}

// time complexity: O(n + m)
function myBetterSolution(nums1, nums2) {
    if(nums1.length === 0 || nums2.length === 0) return nums1;

    let hashmap = new Map()
    let result = []
    nums2.forEach(n =>{
        if(!hashmap.get(n)) {
            hashmap.set(n, 1);
        }
    })
    nums1.forEach(n => {
        if(!hashmap.get(n)) {
            result.push(n)
        }
    } )
    return result;
}  

// time complexity: O(n * m);
function mySolution(nums1, nums2) {
    if(nums1.length < 1) return []
    let result = []
    nums1.forEach(n => {
        if(nums2.indexOf(n) < 0) {
            result.push(n)
        }
    })
    return result
}

const arrayDiff = leonsBetterSolution

function test(result, expected) {
    if(JSON.stringify(result) === JSON.stringify(expected)) {
        console.log("PASSED");
    } else {
        console.log("FAILED")
    }
}
test(intersection([1,2,3,4], [0,1]), [1])
console.log('----------------------')
test(arrayDiff([1,8,2], []), [1,8,2])
test(arrayDiff([3,4], [3]), [4])
test(arrayDiff([], [4,5]), [])
test(arrayDiff([1,2,2,2,3],[2]), [1,3])