
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

//show error massage

function showError(input,message){

    const formControl = input.parentElement;
    formControl.className= 'form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML = message;
}

//show success outline

function showSuccess(input){

    const formControl = input.parentElement;
    formControl.className= 'form-control success';
}

//email validation 

function isValidEmail(email){

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// event listeners

form.addEventListener('submit', function(e){

    e.preventDefault();

    if(username.value === ''){

        showError(username, 'Username is required');
    }else{

        showSuccess(username);
    }

    if(email.value === ''){

        showError(email, 'Email is required');
    } else if(!isValidEmail(email.value)){

        showError(email, 'Email is not valid');

    }
      
    else{

        showSuccess(email);
    }

    if(password.value === ''){

        showError(password, 'Password is required');
    }else{

        showSuccess(password);
    }
 
    if(password2.value === ''){

        showError(password2, 'Confirmation of password is required');
    }else{

        showSuccess(password2);
    }


});