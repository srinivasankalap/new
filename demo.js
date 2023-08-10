let form=document.getElementById('addForm');
let itemList=document.getElementById('items');
let filter=document.getElementById('filter');

form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);

function addItem(e){
    e.preventDefault();

    let newItem=document.getElementById('item').value;
    let newItem2=document.getElementById('item1').value
    let li=document.createElement('li');
    li.className='list-group-item';
    let value=newItem+' '+newItem2
    li.appendChild(document.createTextNode(value));
    let deleteBtn=document.createElement('button');
    let editBtn=document.createElement('button')
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    editBtn.className='btn btn-sm float-right';
    deleteBtn.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(deleteBtn);
    li.appendChild(editBtn)
    itemList.appendChild(li);

}

function removeItem(e){
    if (e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

function filterItems(e){
    let text=e.target.value.toLowerCase();
    let items=itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        let itemName=item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    });
}