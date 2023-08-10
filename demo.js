let form=document.getElementById('my-form');
form.addEventListener('submit',store);

function store(e){
    e.preventDefault()
    let temp=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    localStorage.setItem(temp,email)
};
