const express = require("express");
const helmet = require("helmet");

//todo Create multiple routers

const server = express();

//todo call routers here
server.use(express.json());

// server.use("/api/recipes", RecipeRouter);

module.exports = server;
