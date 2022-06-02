let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let number = document.getElementById("number");
let email = document.getElementById("email");
let message = document.getElementById("message");
let submitBtn = document.getElementById("submitBtn");
let validfirstname = false;
let validlastname = false;
let validnumber = false;
let validemail = false;
let validmessage = false;

firstName.addEventListener("blur", () => {
  let regex = /^[a-zA-Z]([A-Za-z]){2,10}$/;
  let str = firstName.value;
  if (firstName.value.length > 0) {
    if (regex.test(str)) {
      firstName.style.borderColor = "green";
      firstNamesvg.style.display = "none";
      validfirstname = true;
    } else {
      firstName.style.borderColor = "red";
      firstNamesvg.style.display = "block";
      validfirstname = false;
    }
  } else {
    firstName.style.borderColor = "grey";
    firstNamesvg.style.display = "none";
  }
});

lastName.addEventListener("blur", () => {
  let regex = /^[a-zA-Z]([A-Za-z]){2,10}$/;
  let str = lastName.value;

  if (lastName.value.length > 0) {
    if (regex.test(str)) {
      lastName.style.borderColor = "green";
      lastNamesvg.style.display = "none";
      validlastname = true;
    } else {
      lastName.style.borderColor = "red";
      lastNamesvg.style.display = "block";
      validlastname = false;
    }
  } else {
    lastName.style.borderColor = "grey";
    lastNamesvg.style.display = "none";
    validlastname = false;
  }
});

number.addEventListener("blur", () => {
  let regex = /^([\d]){10}$/;
  let str = number.value;

  if (number.value.length > 0) {
    if (regex.test(str)) {
      number.style.borderColor = "green";
      numbersvg.style.display = "none";
      validnumber = true;
    } else {
      number.style.borderColor = "red";
      numbersvg.style.display = "block";
      validnumber = false;
    }
  } else {
    number.style.borderColor = "grey";
    numbersvg.style.display = "none";
  }
});

email.addEventListener("blur", () => {
  let regex = /^([_\-0-9a-zA-Z\.]+)@([_\-0-9a-zA-Z\.]+){2,}\.([a-zA-Z]){2,7}$/;
  let str = email.value;
  if (email.value.length > 0) {
    if (regex.test(str)) {
      email.style.borderColor = "green";
      emailsvg.style.display = "none";
      validemail = true;
    } else {
      email.style.borderColor = "red";
      emailsvg.style.display = "block";
      validemail = false;
    }
  } else {
    email.style.borderColor = "grey";
    emailsvg.style.display = "none";
  }
});

message.addEventListener("blur", () => {
  let str = message.value;

  if (message.value.length > 0) {
    if (str.length > 1) {
      message.style.borderColor = "green";
      messagesvg.style.display = "none";
      validmessage = true;
    } else {
      message.style.borderColor = "red";
      messagesvg.style.display = "block";
      validmessage = false;
    }
  } else {
    message.style.borderColor = "grey";
    messagesvg.style.display = "none";
  }
});

submitBtn.addEventListener("click", () => {
  if (
    validfirstname &&
    validlastname &&
    validnumber &&
    validemail &&
    validmessage
  ) {
    firstName.value = ``;
    lastName.value = ``;
    number.value = ``;
    email.value = ``;
    message.value = ``;
    submitBtn.value = ``;
    alert("Your data has been sent successfully !!");
    window.location.reload();
  } else {
    alert("Please fill the information");
  }
});
