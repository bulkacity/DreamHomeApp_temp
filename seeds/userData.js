const { User } = require("../models");

const userData = [
  {
    first_name: "Blake",
    last_name: "Brandon",
    email: "the_blake@yahoo.com",
    password: "password12345",
    repeat_password: "password12345",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
