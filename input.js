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
  if (data === '\u0003') {  //CTRL + C
    process.exit();
  } else if (data === '\u0077') { // W
    // console.log("w");
    connection.write("Move: up");
  } else if (data === '\u0061') { // A
    // console.log("a");
    connection.write("Move: left"); 
  } else if (data === '\u0073') { // S  
    // console.log("s");
    connection.write("Move: down"); 
  } else if (data === '\u0064') { // D
    // console.log("d");
    connection.write("Move: right");
  }
  else if (data === '\u007A') { // Z     
    connection.write("Say: Good Game!");
  }
  else if (data === '\u0078') { // Z     
    connection.write("Say: Missing Middle!");
  }


};

module.exports = {setupInput,}