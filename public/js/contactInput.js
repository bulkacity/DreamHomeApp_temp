const contactFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector("#first-name").value.trim();
  const lastName = document.querySelector("#last-name").value.trim();
  const emailAddress = document.querySelector("#email-address").value.trim();
  const streetAddress = document.querySelector("#street-address").value.trim();
  const city = document.querySelector("#city").value.trim();
  const state = document.querySelector("#region").value.trim();
  const zip = document.querySelector("#postal-code").value.trim();

  if (firstName && lastName) {
    const response = await fetch("/api/users/register", {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        emailAddress,
        streetAddress,
        city,
        zip,
        state,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("Contact information has been saved");
      document.location.replace("/");
    } else {
      document.location.replace("/success");
    }
  }
};

document
  .querySelector(".register-form")
  .addEventListener("submit", contactFormHandler);
