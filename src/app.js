const http = require("http");
const getUsers = require("./data/modules/users");

const port = 3003;
const baseUrl = "http://127.0.0.1";

// Создаем HTTP-сервер на основе модуля http
const server = http.createServer((request, response) => {
  const url = new URL(request.url, baseUrl);
  const name = url.searchParams.get("hello");

  if (request.url === "/users") {
    response.status = 200;
    response.statusMessage = "OK";
    response.header = "Content-Type: application/json";
    response.write(getUsers());
    response.end();
    return;
  }

  if (name) {
    response.status = 200;
    response.statusMessage = "OK";
    response.header = "Content-Type: application/json";
    response.write(`Hello, ${name}!`);
    response.end();
    return;
  }

  if (request.url === "/?hello") {
    response.status = 400;
    response.statusMessage = "bad request";
    response.header = "Content-Type: application/json";
    response.write(`Enter a name`);
    response.end();
    return;
  }

  if (request.url === "/") {
    response.status = 200;
    response.statusMessage = "OK";
    response.header = "Content-Type: text/plain";
    response.write("Hello, world!");
    response.end();
    return;
  }

  response.status = 500;
  response.statusMessage = "OK";
  response.header = "Content-Type: text/plain";
  response.write("Something's wrong...");
  response.end();
});

server.listen(port, () => {
  console.log(`"Сервер запущен по адресу ${baseUrl}:${port}`);
});
