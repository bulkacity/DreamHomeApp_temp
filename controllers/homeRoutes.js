const router = require("express").Router();
// const { Location, Property } = require("../models");

// Get all locations for hompage
router.get("/", async (req, res) => {

  try {
    // const dbLocationData = await Location.findAll({
    //   include: [
    //     {
    //       model: Property,
    //       attributes: ["filename", "description"],
    //     },
    //   ],
    // });

    // const locations = dbLocationData.map((location) =>
    //   location.get({ plain: true })
    // );
    res.render("homepage");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

module.exports = router;
