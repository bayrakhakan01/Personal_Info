
let btn = document.querySelector('input')
btn.onclick = function () {  

    let myName = prompt('What is you name?');

    let myAge = prompt('How old are you?');

    const section = document.querySelector('section');

    let para1 = document.createElement('p');
    para1.textContent = myName;
    let para2 = document.createElement('p');
    para2.textContent = myAge;
    section.appendChild(para1);
    section.appendChild(para2);
}