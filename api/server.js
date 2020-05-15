const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const jobPostsRouter = require("../jobPosts/job_posts_router");
const checkUser = require("../middleware/checkUser");
const authenticationRequired = require('../middleware/oktaJwtVerifier')

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

// jobPostsRouter: tags, tasks
server.use("/users", authenticationRequired, checkUser, jobPostsRouter);

server.get("/", (req, res, next) => {
  res.json({ message: "sanity check" });
});

server.use((err, req, res, next) => {
  console.log(`Err:`, err);
  res.status(500).json({
    message: `Something went wrong`,
  });
});

module.exports = server;
