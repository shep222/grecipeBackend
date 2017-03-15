exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('step').del()
        .then(function() {
            // Inserts seed entries
            return knex('step').insert([{
                    id: 1,
                    stepBody: 'Bring a large pot of lightly salted water to a boil. Add pasta and cook for 8 to 10 minutes or until al dente; drain and place in ice water until cool',
                    recipe_id: 1,
                    orderNumber: 1

                }, {
                    id: 2,
                    stepBody: 'Toss pasta with onion, feta, balsamic, olive oil and tomato. Serve immediately or chill 1 to 2 hours in refrigerator.',
                    recipe_id: 1,
                    orderNumber: 2
                }, {
                    id: 3,
                    stepBody: 'Heat vegetable oil in a large wok or skillet over medium-high heat; cook and stir beef until browned, 3 to 4 minutes. Move beef to the side of the wok and add broccoli, bell pepper, carrots, green onion, and garlic to the center of the wok. Cook and stir vegetables for 2 minutes. Stir beef into vegetables and season with soy sauce and sesame seeds. Continue to cook and stir until vegetables are tender, about 2 more minutes.',
                    recipe_id: 2,
                    orderNumber: 1
                }









            ]);
        }).then(function() {
            return knex.raw('alter sequence step_id_seq restart with 4')
        })
};
