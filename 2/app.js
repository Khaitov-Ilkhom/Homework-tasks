const son = +prompt('Enter your number: ');
let result;
switch (son) {
    case 1:
        result = 'Yomon'
        break;
    case 2:
        result = 'Qoniqarsiz';
        break;
    case 3:
        result = 'Qoniqarli';
        break;
    case 4:
        result = 'Yaxshi';
        break;
    case 5:
        result = 'Alo';
        break;
    default:
        result = 'Bunaqa baho yoq'
}
alert(result);