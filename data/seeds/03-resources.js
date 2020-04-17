exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        { name: "computer", resource_desc: "latest thing from 1995" },
        { name: "chair", resource_desc: "you sit on me" },
        { name: "floor", resource_desc: "can't go to work without me" },
      ]);
    });
};
