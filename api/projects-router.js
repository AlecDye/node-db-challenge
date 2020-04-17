const express = require("express");

const Projects = require("./projects-model.js");

const router = express.Router();

// CRUD endpoints go here
router.get("/", (req, res) => {
  Projects.find()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ errorMessage: "Couldn't retrieve projects", error });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Projects.findById(id)
    .then((project) => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ message: "Project not found" });
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({ errorMessage: "Couldn't retrieve project", error });
    });
});

module.exports = router;
