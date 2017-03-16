exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('user').del()
        .then(function() {
            // Inserts seed entries
            return knex('user').insert([{
                    email: 'john.sheplerjr@gmail.com',
                    postName: 'John Shepler'
                },
                {
                    email: 'thomas.castleman@gmail.com',
                    postName: 'Thomas'
                },

            ]);
        });
};
