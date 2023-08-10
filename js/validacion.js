document.getElementById("registrationForm").addEventListener('submit', function (event) {
    event.preventDefault();

    const password= document.getElementById('password1').value;
    const repeatPassword = document.getElementById('password2').value; 
    const checkbox = document.getElementById('terminos').checked;

    
    if ((password !== repeatPassword) || (password1.length < 6) || (!checkbox)) {
        showAlertError();
    } else {
        showAlertSuccess();
    }
});


function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show"); 
}