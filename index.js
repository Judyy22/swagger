// express 모듈 추출
const express = require("express");

// 서버 생성
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger 관련
var { swaggerUi, specs } = require("./swagger.js");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

var user = require("./routes/user.js");
app.use("/user", user);

app.listen(3000, function () {
    console.log("서버가 동작합니다.");
});
