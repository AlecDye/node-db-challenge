const express = require("express");

const Projects = require("./projects-model.js");

const router = express.Router();

// CRUD endpoints go here
// success
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

// success
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

// success
router.get("/:id/tasks", (req, res) => {
  const id = req.params.id;
  Projects.getTasks(id)
    .then((descs) => {
      res.status(200).json(descs);
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: "Failed to get tasks", error });
    });
});

router.get("/:id/resources", (req, res) => {
  const id = req.params.id;
  Projects.getResources(id)
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: "Failed to get resources", error });
    });
});

// projects
// success
router.post("/", (req, res) => {
  const projectData = req.body;
  Projects.add(projectData)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: "Failed to create project", error });
    });
});

// tasks
//success
router.post("/:id/tasks", (req, res) => {
  const taskData = req.body;
  const { id } = req.params;

  Projects.findById(id)
    .then((project) => {
      if (project) {
        Projects.addTask(taskData, id).then((task) => {
          res.status(201).json(task);
        });
      } else {
        res.status(404).json({ message: "Could not find project" });
      }
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: "Failed to create task", error });
    });
});

// resources
router.post("/:id/resources", (res, req) => {});

module.exports = router;
