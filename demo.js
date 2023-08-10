let title=document.getElementById('header-title');
title.textContent='Modified Hurray!!';
let box=document.getElementById('main-header');
box.style.border='solid 3px black';

let list=document.getElementsByClassName('list-group-item');
for (let i=0;i<list.length;i++){
    list[i].style.background='#f4f4f4'
}
list[1].textContent='Hello Sir'
list[1].style.fontWeight='bold'
list[1].style.color='green'