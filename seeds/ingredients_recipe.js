exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('ingredient_recipe').del()
        .then(function() {
            // Inserts seed entries
            return knex('ingredient_recipe').insert([{
                    recipe_id: 1,
                    ingredient_id: 8
                }, {
                    recipe_id: 1,
                    ingredient_id: 9
                }, {
                    recipe_id: 1,
                    ingredient_id: 10
                }, {
                    recipe_id: 1,
                    ingredient_id: 11
                }, {
                    recipe_id: 1,
                    ingredient_id: 12
                }, {
                    recipe_id: 1,
                    ingredient_id: 13
                }, {
                    recipe_id: 2,
                    ingredient_id: 1
                }, {
                    recipe_id: 2,
                    ingredient_id: 2
                }, {
                    recipe_id: 2,
                    ingredient_id: 3
                }, {
                    recipe_id: 2,
                    ingredient_id: 4
                }, {
                    recipe_id: 2,
                    ingredient_id: 5
                }, {
                    recipe_id: 2,
                    ingredient_id: 6
                }, {
                    recipe_id: 2,
                    ingredient_id: 7
                }

            ]);
        })
};
