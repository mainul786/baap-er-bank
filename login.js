document.getElementById('submit').addEventListener('click', function(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email, password);

    if(email === 'mdmainulislam320@gmail.com' && password === '123456'){
        alert('Login successfully')
    }else{
        alert('Invalid Login');
    }
})