const router = require("express").Router();
const userRoutes = require("./userRoute");
router.use("/user", userRoutes);
module.exports = router;