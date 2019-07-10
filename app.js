"use strict";

// const app = require('./app');
const http = require("http");
const express = require("express");
const normalizePort = require("normalize-port");

const app = express();

const port = normalizePort(process.env.PORT || "8080");
app.set("port", port);

const server = http.createServer(app).listen(port, () => {
  console.log(`listening on ${port}`);
});
