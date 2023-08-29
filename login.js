document.getElementById('submit').addEventListener('click', function(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email, password);

    if(email === 'mainul@gmail.com' && password === '123456'){
        alert('Login successfully');
        window.location.href="bank.html";
    }else{
        alert('Invalid Login');
    }
})