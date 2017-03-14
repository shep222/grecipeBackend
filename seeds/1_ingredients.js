exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('ingredient').del()
        .then(function() {
            // Inserts seed entries
            return knex('ingredient').insert([{
                    id: 1,
                    name: '2 tablespoons olive oil'
                }, {
                    id: 2,
                    name: '2 cloves garlic, crushed finely chopped'
                }, {
                    id: 3,
                    name: '1/4 teaspoon crushed red pepper flakes'
                }, {
                    id: 4,
                    name: '6 skinless, boneless chicken breasts'
                }, {
                    id: 5,
                    name: '2 cups mariniara sauce'
                }, {
                    id: 6,
                    name: '1/4 cup grated Parmesan'
                }, {
                    id: 7,
                    name: '5 ounce garlic croutons'
                }, {
                    id: 8,
                    name: '16 oz bow tie pasta'
                }, {
                    id: 9,
                    name: '2 green onions, chopped'
                }, {
                    id: 10,
                    name: '6 oz feta cheese, crumbled'
                }, {
                    id: 11,
                    name: '1/2 cup balsamic vinegar'
                }, {
                    id: 12,
                    name: '1/4 cup extra virgin olive oil'
                }, {
                    id: 13,
                    name: '2 cups chopped fresh tomato'
                }

            ]);
        }).then(function () {
          return knex.raw('alter sequence ingredient_id_seq restart with 14')
        })
};
