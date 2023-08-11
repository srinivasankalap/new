let form=document.getElementById('my-form');
form.addEventListener('submit',store);
let itemList=document.getElementById('items')
itemList.addEventListener('click',removeItem);
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
    let deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
};


function removeItem(e){
    
    let email=document.getElementById('email').value;
    if (e.target.classList.contains('delete')){
            var li=e.target.parentElement;
            itemList.removeChild(li)
            localStorage.removeItem(email)
    }
}