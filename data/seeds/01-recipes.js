
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'Spaghetti Bolognese' },
        { recipe_name: 'Gumbo' },
        { recipe_name: 'Jambalaya' }
      ]);
    });
};
