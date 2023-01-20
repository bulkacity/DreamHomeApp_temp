const router = require("express").Router();

const userRoute = require("./api/user-Route");
const homeRoutes = require("./homeRoutes");

router.use("/", homeRoutes);
router.use("/api", userRoute);


module.exports = router;
