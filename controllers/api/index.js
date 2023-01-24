const router = require("express").Router();
const userRoutes = require("./user-Route");
router.use("/users", userRoutes);
module.exports = router;
