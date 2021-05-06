// const request = require('request');

// const fetchBreedDescription = function(breedName, callback) {
//   const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

//   request(url, (error, response, body) => {

//     console.log(error);
//     if (response && response.statusCode !== 200) {
//       return console.log('Breed not found');
//     } else if (error) {
//       return callback(error);
//     } else {
//       const data = JSON.parse(body);
//       return callback(error, data[0].description);
//     }
//   });
// };

// module.exports = {fetchBreedDescription};

const request = require('request');

const breed = process.argv[2];
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;

request(url, (error, response, body) => {
  if (error) {
    return console.log(error);
  } else if (body === '[]') {
    console.log("Breed not found");
  } else {
    const data = JSON.parse(body)[0].description;
    return console.log(data);
  }
});