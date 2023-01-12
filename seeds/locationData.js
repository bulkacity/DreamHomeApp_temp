const { Location } = require("../models");

const locationdata = [
  {
    name: "Miami",
    number_of_properties: 10,
  },
  {
    name: "Orlando",
    number_of_properties: 10,
  },
  {
    name: "Naples",
    number_of_properties: 10,
  },
  {
    name: "Fort Lauderdale",
    number_of_properties: 10,
  },
];

const seedLocation = () => Location.bulkCreate(locationdata);

module.exports = seedLocation;
