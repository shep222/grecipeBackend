exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('user').del()
        .then(function() {
            // Inserts seed entries
            return knex('user').insert([{
                    email: 'john.sheplerjr@gmail.com'
                },
                {
                    email: 'thomas.castleman@gmail.com'
                },

            ]);
        });
};
