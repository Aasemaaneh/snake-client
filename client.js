const net = require("net");
const { IP, PORT, PLAYERNAME } = require("./constants");
// establishes a connection with the game server
const connect = function () {
const conn = net.createConnection({//You used Node's net library (specifically, the createConnection function) to create an object named conn in the code .
  host: IP,  // IP address here,
  port: PORT, // PORT number here,
});
// interpret incoming data as text
conn.setEncoding("utf8");
conn.on("connect", () => {   // your conn object is an instance of the Socket class
   console.log('Successfully connected to game server');
});
conn.on("connect", () => {
    conn.write(`Name: ${PLAYERNAME}`);
  });
// code that does something when the connection is first established



//   conn.write("Name: SAM");
//   conn.write("Move: up");
//   conn.write("Move: down");
//   conn.write("Move: left");
//   conn.write("Move: right");
//});
//conn.on("connect", () => {
//  console.log('Successfully connected to game server');
//
//  setTimeout(() => {
//    conn.write("Move: up");
//  }, 500);
//  
//  setTimeout(() => {
//    conn.write("Move: down");
//  }, 1000);
//  
//  setTimeout(() => {
//    conn.write("Move: left");
//  }, 1500);
//  
//  setTimeout(() => {
//    conn.write("Move: right");
//  }, 2000);
//});
//conn.on("data", (message) => {  
//   console.log(message);
//
//});

//conn.on("connect", () => {
//  console.log('Successfully connected to game server');
//
//  setInterval(() => {
//    conn.write("Move: left");
//  }, 5);
//});

return conn; //The conn object that Node returned to you represents the connection that you have with the server.
//The conn object is full of useful methods and properties that can now be used to interact with the server!
};

console.log("Connecting ...");
//connect();
module.exports = connect;