/*

Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.

last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
last('take me to semynak'), ['take', 'me', 'semynak', 'to'] 


*/

function mySolution(x){
    let words = x.split(' ');
    return words.sort((a, b) => {
        let aFinal = a.charAt(a.length-1)
        let bFinal = b.charAt(b.length-1)
        // console.log(aFinal)
        // console.log(bFinal)
        return aFinal.charCodeAt() - bFinal.charCodeAt()
    })
}

// never empty words
// no characters or spaces in the words
function myOneLineSolution(x) {
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
}
function leonsSolution(x) {
    // have a split, then a sort. 
    // what are we sorting by?
    // sort is already lexographical, but we pass in our own custom function
    // have implicit return in our sort compare function
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
}

const last = leonsSolution;


console.log(last('man i need a taxi up to ubud'));  
console.log(last('what time are we climbing up the volcano'));  
console.log(last('take me to semynak'));  