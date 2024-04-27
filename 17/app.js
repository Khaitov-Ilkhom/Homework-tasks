let num = +prompt('Enter a code phone number: ');

if (num === 90 || num === 91) {
    alert(num + ' Beeline')
} else if (num === 93 || num === 94 || num === 50) {
    alert(num + ' Ucell')
} else if (num === 88 || num === 97) {
    alert(num + ' MobiUz')
} else if (num === 33) {
    alert(num + ' Humans')
} else if (num === 77 || num === 95 || num === 99) {
    alert(num + ' Uzmobile')
} else {
    alert('Bunaqa operator haqida malumot yoq')
}