let nameLaptop = prompt('Enter laptop name')

if (nameLaptop.toLowerCase() === 'acer') {
    alert('600$')
} else if (nameLaptop.toLowerCase() === 'asus') {
    alert('1000$')
} else if (nameLaptop.toLowerCase() === 'lenova') {
    alert('950$')
} else if (nameLaptop.toLowerCase() === 'hp') {
    alert('550$')
} else if (nameLaptop.toLowerCase() === 'macbook') {
    alert('1500$')
} else {
    alert('Bizda bu modeldagi kopmyuter yoq')
}