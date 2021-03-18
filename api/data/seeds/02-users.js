exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          user_id: 1,
          username: "tylertheadmin",
          password: "tylertheadmin",
          email: "tylerpmatthews1998@gmail.com",
          account_type: true,
        },
        {
          user_id: 2,
          username: "test",
          password: "test",
          email: "test@gmail.com",
          account_type: false,
        },
      ]);
    });
};
