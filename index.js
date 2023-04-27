const fs = require("fs");
const express = require("express");
const path = require("path");


const server = express();
const port = process.env.PORT || 3001;
const pDir = path.join(__dirname, "/public");

server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());