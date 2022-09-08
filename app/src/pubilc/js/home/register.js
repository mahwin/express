"use strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const password1 = document.querySelector("#password1");
const btn = document.querySelector("#btn");

btn.addEventListener("click", signUp);

function signUp() {
  const req = {
    id: id.value,
    name: name.value,
    password: password.value,
  };
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.message);
      }
    })
    .catch((err) => {
      console.error(new Error("회원 가입 중 에러 발생!"));
    });
}
