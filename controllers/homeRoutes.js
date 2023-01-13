const router = require("express").Router();
const { Location, Property } = require("../models");

router.get("/", async (req, res) => {
  // try {
  //   const dbLocation = await Location.findAll({
  //     include: [
  //       {
  //         module: Property,
  //         attributes: ["filname", "description"],
  //       },
  //     ],
  //   });
  //   const location = dbLocation.map((location))=>
  //   location.getplain:true
  // } catch (error) {}
  // res.render("homepage");
});

module.exports = router;
