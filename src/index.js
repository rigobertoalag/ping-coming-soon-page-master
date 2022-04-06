let email = document.getElementById('email')
let error = document.getElementById('error-message')

const sendEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        email.style = ''
        error.innerHTML = ''
        alert('Email sent')
        email.value = ''
    }else{
        email.style = 'border-color: hsl(354, 100%, 66%); margin-bottom: 0;'
        error.innerHTML = '<p class="error-m">Please provide a valid email address</p>'
    }
}