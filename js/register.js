const form = document.querySelector("#webform");

// Output-felter (bemærk de nye id'er i HTML)
const fullNameOutput = document.querySelector("#full_name_output");
const emailOutput = document.querySelector("#email_output");
const numberOutput = document.querySelector("#number_output");
const roleOutput = document.querySelector("#role_output");
const cityOutput = document.querySelector("#city_output");
const marksOutput = document.querySelector("#marks_output");
const termsOutput = document.querySelector("#terms_output");

function cancelPopup(event) {
  event.preventDefault();
  const invalidField = form.querySelector(":invalid");
  if (invalidField) invalidField.focus();
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);

  const fullName = formData.get("full_name");
  const email = formData.get("email");
  const number = formData.get("number");
  const role = formData.get("role");
  const city = formData.get("city");
  const marks = formData.get("marks");
  const termsAccepted = formData.has("accept_terms");

  fullNameOutput.textContent = fullName;
  emailOutput.textContent = email;
  numberOutput.textContent = number;
  roleOutput.textContent = role;
  cityOutput.textContent = city;
  marksOutput.textContent = marks;
  termsOutput.textContent = termsAccepted ? "Ja" : "Nej";

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
