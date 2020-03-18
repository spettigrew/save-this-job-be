const express = require("express");
const usersRouter = require("./users/users-router");
const cors = require("cors");

const server = express();

const PORT = process.env.PORT || 8080;

server.use(express.json());
server.use(cors());
// server.use(jwtMiddleWare());

server.use("/", usersRouter);

server.use((err, req, res, next) => {
  console.log(`Err:`, err);
  res.status(500).json({
    message: `Something went wrong`
  });
});

if (!module.parent) {
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = server;
