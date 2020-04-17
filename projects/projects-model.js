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
function findTask(project_id) {
  return db("tasks")
    .join("projects", "tasks.project_id", "projects.id")
    .where({ project_id })
    .select(
      "tasks.id",
      "projects.p_name",
      "projects.p_desc",
      "tasks.t_desc",
      "tasks.t_notes"
    );
}
function createTask(newTask) {
  return db("tasks").insert(newTask);
}
