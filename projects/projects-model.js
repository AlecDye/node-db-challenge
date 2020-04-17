const db = require("../data/db-config.js");

// methods for projects
module.exports = {
  findProject,
  findProjectById,
  createProject,
};

function findProject() {
  return db("projects");
}
function findProjectById(id) {
  return db("projects").where({ id }).first();
}
function createProject(projectData) {
  return db("projects").insert(projectData);
}
