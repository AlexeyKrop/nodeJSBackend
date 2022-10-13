const http = require("http");
const { getUsers, addUser } = require("./repository");
const { usersController } = require("./usersController");

const setHeaderCors = (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Request-Method", "*");
  response.setHeader("Access-Control-Allow-Methods", "OPTIONS", "GET");
  response.setHeader("Access-Control-Allow-Headers", "*");
  if (request.method == "OPTIONS") {
    response.writeHead(215);
    response.end();
    return true;
  }
  return false;
};

http
  .createServer(async (request, response) => {
    if (setHeaderCors(request, response)) return;
    switch (request.url) {
      case "/users":
        await usersController(request, response);
        break;
      case "/tasks":
        response.write("TASKS");
        break;
      default:
        response.write("PAGE NOT FOUND");
    }
    response.end();
  })
  .listen(3000);
