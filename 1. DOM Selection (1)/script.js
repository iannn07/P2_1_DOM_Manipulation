// getElementByID
const title = document.getElementById('title');
title.innerHTML = 'Hi Ian!';
title.style.textAlign = 'center';
title.style.backgroundColor = 'white';

const container = document.getElementById('container');
container.style.backgroundColor = '#f4f4f4';

// getElementsByTagName
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