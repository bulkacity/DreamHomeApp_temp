const router = require("express").Router();
const userRoutes = require("./user-Route");
router.use("/user", userRoutes);
module.exports = router;