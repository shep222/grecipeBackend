exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('recipe').del()
        .then(function() {
            // Inserts seed entries
            return knex('recipe').insert([{
                    id: 1,
                    name: 'speghetti',
                    user_id: 'thomas.castleman@gmail.com'
                }, {
                    id: 2,
                    name: 'Parmesan Chicken Bake',
                    user_id: 'john.sheplerjr@gmail.com'
                }
            ]);
        }).then(function () {
          return knex.raw('alter sequence recipe_id_seq restart with 3')
        })
};
