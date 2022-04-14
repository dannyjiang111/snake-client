// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log("Successfully connected to game server"); // welcome greeting on connection
    conn.write("Name: DAN"); // writes data to the server
    //conn.write("Move: up")
  });
  conn.on("data", (data) => {
    console.log("Server says: ", data); // message from client
  });
  return conn;
};

module.exports = connect