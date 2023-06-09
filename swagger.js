const swaggerUi = require("swagger-ui-express");
const swaggereJsdox = require("swagger-jsdoc");

const options = {
    swaggerDefinition: {
        info: {
            title: "테스트 즁...!!!", // Swagger 맨 위 Title
            version: "1.0.0",
            description: "swagger 첫 테스트", // Title 밑에 있는 내용 적는곳
        },
        host: "localhost:3000", // url 주소 입력
        basePath: "/",
    },
    apis: ["./routes/*.js"],
};

const specs = swaggereJsdox(options);

module.exports = {
    swaggerUi,
    specs,
};
