// Html refs
const lbOn = document.getElementById("lbOn");
const lbOff = document.getElementById("lbOff");

const txtMsg = document.querySelector("#txtMsg");
const sendBtn = document.getElementById("sendBtn");

// socket
const socket = io();

socket.on("connect", () => {
  lbOff.style.display = "none";
  lbOn.style.display = "";
  // console.log("wiiiiiiiiiiiii conectado xd");
});

socket.on("disconnect", () => {
  lbOff.style.display = "";
  lbOn.style.display = "none";
  // console.log("nooooooo disconnected :c");
});

socket.on("msg", (payload) => {
  console.log(payload);
});

sendBtn.addEventListener("click", () => {
  const message = txtMsg.value;

  const payload = {
    message,
    id: "xddd",
    date: new Date().getTime(),
  };
  socket.emit("msg", payload, (id) => {
    console.log("from server xd", id);
  });
});
