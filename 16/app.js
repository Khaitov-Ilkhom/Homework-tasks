let num = +prompt('Enter day of the week number: ');

if (num === 1) {
    alert('Monday')
} else if (num === 2) {
    alert('Tuesday')
} else if (num === 3) {
    alert('Wednesday')
} else if (num === 4) {
    alert('Thursday')
} else if (num === 5) {
    alert('Friday')
} else if (num === 6) {
    alert('Saturday')
} else if (num === 7) {
    alert('Sunday')
} else {
    alert('There are 7 days in a week. You entered the wrong number: ' + num)
}