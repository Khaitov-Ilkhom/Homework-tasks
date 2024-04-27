let a = +prompt('Enter a number A')
let b = +prompt('Enter a number B')
let c = +prompt('Enter a number C')

if (a < b && b < c) {
    alert(b + ' is between ' + a + ' and ' + c)
} else {
    alert(b + ' is not located ' + a + ' and ' + c)
}