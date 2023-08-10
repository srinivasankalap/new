let temp=document.querySelector('.list-group-item:nth-child(2)');
temp.style.color='green';
let ele=document.querySelector('.list-group-item:nth-child(3)');
ele.remove();

let list=document.querySelectorAll('.list-group-item');
list[1].style.color='green';

let odd=document.querySelectorAll('li:nth-child(odd)');

for (let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green'
}