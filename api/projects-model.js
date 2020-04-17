const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  getTasks,
  getResources,
  add,
  addTask,
  addResource,
};

// database methods go here
function find() {
  return db("projects");
}

function findById(id) {
  return db("projects").where({ id }).first();
}

function getTasks(id) {
  return db("tasks").where("project_id", id);
}

function getResources(id) {
  return db("project_resources")
    .join("projects", "project_resources.project_id", "projects.id")
    .join("resources", "project_resources.resource_id", "resources.id")
    .select("projects.project_title", "project_resources.*")
    .where("projects.id", id);
}

function add(projectData) {
  return db("projects")
    .insert(projectData, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function addTask(taskData) {
  return (
    db("tasks")
      .insert(taskData, "id")
      // .then((ids) => {
      //     const ids = [id];
      //   return getTasks(id);
      // });
      .then(([id]) => findById(id))
  );
}

function addResource(resourceData) {
  return db("resources").insert(resourceData);
  // .then(([id]) => findById(id));
}
