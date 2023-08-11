let form=document.getElementById('my-form');
form.addEventListener('submit',store);
let itemList=document.getElementById('items')
function store(e){
    e.preventDefault()
    let temp=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let myObj={
        name:temp,
        mailID:email,
    }
    let myObjNew=JSON.stringify(myObj);
    localStorage.setItem(email,myObjNew);
    let myObjoriginal=JSON.parse(myObjNew);
    console.log(myObjoriginal)
    let li=document.createElement('li');
    li.className='item';
    li.appendChild(document.createTextNode(temp+' - '+email));
    itemList.appendChild(li);
};
