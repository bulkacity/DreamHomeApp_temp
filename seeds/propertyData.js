const { Property } = require("../models");

const propertydata = [
  {
    title: "Blossoming Apricot",
    address: "LedyX",
    price: 12,
    property_size: 10_000,
    bedrooms: 1,
    bathrooms: 1,
    gallery_id: 1,
    filename: "01-blossoming-apricot.jpg",
    description:
      "Branches with pink apricot blossoms against a blue background.",
  },
  // {
  //   title: "Blossoming Apricot",
  //   address: "LedyX",
  //   price: "12",
  //   property_size: "10,000",
  //   bedrooms: "1",
  //   bathrooms: "1",
  //   gallery_id: 1,
  //   filename: "01-blossoming-apricot.jpg",
  //   description:
  //     "Branches with pink apricot blossoms against a blue background.",
  // },
  // {
  //   title: "Blossoming Apricot",
  //   address: "LedyX",
  //   price: "12",
  //   property_size: "10,000",
  //   bedrooms: "1",
  //   bathrooms: "1",
  //   gallery_id: 1,
  //   filename: "01-blossoming-apricot.jpg",
  //   description:
  //     "Branches with pink apricot blossoms against a blue background.",
  // },
  // {
  //   title: "Blossoming Apricot",
  //   address: "LedyX",
  //   price: "12",
  //   property_size: "10,000",
  //   bedrooms: "1",
  //   bathrooms: "1",
  //   gallery_id: 1,
  //   filename: "01-blossoming-apricot.jpg",
  //   description:
  //     "Branches with pink apricot blossoms against a blue background.",
  // },
  // {
  //   title: "Blossoming Apricot",
  //   address: "LedyX",
  //   price: "12",
  //   property_size: "10,000",
  //   bedrooms: "1",
  //   bathrooms: "1",
  //   gallery_id: 1,
  //   filename: "01-blossoming-apricot.jpg",
  //   description:
  //     "Branches with pink apricot blossoms against a blue background.",
  // },
  // {
  //   title: "Blossoming Apricot",
  //   address: "LedyX",
  //   price: "12",
  //   property_size: "10,000",
  //   bedrooms: "1",
  //   bathrooms: "11",
  //   gallery_id: 1,
  //   filename: "01-blossoming-apricot.jpg",
  //   description:
  //     "Branches with pink apricot blossoms against a blue background.",
  // },
  // {
  //   title: "Blossoming Apricot",
  //   address: "LedyX",
  //   price: "12",
  //   property_size: "10,000",
  //   bedrooms: "1",
  //   bathrooms: "1",
  //   gallery_id: 1,
  //   filename: "01-blossoming-apricot.jpg",
  //   description:
  //     "Branches with pink apricot blossoms against a blue background.",
  // },
  // {
  //   title: "Blossoming Apricot",
  //   address: "LedyX",
  //   price: "12",
  //   property_size: "10,000",
  //   bedrooms: "1",
  //   bathrooms: "1",
  //   gallery_id: 1,
  //   filename: "01-blossoming-apricot.jpg",
  //   description:
  //     "Branches with pink apricot blossoms against a blue background.",
  // },
  // {
  //   title: "Blossoming Apricot",
  //   address: "LedyX",
  //   price: "12",
  //   property_size: "10,000",
  //   bedrooms: "1",
  //   bathrooms: "1",
  //   gallery_id: 1,
  //   filename: "01-blossoming-apricot.jpg",
  //   description:
  //     "Branches with pink apricot blossoms against a blue background.",
  // },
];

const seedPropertys = () => Property.bulkCreate(propertydata);

module.exports = seedPropertys;
