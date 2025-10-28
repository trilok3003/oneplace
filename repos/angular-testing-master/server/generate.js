var faker = require('faker');

var database = { products: [] };

for (var i = 1; i <= 300; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?product",
    quantity: faker.random.number()
  });
}

console.log(JSON.stringify(database));

// var faker = require('faker');

// var database = { products: []};

// for (var i = 1; i<= 300; i++) {
//   database.products.push({
//     id: i,
//     name: faker.commerce.productName(),
//     description: faker.lorem.sentences(),
//     price: faker.commerce.price(),
//     imageUrl: "https://source.unsplash.com/1600x900/?product",
//     quantity: faker.random.number()
//   });
// }

// console.log(JSON.stringify(database));


// employees.js


// create an array with a random number (between 1 and 50) of elements
// const arr = new Array(faker.random.number({ min: 1, max: 50 })).fill()
// define at each position in the Array an element that has two fake generated properties - one a a city and the other a list of up to three street names
// const generatedList = arr.map(() =>
//   ({
//     city: faker.address.city(),
//     streets: new Array(faker.random.number({ min: 1, max: 3 }))
//       .fill().map(() => faker.address.streetName(), 3, true)
//   }
//   ))