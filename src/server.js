require("dotenv").config();
const http = require("http");
const app = require("./app");

const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

const main = () => {
  server.listen(PORT, () => {
    console.log("Server is listing..");
  });
};
main();
