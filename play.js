const  connect  = require("./client");
const  setupInput  = require("./input");

console.log("Connecting ...");
const conn = connect();

setupInput(conn);
function broadcast(message) {
    clients.forEach(client => {
      client.write(message);
    });
  }