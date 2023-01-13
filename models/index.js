const User = require("./User");
const Location = require("./Location");
const Property = require("./Property");

Location.hasMany(Property, {
  foreignKey: "location_id",
});

Property.belongsTo(Location, {
  foreignKey: "location_id",
});

module.exports = { User, Location, Property };
