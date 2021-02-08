const form = document.querySelector('form');
const URL = 'http://localhost:3000/users/';


form.addEventListener('submit', submitHandler);

function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData();
    console.log(form.elements)
    formData.append('name', form.name.value);
    formData.append('email', form.email.value);
    formData.append('password', form.password.value);
    fetch(URL, {
        method: 'POST',
        body: formData
    }).then(res => {
    return res.json()
    }).then(res => {
        console.log(res);
    }).catch(err => {
       console.log(err.message);
    })
}
