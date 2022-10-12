const { getUsers, addUser } = require("./repository");
exports.usersController = (request, response) => {
  if (request.method == "POST") {
    addUser("Lebron");
    response.write(JSON.stringify({ success: true }));
  } else {
    response.write(JSON.stringify(getUsers()));
  }
};
