/* jshint esversion: 6 */

// import http from "http";
// import express from "express";
// import normalizePort from "normalize-port";
const http = require("http");
const express = require("express");
const normalizePort = require("normalize-port");

const app = express();

const port = normalizePort(process.env.PORT || "8080");
app.set("port", port);

http.createServer(app).listen(port, () => {
  console.log(`listening on ${port}`);
});
