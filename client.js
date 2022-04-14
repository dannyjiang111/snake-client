// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    conn.write("Name: DAN"); // writes data to the server
  });
  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect