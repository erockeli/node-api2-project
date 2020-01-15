const server = require("./express/server.js");

const port= 5000;

server.listen(5000, () => {
  console.log(`\n **** Server is Running on ${port} **** \n`);
});