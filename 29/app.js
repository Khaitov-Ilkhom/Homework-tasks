let a = +prompt('Enter a number: A')
let b = +prompt('Enter a number: B')
let c = +prompt('Enter a number: C')

if (a > 0 && b > 0 && c > 0) {
    alert('These numbers are positive')
} else if (a < 0 && b < 0 && c < 0) {
    alert('These numbers are negative')
} else if (a > 0 && b > 0 && c < 0) {
    alert(c + ' This number is negative')
} else if (a > 0 && b < 0 && c > 0) {
    alert(b + ' This number is negative')
} else if (a < 0 && b > 0 && c > 0) {
    alert(a + ' This number is negative')
} else if (a > 0 && b < 0 && c < 0) {
    alert(b + '  ' + c + ' These numbers are negative')
} else if (a < 0 && b < 0 && c > 0) {
    alert(a + '  ' + b + ' These numbers are negative')
} else if (a < 0 && b > 0 && c < 0) {
    alert(a + '  ' + c + ' These numbers are negative')
} else {
    alert('Raqam kiriting')
}