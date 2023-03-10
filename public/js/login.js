const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  // const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const confirmPassword = document
    .querySelector("#confirm-password")
    .value.trim();

  if (confirmPassword === password) {
    console.log("password match");
    if (username && password === confirmPassword) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        alert("Username and password was successfully created");
        document.location.replace("/");
      } else {
        alert("Failed to sign up.");
      }
    }
  } else {
    alert("Passwords do not match, try again");
    window.document.location.redirect("/login");
  }
};

/// following is to login

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // alert('username and password found');
      document.location.replace("/");
    } else {
      alert("Failed to log in. Create a new account or try again.");
    }
  }
};
///////

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
