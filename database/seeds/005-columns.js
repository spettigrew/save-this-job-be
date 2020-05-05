exports.seed = async (knex) => {
  await knex("columns").insert([
    { name: "Wishlist" },
    { name: "Applied" },
    { name: "Interviewed" },
    { name: "Offer" },
  ]);
};
