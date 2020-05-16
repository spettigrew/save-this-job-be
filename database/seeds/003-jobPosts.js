exports.seed = async knex => {
  await knex("jobPosts").insert([
      { jobTitle: "Junior Dev", logo: "", companyTitle: "Amazon", companyUrl: "amazon.com", users_id: 1, column_id: "Interested", index: 1, urlText: "https://blah.com", applicationDeadline: 4/8/20, rating: 4, description: "Sell stuff", location: "Seattle", notes: "dadfhdyrjsgb" },
    { jobTitle: "Node Master", logo: "", companyTitle: "Google", companyUrl: "google.com", users_id: 3, column_id: "Applied", index: 2, urlText: "https://Node.com", applicationDeadline: 8/5/20, rating: 5, description: "Find stuff", location: "Ann Arbor", notes: "hdrjdtyjshbfs" },
    { jobTitle: "React Wizard", logo: "", companyTitle: "Facebook", companyUrl: "facebook.com", users_id: 2, column_id: "Interviewed", index: 3, urlText: "https://DonWhitely.com", applicationDeadline: 9/7/20, rating: 1, description: "Stalk people", location: "San Francisco", notes: "sdfafaweg" },
  ]);
};
