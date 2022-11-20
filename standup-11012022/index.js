function stringTransformer1(str) {
    let words = str.split(" ").reverse();
    let x = words.map(word => {
        return transform(word)
    })
    console.log(x)
    return x.join(" ")
}


function stringTransformer(str) {
    return str.split(" ").reverse().map(word => {
        return transform(word)
    }).join(" ")
}

let charDiff = 'a'.charCodeAt() - 'A'.charCodeAt()
let ZCode = 'Z'.charCodeAt();
let aCode = 'a'.charCodeAt();
function transform(word) {
    return [...word].map(char => {
        let charCode = char.charCodeAt()
        if(charCode >= aCode) {
            // lowercase transforms to uppercase
            return String.fromCharCode(charCode - charDiff);
        } else {
            // uppercase transforms to lowercase
            return String.fromCharCode(charCode + charDiff)
        }
    }).join('');
}
// code wars success color: #67b04b

function leonsSolution(str) {
    return  str.split(' ').reverse().join(' ')
                .split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
                .join('')
}
test(leonsSolution('Example string'), 'STRING eXAMPLE')
test(leonsSolution('Example Input'), 'iNPUT eXAMPLE')
test(leonsSolution('mmm a YOU'), 'you A MMM')

function test(a,b) {
    console.log(a)
    console.log(b)
    console.log(a === b)
}

// https://www.codewars.com/kata/5878520d52628a092f0002d0/solutions/javascript