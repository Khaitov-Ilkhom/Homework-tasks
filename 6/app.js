let rating = +prompt('Enter your rating number');
let result;
switch (rating) {
    case 1:
        result = '10$'
        break;
    case 2:
        result = '25$'
        break;
    case 3:
        result = '40$'
        break;
    case 4:
        result = '60$'
        break;
    case 5:
        result = '80$'
        break;
    default:
        result = 'You entered an incorrect rating'
}
alert(result)