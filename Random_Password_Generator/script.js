"use strict";
const btnElt = document.querySelector(".gen-button");
const inElt = document.getElementById("input");
const copyIconElt = document.querySelector(".fa-copy");
const alertElt = document.querySelector(".alert-container");
btnElt.addEventListener("click", () => {
  createPassword();
});

copyIconElt.addEventListener("click", () => {
  copyPassword();
});

// Function to Create Password
function createPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = "";

  for (let index = 0; index < passwordLength; index++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
    // console.log(randomNumber, password);
  }
  inElt.value = password;
  alertElt.innerText = password + " Copied!";
}

// Function to Copy Password
function copyPassword() {
  if (inElt.value) {
    inElt.select();
    inElt.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inElt.value);
    alertElt.classList.remove("active");
    setTimeout(() => {
      alertElt.classList.add("active");
      inElt.value = "";
    }, 2000);
  }
}
