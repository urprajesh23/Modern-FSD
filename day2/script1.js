const h1 = document.getElementsByTagName('h1')
console.log(h1[0].textContent);

const p = document.getElementById('p1')
console.log(p.textContent);

const p2 = document.getElementsByClassName('p2')
console.log(p2[0].textContent);

p2[0].textContent="HELLO THERE"

p2[0].style.color="red" 