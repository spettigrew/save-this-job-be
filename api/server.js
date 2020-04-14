const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const usersRouter = require("../users/users-router");
const tagsRouter = require("../tags/tags_router");
const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use("/users", usersRouter);
server.use("/tags", tagsRouter);

server.get("/", (req, res, next) => {
  res.json({ message: "sanity check" });
});

server.use((err, req, res, next) => {
  console.log(`Err:`, err);
  res.status(500).json({
    message: `Something went wrong`
  });
});

module.exports = server;
