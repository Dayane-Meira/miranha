const express = require("express");
const server = express();
const routes = require("./routes");

server.use(express.static("public"));

server.use(routes);

server.listen(3000, () => {
    console.log('Server is booming on port, 3000 Visit http://localhost:3000');
})