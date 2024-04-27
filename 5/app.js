let numOne = +prompt('Enter number A: ');
let numTwo = +prompt('Enter number B: ');
let c = prompt("Enter '+' '-' '*' '/' ");

if (c === '+') {
    alert(numOne + numTwo)
} else if (c === '-') {
    alert(numOne - numTwo)
} else if (c === '*') {
    alert(numOne * numTwo)
} else if (c === '/') {
    alert(numOne / numTwo)
} else {
    alert('You entered the wrong action')
}
// switch (c) {
//     case c === '+':
//         alert(numOne + numTwo)
//         break
//     case c === '-':
//         alert(numOne - numTwo)
//         break
//     case c === '*':
//         alert(numOne * numTwo)
//         break
//     case c === '/':
//         alert(numOne / numTwo)
//         break
//     default:
//         alert('You entered the wrong action')
// }