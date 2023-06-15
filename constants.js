const IP = "localhost";
const PORT = 50541;
const PLAYERNAME = "Sam";
const MESSAGE_MAPPINGS = {
    w: "Move: up",
    a: "Move: left",
    s: "Move: down",
    d: "Move: right",
    h: "Say: Hello",
    p: "Say: :P",
    g: "Say: The Dragon is coming",
  };

module.exports = {
    IP,
    PORT,
    PLAYERNAME,
    MESSAGE_MAPPINGS
  };