const sequelize = require("../config/connection");
const seedLocation = require("./locationData");
const seedPropertys = require("./propertyData");
const seedDatabase = require("./userData.json");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedLocation();

  await seedPropertys();

  await seedDatabase();

  process.exit(0);
};

seedAll();
