"use strict";
//모듈
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;

//라우팅
const home = require("./src/routes/home");

//앱 세팅
//뷰를 담당하는 html 파일의 위치가 두번째 인자로 들어감!
app.set("views", "./src/views");
//뷰를 해석해줄 엔진인데 ejs는 굉장히 많이 쓰이는 엔진인데, 거의 html이다 생각해도됨
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/pubilc`));
app.use(bodyParser.json());
//url을 통해 전달되는 데이터에 한굴, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제를 해결해줌.
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", home); // middleware를 등록해주는 method

module.exports = app;
// const http = require("http");
// //http는 내장모듈입니다.
// const app = http.createServer((req, res) => {
//   //한글임을 알려줌.
//   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//   if (req.url === "/") {
//     res.end("여기는 샌드 입니다.");
//   } else if (req.rel === "11?!?!??!") {
//     //express를 안 쓰면 이렇게 조건 분기문을 덕지덕지 적어야함.
//   }
// });
// app.listen(3001, () => {
//   console.log("http로 가동된 서버입니다.");
// });
