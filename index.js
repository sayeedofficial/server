const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  socket.on("message", ({ name, message }) => {
    io.emit("message", { name, message });
  });
});

const PORT = 9900 || process.env.PORT;

http.listen(PORT, function () {
  console.log(`listening on port PORT ${PORT}`);
});
