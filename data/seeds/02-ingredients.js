
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'garlic'},
        { ingredient_name: 'onions'},
        { ingredient_name: 'bellpepper' },
        { ingredient_name: 'spagehtti' },
        { ingredient_name: 'chicken' },
        { ingredient_name: 'sausage' },
        { ingredient_name: 'olive oil'},
        { ingredient_name: "rice"}

      ]);
    });
};
