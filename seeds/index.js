const sequelize = require("../connection");
const seedLocation = require("./locationData");
const seedPropertys = require("./propertyData");
const userData = require("./userData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedLocation();

  await seedPropertys();

  await userData();

  process.exit(0);
};

seedAll();
