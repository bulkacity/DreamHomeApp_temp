const signUpButton = document.getElementById('signUpButton');
const email = document.getElementById('email');

function signUpHandler(event){
    event.preventDefault();

    const response =  fetch('/api/user/register', {
       method: 'POST',
       body: JSON.stringify({email, password})
    })

    if(response.ok){
     window.document.location.redirect("/hompage")
    }
}
signUpButton.addEventListener('click', signUpButton)