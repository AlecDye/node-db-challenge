const express = require("express");

const Resources = require("./resources-model.js");

const router = express.Router();

// CRUD operation endpoints (for resources)
router.get("/", (req, res) => {
  Resources.findResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "Failed to find resource(s)", err });
    });
});
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Resources.findResourcesById(id)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "Failed to find resource(s)", err });
    });
});
router.post("/", (req, res) => {
  const resourceData = req.body;
  Resources.createResource(resourceData)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "Failed to create resource(s)", err });
    });
});

module.exports = router;
