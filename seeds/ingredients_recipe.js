exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('ingredient_recipe').del()
        .then(function() {
            // Inserts seed entries
            return knex('ingredient_recipe').insert([{
                    recipe_id: 1,
                    ingredient_id: 8,
                    quantity: '16 oz'
                }, {
                    recipe_id: 1,
                    ingredient_id: 9,
                    quantity: '2'
                }, {
                    recipe_id: 1,
                    ingredient_id: 10,
                    quantity: '6 oz'
                }, {
                    recipe_id: 1,
                    ingredient_id: 11,
                    quantity: '1/2 cup'
                }, {
                    recipe_id: 1,
                    ingredient_id: 12,
                    quantity: '1/4 cup'
                }, {
                    recipe_id: 1,
                    ingredient_id: 13,
                    quantity: '2'
                }, {
                    recipe_id: 2,
                    ingredient_id: 1,
                    quantity: '2 tablespoons'
                }, {
                    recipe_id: 2,
                    ingredient_id: 2,
                    quantity: '2 cloves'
                }, {
                    recipe_id: 2,
                    ingredient_id: 3,
                    quantity: '1/4 teaspoon'
                }, {
                    recipe_id: 2,
                    ingredient_id: 4,
                    quantity: '6'
                }, {
                    recipe_id: 2,
                    ingredient_id: 5,
                    quantity: '2 cups'
                }, {
                    recipe_id: 2,
                    ingredient_id: 6,
                    quantity: '1/4 cup'
                }, {
                    recipe_id: 2,
                    ingredient_id: 7,
                    quantity: '5 oz'
                }

            ]);
        })
};
