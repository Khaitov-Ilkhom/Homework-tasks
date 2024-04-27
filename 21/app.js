let a = +prompt('Enter a number: A')
let b = +prompt('Enter a number: B')
let c = +prompt('Enter a number: C')

if (a > b && a > c) {
    alert(a + ' is greater than ' + b +' and ' + c)
} else if (b > a && b > c) {
    alert(b + ' is greater than ' + a + ' and ' + c)
} else if (c > a && c > b) {
    alert(c + ' is greater than ' + a + ' and ' + b)
} else {
    alert('These numbers did not qualify us for the program')
}