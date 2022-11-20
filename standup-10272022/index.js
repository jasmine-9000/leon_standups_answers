/*

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, 
or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

*/

// @arg str: string. Not an integer, but can contain a string. 
// can be any length
// capitals are ignored
// Time complexity: nlog(n)
function processString(str) {
    let result = "";
    let strProcess = str.toLowerCase();

    [...strProcess].map(char => {
        if(str.indexOf(char) === str.lastIndexOf(char)) {
            result += "("
        } else {
            result += ")"
        }
    })
    return result
}

function leonSolution1(str) {
    
    // toLowerCase()
    // split -> map -> indexOf === lastIndexOf
    // return [...str.toLowerCase()].map(char => str.indexOf(char) === str.lastIndexOf(char) ? "(" : ")").join("");
    return str.toLowerCase()
            .split('')
            .map((char, index, arr) => arr.indexOf(char) === arr.lastIndexOf(char) ? "(" : ")")
            .join('');
}

function leonSolution2(str) {
    // toLowerCase();
    let s = str.toLowerCase().split('');
    let hashmap = new Map();
    s.forEach(char => {
        if(!hashmap.has(char)) {
            hashmap.set(char, 1);
        } else {
            
            hashmap.set(char, hashmap.get(char) + 1)
        }
    })
    
    return s.map(char => hashmap.get(char) > 1 ? ")" : "(").join('')

}


const solution = leonSolution2;


test(solution("din"), "(((")
test(solution("recede"), "()()()")
test(solution("Success"), ")())())")
test(solution("(( @" ), "))((" )

function test(result, expectedResult) {
    console.log(result === expectedResult)
}
