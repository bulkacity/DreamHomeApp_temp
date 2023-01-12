const router = require("express").Router();
const userRoute = require("./api/userRoute");
const homeRoutes = require("./api/userRoute");

router.use("/api", userRoute);

module.exports = router;
