const fs = require("fs");
const getUsers = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("db.txt", function (err, buf) {
      if (err) {
        reject(err);
      } else {
        console.log(JSON.parse(buf.toString()));
        resolve(JSON.parse(buf.toString()));
      }
    });
  });
};

const addUser = async (name) => {
  let users = await getUsers();
  users.push({ id: 3, name: name });
  return new Promise((resolve, reject) => {
    fs.writeFile("db.txt", JSON.stringify(users), (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};

exports.getUsers = getUsers;
exports.addUser = addUser;
