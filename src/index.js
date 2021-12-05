const express = require("express");
const app = express();
var ids = 0;
var students = [];

app.get("/students", (req, res) => {
  res.send(students);
});

app.get("/students/:id", (req, res) => {
  res.send(students[req.params.id]);
});

app.post("/proverka", (req, res) => {
  let date = new Date();
  var student = {
    id: ids++,
    firstname: req.query.firstname,
    lastName: req.query.lastName,
    group: req.query.group,
    createdAt: date.toLocaleString(),
    updatedAt: date.toLocaleString()
  };
  students.push(student);
});

app.get("/", (req, res) => {
  res.send("base page");
});

app.listen(8080);

// для проверки на get/post запросы
//https://web.postman.co/workspace/My-Workspace~ffe04061-67e3-440e-870a-219e62f92fb6/request/create?requestId=940a989e-b0f5-452b-acc0-d3a36d19aa74
