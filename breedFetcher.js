const request = require('request');

const breed = process.argv[2];
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;

request(url, (error, response, body) => {
  if (response && response.statusCode !== 200) return console.log('Breed not found');
  else if (error) return console.log(error);

  const data = JSON.parse(body);
  console.log(data[0].description);
});

