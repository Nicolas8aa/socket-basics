const socketDriver = (socket) => {
  console.log("connected client", socket.id);
  socket.on("disconnect", () => {
    console.log("client disconnected :c", socket.id);
  });
  socket.on("msg", (payload, callback) => {
    const id = 5433214;
    callback({ id, date: new Date() });

    socket.broadcast.emit("msg", payload);
  });
};

module.exports = { socketDriver };
