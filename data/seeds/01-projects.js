exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          title: "Migrate on-site databases to cloud server",
          project_desc: "It's the future, lets do everything on the cloud",
        },
        { title: "Upgrade coffee machines to K-cup things" },
        {
          title: "Super cool pizza party",
          project_desc: "We did it guys! Pizza is on me",
        },
      ]);
    });
};
