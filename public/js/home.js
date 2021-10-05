let search = 'italian';
fetch(
  'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=' +
    search +
    '&number=10',
  {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'x-rapidapi-key': 'getaarapidapikey',
    },
  }
)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });