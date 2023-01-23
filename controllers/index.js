const router = require("express").Router();

const userRoute = require("./api");
const homeRoutes = require("./homeRoutes");
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
