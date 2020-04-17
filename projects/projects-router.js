const express = require("express");

const Projects = require("./projects-model.js");

const router = express.Router();

// CRUD operation endpoints (for projects)
// task belong to projects so put them in here?
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
router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;
  Projects.findTask(id)
    .then((task) => {
      if (task.length) {
        res.status(200).json(task);
      } else {
        res.status(404).json({ message: "No tasks found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "Failed to find task(s)", err });
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
router.post("/:id/tasks", (req, res) => {
  const taskData = req.body;
  const { id } = req.params;
  Projects.findProjectById(id)
    .then((project) => {
      if (project) {
        Projects.createTask(taskData, id).then((task) => {
          res.status(201).json(task);
        });
      }
    })

    //   Projects.createTask(newTask)
    //     .then((task) => {
    //       res.status(201).json(newTask);
    //     })
    .catch((err) => {
      res.status(500).json({ errorMessage: "Failed to create task(s)", err });
    });
});
module.exports = router;
