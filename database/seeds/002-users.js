exports.seed = async knex => {
  await knex("users").insert([
    { firstName: "Rose", lastName: "Jones", email: "rose@gmail.com" },
    { firstName: "Don", lastName: "Wizard", email: "don@email.com" },
    { firstName: "Kevin", lastName: "blueberry", email: "kevin@gmail.com" }
  ]);
};
