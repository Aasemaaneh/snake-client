const net = require("net");
// establishes a connection with the game server
const connect = function () {
const conn = net.createConnection({//You used Node's net library (specifically, the createConnection function) to create an object named conn in the code .
  host: 'localhost',  // IP address here,
  port: 50541, // PORT number here,
});
// interpret incoming data as text
conn.setEncoding("utf8");
conn.on("connect", () => {   // your conn object is an instance of the Socket class
   console.log('Successfully connected to game server') // code that does something when the connection is first established
   conn.write("Name: SAM");
  });
conn.on("data", (message) => {  
   console.log(message);

});

return conn; //The conn object that Node returned to you represents the connection that you have with the server.
//The conn object is full of useful methods and properties that can now be used to interact with the server!
};

console.log("Connecting ...");
//connect();
module.exports = connect;