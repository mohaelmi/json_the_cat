const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request("https://api.thecatapi.com/v1/breeds/", (error, response) => {
    if (error) {
      return callback(error, null);
    }
    
    const breeds = JSON.parse(response.body);
    const breed = breeds.filter(breed => breedName === breed.name)[0];
    if (!breed) {
      console.log("name not found");
      return
    }
    
    return callback(null, breed.description);

  });


};

module.exports = {
  fetchBreedDescription
};