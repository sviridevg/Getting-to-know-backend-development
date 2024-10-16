const fs = require("fs");
const path = require("path");

const getUsers = () => {
  const filePath = path.join(__dirname, "../users.json");
  const users = fs.readFileSync(filePath);
  return users;
};

module.exports = getUsers;
