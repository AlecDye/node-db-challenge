const express = require("express");
const helmet = require("helmet");

//todo Create multiple routers
const ProjectsRouter = require("./projects/projects-router");
const ResourcesRouter = require("./resources/resources.router");

const server = express();

//todo call routers here
server.use(express.json());
server.use("/api/projects", ProjectsRouter);
server.use("/api/resources", ResourcesRouter);

module.exports = server;
