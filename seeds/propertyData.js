const { Property } = require("../models");

const propertydata = [
  {
    title: "Blossoming Apricot",
    address: "LedyX",
    price: "March 30, 2018",
    price: "",
    bedrooms: "",
    bathrooms: "",
    gallery_id: 1,
    filename: ["01-blossoming-apricot.jpg", ""],
    description:
      "Branches with pink apricot blossoms against a blue background.",
  },
  {
    title: "Blossoming Apricot",
    address: "LedyX",
    price: "March 30, 2018",
    price: "",
    bedrooms: "",
    bathrooms: "",
    gallery_id: 1,
    filename: "01-blossoming-apricot.jpg",
    description:
      "Branches with pink apricot blossoms against a blue background.",
  },
  {
    title: "Blossoming Apricot",
    address: "LedyX",
    price: "March 30, 2018",
    price: "",
    bedrooms: "",
    bathrooms: "",
    gallery_id: 1,
    filename: "01-blossoming-apricot.jpg",
    description:
      "Branches with pink apricot blossoms against a blue background.",
  },
  {
    title: "Blossoming Apricot",
    address: "LedyX",
    price: "March 30, 2018",
    price: "",
    bedrooms: "",
    bathrooms: "",
    gallery_id: 1,
    filename: "01-blossoming-apricot.jpg",
    description:
      "Branches with pink apricot blossoms against a blue background.",
  },
  {
    title: "Blossoming Apricot",
    address: "LedyX",
    price: "March 30, 2018",
    price: "",
    bedrooms: "",
    bathrooms: "",
    gallery_id: 1,
    filename: "01-blossoming-apricot.jpg",
    description:
      "Branches with pink apricot blossoms against a blue background.",
  },
  {
    title: "Blossoming Apricot",
    address: "LedyX",
    price: "March 30, 2018",
    price: "",
    bedrooms: "",
    bathrooms: "",
    gallery_id: 1,
    filename: "01-blossoming-apricot.jpg",
    description:
      "Branches with pink apricot blossoms against a blue background.",
  },
  {
    title: "Blossoming Apricot",
    address: "LedyX",
    price: "March 30, 2018",
    price: "",
    bedrooms: "",
    bathrooms: "",
    gallery_id: 1,
    filename: "01-blossoming-apricot.jpg",
    description:
      "Branches with pink apricot blossoms against a blue background.",
  },
  {
    title: "Blossoming Apricot",
    address: "LedyX",
    price: "March 30, 2018",
    price: "",
    bedrooms: "",
    bathrooms: "",
    gallery_id: 1,
    filename: "01-blossoming-apricot.jpg",
    description:
      "Branches with pink apricot blossoms against a blue background.",
  },
  {
    title: "Blossoming Apricot",
    address: "LedyX",
    price: "March 30, 2018",
    price: "",
    bedrooms: "",
    bathrooms: "",
    gallery_id: 1,
    filename: "01-blossoming-apricot.jpg",
    description:
      "Branches with pink apricot blossoms against a blue background.",
  },
];

const seedPropertys = () => Property.bulkCreate(propertydata);

module.exports = seedPropertys;
