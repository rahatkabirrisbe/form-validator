const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const url = document.getElementById("url");
const city = document.getElementById("city");
const zip = document.getElementById("zip");
let submitButton = document.getElementById("submit");
let successMessage = document.getElementById("success");
let failureMessage = document.getElementById("failure");

successMessage.style.display = "none";
failureMessage.style.display = "none";

let validFname = false;
let validLname = false;
let validEmail = false;
let validPhone = false;
let validUrl = false;
let validCity = false;
let validZip = false;

fname.addEventListener("blur", () => {
  console.log("First Name is Allert");

  // Validate name
  let regex = /^[a-z]{2,8}$/i;
  let str = fname.value;
  //console.log(regex, str);
  if (regex.test(str)) {
    //console.log('It is matched');
    //fname.classList.remove('is-invalid');
    fname.classList.add("is-valid");
    fname.classList.remove("is-invalid");
    validFname = true;
  } else {
    //console.log("not matched")
    fname.classList.remove("is-valid");
    fname.classList.add("is-invalid");
    validFname = false;
  }
});

lname.addEventListener("blur", () => {
  // Validate name
  let regex = /^[a-z]{2,8}$/i;
  let str = lname.value;
  if (regex.test(str)) {
    lname.classList.add("is-valid");
    lname.classList.remove("is-invalid");
    validLname = true;
  } else {
    lname.classList.remove("is-valid");
    lname.classList.add("is-invalid");
    validLname = false;
  }
});

email.addEventListener("blur", () => {
  // Validate name
  let regex = /\w{2,15}@\w{2,8}\.\w{2,7}/i;
  let str = email.value;
  if (regex.test(str)) {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
    validEmail = true;
  } else {
    email.classList.remove("is-valid");
    email.classList.add("is-invalid");
    validEmail = false;
  }
});

phone.addEventListener("blur", () => {
  // Validate name
  let regex = /\+?(88)?01\d[3|5|6|7|8|9]\d{7}/i;
  let str = phone.value;
  if (regex.test(str)) {
    phone.classList.add("is-valid");
    phone.classList.remove("is-invalid");
    validPhone = true;
  } else {
    phone.classList.remove("is-valid");
    phone.classList.add("is-invalid");
    validPhone = false;
  }
});

url.addEventListener("blur", () => {
  // Validate name
  let regex = /(www)\.\w{2,15}\.\w{2,7}/i;
  let str = url.value;
  if (regex.test(str)) {
    url.classList.add("is-valid");
    url.classList.remove("is-invalid");
    validUrl = true;
  } else {
    url.classList.remove("is-valid");
    url.classList.add("is-invalid");
    validUrl = false;
  }
});

city.addEventListener("blur", () => {
  // Validate name
  let regex = /^\w{2,15}$/i;
  let str = city.value;
  if (regex.test(str)) {
    city.classList.add("is-valid");
    city.classList.remove("is-invalid");
    validCity = true;
  } else {
    city.classList.remove("is-valid");
    city.classList.add("is-invalid");
    validCity = false;
  }
});

zip.addEventListener("blur", () => {
  // Validate name
  let regex = /^\d{4}$/i;
  let str = zip.value;
  if (regex.test(str)) {
    zip.classList.add("is-valid");
    zip.classList.remove("is-invalid");
    validZip = true;
  } else {
    zip.classList.remove("is-valid");
    zip.classList.add("is-invalid");
    validZip = false;
  }
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    validFname &&
    validLname &&
    validEmail &&
    validPhone &&
    validUrl &&
    validCity &&
    validZip == true
  ) {
    successMessage.style.display = "block";
    failureMessage.style.display = "none";
  } else {
    failureMessage.style.display = "block";
    successMessage.style.display = "none";
  }
});
