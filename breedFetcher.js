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
    console.log('Error:', error);
    return;

  } else {
    const data = JSON.parse(body);

    if (data.length === 0) {
      console.log("Check the breed");
    } else {
      console.log(data[0].description);
    }
    
    return
  }
    
});