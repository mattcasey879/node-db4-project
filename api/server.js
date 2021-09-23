const express = require("express");
const recipesRouter = require("./recipes/recipes-router")
const server = express();

server.use(express.json());

server.use("/api/recipes", recipesRouter);
server.get("/", (req, res, next) => {
    res.send("<h2>API U</h2>")
})
module.exports = server;
