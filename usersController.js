const { getUsers, addUser } = require("./repository");

exports.usersController = async (request, response) => {
  switch (request.method) {
    case "POST": {
      let result = addUser("Lebron");
      response.write(JSON.stringify({ success: true }));
      response.end();
      break;
    }
    case "GET": {
      const result = await getUsers();
      response.write(JSON.stringify(result));
      response.end();
      break;
    }
    default:
  }
};
