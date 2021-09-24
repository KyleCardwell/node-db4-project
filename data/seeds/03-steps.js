
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 1, step_number: 1, instructions: 'preheat oven to 350 F'},
        {recipe_id: 1, step_number: 2, instructions: 'Mix butter & sugar until well-combined'},
        {recipe_id: 1, step_number: 3, instructions: 'Stir in eggs & flour until dough is soft'},
        {recipe_id: 1, step_number: 4, instructions: 'mix in chocolate chips'},
        {recipe_id: 1, step_number: 5, instructions: 'scoop dough balls onto baking sheet, 2" apart'},
        {recipe_id: 1, step_number: 6, instructions: 'bake for 10 min'},
      ]);
    });
};
