const { Router } = require("express");
const User = require("../../models/User");

const userRoute = Router();

userRoute.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    if (!req.body && !req.body.name && !req.body.email) {
      res.status(400).send("Missing Property in Request Body");
    }

    if (
      !req.body.passwprd &&
      !req.body.confirm &&
      req.body.passwprd !== req.body.confirm
    ) {
      res.status(400).send("Password error");
    }
    const newUser = await User.create(req.body);

    if (newUser) {
      console.log("New User", newUser);
      res.status(200).json("Registered new user");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = userRoute;
