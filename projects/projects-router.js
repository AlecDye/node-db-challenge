const express = require("express");

const Projects = require("./projects-model.js");

const router = express.Router();

// CRUD operation endpoints (for projects)
router.get("/", (req, res) => {
  Projects.findProject()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "Failed to find project(s)", err });
    });
});
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Projects.findProjectById(id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "Failed to find project(s)", err });
    });
});
router.post("/", (req, res) => {
  const projectData = req.body;
  Projects.createProject(projectData)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "Failed to create project(s)", err });
    });
});

module.exports = router;
