exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tacos").del()
    .then(function () {
      // Inserts seed entries
      return knex("tacos").insert([{
          id: 1,
          base_layers_id: 1,
          mixin_id: 1,
          condiments_id: 1,
          shells_id: 1,
          seasonings_id: 1
        },
        {
          id: 2,
          base_layers_id: 2,
          mixin_id: 2,
          condiments_id: 2,
          shells_id: 2,
          seasonings_id: 2
        },
        {
          id: 3,
          base_layers_id: "rowValue3",
          mixin_id: "",
          condiments_id: "",
          shells_id: "",
          seasonings_id: ""
        }
      ]);
    });
};