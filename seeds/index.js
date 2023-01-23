const sequelize = require("../connection");
const seedLocation = require("./locationData");
const seedPropertys = require("./propertyData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedLocation();

  await seedPropertys();

  process.exit(0);
};

seedAll();