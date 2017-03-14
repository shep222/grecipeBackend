exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('review').del()
        .then(function() {
            // Inserts seed entries
            return knex('review').insert([{
                    id: 1,
                    recipe_id: 1,
                    reviewBody: 'tastes like shit',
                    user_id: 'thomas.castleman@gmail.com'
                }, {
                    id: 2,
                    recipe_id: 2,
                    reviewBody: 'MMMMMMMM So good',
                    user_id: 'john.sheplerjr@gmail.com'
                }
            ]);
        }).then(function () {
          return knex.raw('alter sequence review_id_seq restart with 3')
        })
};
