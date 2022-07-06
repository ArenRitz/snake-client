let connection;


const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  // your code here
  if (data === '\u0003') {
    process.exit();
  } else if (data === '\u0077') {
    console.log("w");
    connection.write("Move: up");
  } else if (data === '\u0061') {
    console.log("a");
    connection.write("Move: left");
  } else if (data === '\u0073') {
    console.log("s");
    connection.write("Move: down");
  } else if (data === '\u0064') {
    console.log("d");
    connection.write("Move: right");
  }

};

module.exports = {setupInput,}