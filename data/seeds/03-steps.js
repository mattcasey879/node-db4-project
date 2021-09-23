
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { step_instructions: 'Put large sauce pan on medium heat', step_number: 1, recipe_id: 1 },
        { step_instructions: 'Add 1 tbsp olive oil', step_number: 2, recipe_id: 1 },
        { step_instructions: 'Cut chicken into squares', step_number: 1, recipe_id: 2 },
        { step_instructions: 'Cut sausage into 1/4 inch pieces', step_number: 2, recipe_id: 2 },
        { step_instructions: 'Cut onions and add to pan and cook down', step_number: 1, recipe_id: 3},
        { step_instructions: 'add rice to pan and simmer', step_number: 3, recipe_id: 3},
        { step_instructions: "Add Garlic to pan", step_number: 3, recipe_id: 1},

      ]);
    });
};
