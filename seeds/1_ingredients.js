exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('ingredient').del()
        .then(function() {
            // Inserts seed entries
            return knex('ingredient').insert([{
                    id: 1,
                    name: 'olive oil'
                }, {
                    id: 2,
                    name: 'garlic'
                }, {
                    id: 3,
                    name: 'crushed red pepper flakes'
                }, {
                    id: 4,
                    name: 'chicken breasts'
                }, {
                    id: 5,
                    name: 'mariniara sauce'
                }, {
                    id: 6,
                    name: 'Parmesan'
                }, {
                    id: 7,
                    name: 'garlic croutons'
                }, {
                    id: 8,
                    name: 'bow tie pasta'
                }, {
                    id: 9,
                    name: 'onions'
                }, {
                    id: 10,
                    name: '6 oz feta cheese, crumbled'
                }, {
                    id: 11,
                    name: 'balsamic vinegar'
                }, {
                    id: 12,
                    name: 'extra virgin olive oil'
                }, {
                    id: 13,
                    name: 'tomato'
                }

            ]);
        }).then(function () {
          return knex.raw('alter sequence ingredient_id_seq restart with 14')
        })
};
