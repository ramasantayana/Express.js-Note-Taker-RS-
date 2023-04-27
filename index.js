const fs = require("fs");
const express = require("express");
const path = require("path");


const server = express();
const port = process.env.PORT || 3001;
const pDir = path.join(__dirname, "/public");

server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.get("/notes", function (req, res) {
    res.sendFile(path.join(pDir, "notes.html"));
  });

  server.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));
  });

  server.get("/api/notes/:id", function (req, res) {
    let notesStored = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json(notesStored[Number(req.params.id)]);
  });

  server.get("*", function (req, res) {
    res.sendFile(path.join(pDir, "index.html"));
  });

server.listen(port, function () {
  console.log(`Server listening on port ${port} to service requests from front end!`);
});