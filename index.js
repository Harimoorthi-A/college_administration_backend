// load .env
require("dotenv").config();

// install $ import  of cors
const cors = require("cors");

// install $ import  of express
const express = require("express");

const router = require("./Routes/routes");
require("./db/connection");

const lmcServer = express();
// connect server with client

// export uploads folder to client
// lmcServer.use("/uploads", express.static("./uploads"));

// convert all incoming json data to js data
lmcServer.use(express.json());
lmcServer.use(cors());

lmcServer.use(router);

// PORT
const PORT = 5000 || process.env.PORT;
lmcServer.listen(PORT, () => {
  console.log(`___LMC Sever started at port number ${PORT}___`);
});

// resolve api
lmcServer.get("/", (req, res) => {
  res.send(`<h1>LMC server started</h1>`);
});
