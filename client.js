const net = require("net");

// establishes a connection with the game server





const connect = () => {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541,// PORT number here,
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