
function showcart(){
    let cartcontainer = document.querySelector('.cart-container')
    cartcontainer.classList.toggle('cart-container-display')    
}

function showProfile(){
    let showProfile = document.querySelector(".profile-container")
    showProfile.classList.toggle('prodfile-container-active')
}


function checkCredentials() {
    // let formContainer = documnet.querySelector(".login-form-container")
    let email = document.querySelector('#logemail')
    let password = document.querySelector('#logpassword')
    let loginSuccess = document.querySelector('.success-login')

    if (email == "admin" && password == "admin") {
        loginSuccess.classList.add('login-success');
        loginSuccess.classList.remove('success-login');
    } else {
        loginSuccess.classList.add('login-failed');
        loginSuccess.classList.remove('failed-login')
    }
  }