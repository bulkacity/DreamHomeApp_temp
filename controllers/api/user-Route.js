const router = require('express').Router();
const { User } = require('../../models');


// create a new user
router.post('/', async (req, res) => {
  console.log(req.body.username)
  try {
    const dbUserData = await User.create({
      
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
 
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
////

// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;


















// router.post("/register", async (req, res) => {
//   console.log(req.body);
//   try {
//     if (!req.body && !req.body.name && !req.body.email) {
//       res.status(400).send("Missing Property in Request Body");
//     }

//     if (
//       !req.body.passwprd &&
//       !req.body.confirm &&
//       req.body.passwprd !== req.body.confirm
//     ) {
//       res.status(400).send("Password error");
//     }
//     const newUser = await User.create(req.body);

//     if (newUser) {
//       console.log("New User", newUser);
//       res.status(200).json("Registered new user");
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// module.exports = userRoute;
