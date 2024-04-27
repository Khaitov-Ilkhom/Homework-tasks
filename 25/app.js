let num = +prompt('Enter a number');

if (num > 0 && num % 2 === 0) {
    alert(num + ' This number is positive and even')
} else if (num < 0 && num % 2 === 0) {
    alert(num + ' This number is negative and even')
} else if (num > 0 && num % 2 !== 0) {
    alert(num + ' This number is positive and odd')
} else if (num < 0 && num % 2 !== 0) {
    alert(num + ' This number is negative and odd')
} else {
    alert('Bu yozuv chiqmaydi')
}