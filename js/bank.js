document.getElementById("login-submit").addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const getEmail = emailField.value;
    // console.log(getEmail);
    //get user-password
    const passwordField = document.getElementById('user-password');
    const getPassWord = passwordField.value;
    // console.log(getPassWord);

    if (getEmail == 'sontan@gmail.com' && getPassWord == 'secret') {
        window.location.href = 'banking.html'//link with another page
    }

})