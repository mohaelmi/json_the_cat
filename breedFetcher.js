const request = require("request");
const name = process.argv.slice(2).join(' ');

request("https://api.thecatapi.com/v1/breeds/", (error, response) => {
  if (error) {
    throw new Error(error, "something went wrong");
  }

  const breeds = JSON.parse(response.body);
  const breed = breeds.filter(breed => name === breed.name)[0];
  if (!breed) {
    console.log("name not found");
    return;
  }
  console.log(breed.description);

});