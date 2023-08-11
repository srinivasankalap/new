let form=document.getElementById('my-form');
form.addEventListener('submit',store);

function store(e){
    e.preventDefault()
    let temp=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let myObj={
        name:temp,
        mailID:email,
    }
    let myObjNew=JSON.stringify(myObj);
    localStorage.setItem('Details',myObjNew);
    let myObjoriginal=JSON.parse(myObjNew);
    console.log(myObjoriginal)
};
