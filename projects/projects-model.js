const db = require("../data/db-config.js");

// methods for projects
module.exports = {
  findProject,
  findProjectById,
  createProject,
  findTask,
  createTask,
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
function findTask(id) {
  return;
  db("tasks")
    .select("*")
    .join("projects", "tasks.project_id", "projects.id")
    .where({ id });
}
function createTask(taskData) {
  return db("tasks").insert(taskData);
}
