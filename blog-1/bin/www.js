const http = require('http');
// const queryString = require('queryString');
const serverHandle = require("../app");
const PORT = 8000;
const server = http.createServer(serverHandle)
server.listen(PORT);
console.log("ok");