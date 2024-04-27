let gender = prompt("Jinsingizni kiriting (Erkak/Ayol):");

if (gender.toLowerCase() === 'erkak') {
    document.getElementById('img').src = '/img/man.png'
} else if (gender.toLowerCase() === 'ayol') {
    document.getElementById('img').src = '/img/woman.png'
} else {
    alert('Wrong input')
}


