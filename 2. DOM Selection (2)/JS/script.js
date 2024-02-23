// getElementByID -> Element
const title = document.getElementById('title');
title.innerHTML = 'Hi Ian!';
title.style.textAlign = 'center';
title.style.backgroundColor = 'white';

const container = document.getElementById('container');
container.style.backgroundColor = '#f4f4f4';

// getElementsByTagName -> HTML Collection
const body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = '#0f0f0f';
body.style.borderRadius = '5px';

const p = document.getElementsByTagName('p');
let pLength = p.length;
for (let i = 0; i < pLength; i++) {
    p[i].style.fontStyle = 'italic';
}

let liStyle = document.createElement('style');
liStyle.innerHTML = 'li {color: blue;}';
document.head.appendChild(liStyle);

// querySelector -> Element
const text_4 = document.querySelector('#second-section p');
text_4.style.color = 'red';

const li_2 = document.querySelector('#second-section ul li:nth-child(2)');
li_2.style.color = 'green';

// querySelectorAll -> NodeList
const items = document.querySelectorAll('li');
for (let i = 0; i < items.length; i++) {
    items[i].style.fontWeight = 'bold';
}

// Changing the root node
const body_main = document.getElementById('container');
let p_1 = body_main.getElementsByClassName('p-1')[0];
p_1.innerHTML = `Click the link below to access my GitHub Page`;