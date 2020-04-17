exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          desc: "Research cloud storage prices",
          note: "Google?",
          project_id: 1,
        },
        {
          desc: "Sort through our dbs",
          note: "Remove unused files",
          project_id: 1,
        },
        { desc: "Task 1", note: "only one note", project_id: 2 },
        { desc: "Task 2", project_id: 2 },
        {
          desc: "Buy 12 large pizzas",
          note: "Ameci's is cheap",
          project_id: 3,
        },
      ]);
    });
};
