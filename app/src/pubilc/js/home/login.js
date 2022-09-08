"use strict";

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const btn = document.querySelector("button");

btn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    password: password.value,
  };
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.message);
      }
    })
    .catch((err) => {
      console.error(new Error("로그인 중 에러 발생"));
    });
}
