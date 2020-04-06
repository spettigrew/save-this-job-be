const server = require("./api/server");
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || "0.0.0.0";

server.listen(PORT, HOST, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = server;
