let title=document.getElementById('header-title');
title.textContent='Modified Hurray!!';
let box=document.getElementById('main-header');
box.style.border='solid 3px black';

let list=document.getElementsByClassName('list-group-item');
list[2].style.background='green'
for (let i=0;i<list.length;i++){
    list[i].style.fontWeight='bold'
}