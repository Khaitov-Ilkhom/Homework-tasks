let rating = +prompt('Enter your rating number: ')

if (rating === 0) {
    alert('Your stipend: 0$')
} else if (rating === 1) {
    alert('Your stipend: 20$')
} else if (rating === 2) {
    alert('Your stipend: 35$')
} else if (rating === 3) {
    alert('Your stipend: 50$')
} else if (rating === 4) {
    alert('Your stipend: 70$')
} else if (rating === 5) {
    alert('Your stipend: 100$')
} else {
    alert('You entered an incorrect rating')
}