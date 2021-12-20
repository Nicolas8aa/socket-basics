const express = require("express");
const cors = require("cors");
const { socketDriver } = require("../sockets/driver");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {};

    // Socket config
    this.server = require("http").createServer(this.app);
    this.io = require("socket.io")(this.server);

    this.middlewares();
    this.routes();

    // Sockets
    this.sockets();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.static("public"));
  }

  routes() {
    // this.app.use('xd',require('../routes/xd'))
  }
  sockets() {
    this.io.on("connection", socketDriver);
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`Server running at port ${this.port} :)`);
    });
  }
}

module.exports = Server;
