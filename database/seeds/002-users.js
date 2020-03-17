exports.seed = async knex => {
  await knex("users").insert([
    { name: "Rose", email: "rose@gmail.com" },
    { name: "Don", email: "don@email.com" },
    { name: "Kevin", email: "kevin@gmail.com" }
  ]);
};
