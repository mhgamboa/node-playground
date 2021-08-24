const http = require("http");

const portNumber = 3000;

const server = http.createServer((req, res) => {
  console.log(`Server recived a request`);
});

server.listen(portNumber, "localhost", () => {
  console.log(`Listening for a request on port ${portNumber}`);
});
