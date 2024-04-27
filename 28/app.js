let numOne = +prompt('Enter a number');
let numTwo = +prompt('Enter a number');

if (numOne % 2 === 0 && numTwo % 2 !== 0) {
    alert(numTwo + ' This number is odd')
} else if (numOne % 2 !== 0 && numTwo % 2 === 0) {
    alert(numOne + ' This number is odd')
} else {
    alert('These numbers are even: ' + numOne + '  ' + numTwo)
}