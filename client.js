const net = require("net");
const {IP, PORT} = require("./constants");
// establishes a connection with the game server





const connect = () => {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Welcome to Snake!")
    conn.write("Name: RTZ")
  });


  conn.on("connect", () => {
    // setInterval(() => {
    //   conn.write("Move: left");
    //   conn.write("Move: up");
    // }, 50);

  });



  conn.on("data", (data) => {
    console.log("Snake says:", data);
  });

  return conn;


};


module.exports = { connect, }