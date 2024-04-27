let num = +prompt('Enter a number');

let birlik = num % 10;
let onlikQoldiq = num % 100;
let onlik = (onlikQoldiq - birlik) / 10;
let yuzlik = (num -onlikQoldiq) /100;

if (birlik !== onlik && onlik !== yuzlik && yuzlik !== birlik) {
    alert(yuzlik + ' ' + onlik + ' ' + birlik + ' bu raqamlar bir biriga teng emas')
} else {
    alert('Bu raqamlar orasida bir biriga tenglari bor')
}