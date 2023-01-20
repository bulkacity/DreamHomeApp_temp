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

/// the following code is from section 18 login.js

const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    // const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const confirmPassword = document.querySelector('#confirm-password').value.trim();
  if ( confirmPassword === password ) {
    
    if (username && (password === confirmPassword)) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  }else{
    alert('Passwords do not match, try again');
    window.document.location.redirect("/login")
  }
  };