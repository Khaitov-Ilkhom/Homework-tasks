let num = +prompt('Enter a number');

let birlik = num % 10;
let onlikQoldiq = num % 100;
let onlik = (onlikQoldiq - birlik) / 10;
let yuzlik = (num -onlikQoldiq) /100;

if (yuzlik < onlik && onlik < birlik) {
    alert(yuzlik + ' ' + onlik + ' ' + birlik + ' Osish tartibida');
} else {
    alert('Osish tartibida joylashmagan');
}