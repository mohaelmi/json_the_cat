const { fetchBreedDescription } = require("./breedFetcher");

const name = process.argv[2];

fetchBreedDescription(name, (error, desc) => {
  if (error) {
    console.log("error fetch details: ", error);
  } else {
    console.log(desc);
  }
});