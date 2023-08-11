let form=document.getElementById('my-form');
form.addEventListener('submit',store);
let itemList=document.getElementById('items');
itemList.addEventListener('click',removeItem);
itemList.addEventListener('click',editItem);
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
    let editBtn=document.createElement('button');
    deleteBtn.className='delete';
    editBtn.className='edit';
    editBtn.setAttribute('data-email', email);
    deleteBtn.appendChild(document.createTextNode('Delete'));
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    itemList.appendChild(li);
};


function removeItem(e){

    if (e.target.classList.contains('delete')){
            var li=e.target.parentElement;
            itemList.removeChild(li)
            console.log(e.target)
            let email = li.querySelector('.edit').getAttribute('data-email');
            localStorage.removeItem(email)
    }
}

function editItem(e){
    if (e.target.classList.contains('edit')){
        var li=e.target.parentElement;
        let email=li.querySelector('.edit').getAttribute('data-email');
        let itemData=JSON.parse(localStorage.getItem(email));
        document.getElementById('name').value=itemData.name;
        document.getElementById('email').value=itemData.mailID;
        itemList.removeChild(li);
        localStorage.removeItem(email);
    }
}