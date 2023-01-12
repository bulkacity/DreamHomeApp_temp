const User = require("./User");
const Gallery = require("./Location");
const Painting = require("./Property");

Gallery.hasMany(Property, {
  foreignKey: "location_id",
});

Painting.belongsTo(Location, {
  foreignKey: "location_id",
});

module.exports = { User, Location, Property };
