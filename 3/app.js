let month = +prompt("Enter month: ")
let result;
switch (month) {
    case 1:
    case 2:
    case 12:
        result = 'Winter';
        break;
    case 3:
    case 4:
    case 5:
        result = 'Spring';
        break;
    case 6:
    case 7:
    case 8:
        result = 'Summer';
        break;
    case 9:
    case 10:
    case 11:
        result = 'Autumn';
        break;
    default:
        result = 'There are twelve months in a year';
}
alert(result);