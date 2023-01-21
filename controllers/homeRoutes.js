const router = require("express").Router();
const { Location, Property } = require("../models");
// const { Location, Property } = require("../models");

// router.get("/", async (req, res) => {
//   // try {
//   //   const dbLocation = await Location.findAll({
//   //     include: [
//   //       {
//   //         module: Property,
//   //         attributes: ["filname", "description"],
//   //       },
//   //     ],
//   //   });
//   //   const location = dbLocation.map((location))=>
//   //   location.getplain:true
//   // } catch (error) {}
//   // res.render("homepage");
//   res.render('body');
// });


router.get('/', async (req, res) => {
  try {
    const dbLocationData = await Location.findAll({
      include: [
        {
          model: Property,
          attributes: ['address', 'price'],
        },
      ],
    });

    const properties = dbLocationData.map((property) =>
      property.get({ plain: true })
    );

    res.render('body', {
      properties,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;