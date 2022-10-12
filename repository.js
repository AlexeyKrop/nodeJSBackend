const users = [
  { id: 1, name: "Bob" },
  { id: 2, name: "Mike" },
];

const getUsers = () => {
  return users;
};

const addUser = (name) => {
  users.push({ name: name });
};

exports.getUsers = getUsers;
exports.addUser = addUser;
