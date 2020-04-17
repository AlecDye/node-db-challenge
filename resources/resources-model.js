const db = require("../data/db-config.js");

// methods for resources
module.exports = {
  findResources,
  findResourcesById,
  createResource,
};

function findResources() {
  return db("resources");
}
function findResourcesById(id) {
  return db("resources").where({ id }).first();
}
function createResource(resourceData) {
  return db("resources").insert(resourceData);
}
