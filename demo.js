let title=document.getElementById('header-title');
title.textContent='Modified Hurray!!';
let box=document.getElementById('main-header');
box.style.border='solid 3px black';


let tag=document.getElementsByTagName('li')
for (let i=0;i<tag.length;i++){
    tag[i].style.backgroundColor='red'
}
let list=document.getElementsByClassName('list-group-item');
for (let i=0;i<list.length;i++){
    list[i].style.fontWeight='bold'
    list[i].style.backgroundColor='#ccc'
}
