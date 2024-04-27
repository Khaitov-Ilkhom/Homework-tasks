let a = +prompt('Enter a number')
let b = +prompt('Enter a number')
let c = +prompt('Enter a number')

if (a > 0 && b > 0 && c < 0) {
    alert(c + ' Negative')
} else if (a > 0 && b < 0 && c > 0) {
    alert(b + ' Negative')
} else if (a < 0 && b > 0 && c > 0) {
    alert(a + ' Negative')
} else {
    alert('Bu yozuv chiqmaydi')
}