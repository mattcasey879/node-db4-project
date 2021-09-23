exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("step_ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("step_ingredients").insert([
        { step_id: 2, ing_id: 7, quanity: 0.33 },
        { step_id: 3, ing_id: 5, quanity: 1.25 },
        { step_id: 5, ing_id: 2, quanity: 0.5 },
        { step_id: 4, ing_id: 6, quanity: 1 },
        { step_id: 6, ing_id: 8, quanity: 2 },
        { step_id: 7, ing_id: 1, quanity: 0.3 },
      ]);
    });
};
