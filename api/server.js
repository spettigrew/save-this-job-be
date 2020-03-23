const express = require("express");
const cors = require("cors");
const usersRouter = require("../users/users-router");
const jobPostsRouter = require("../jobPosts/job_posts_router");
const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
// server.use(jwtMiddleWare());

server.use("/users", usersRouter);
server.use("/jobPosts", jobPostsRouter);

server.use((err, req, res, next) => {
  console.log(`Err:`, err);
  res.status(500).json({
    message: `Something went wrong`
  });
});
