import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import { nanoid } from "nanoid";
import upload from "express-fileupload";

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(upload());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

app.post("/", (req, res) => {
  const file = req.files.file;
  const filename = file.name;
  const arrayFile = filename.split('.');
  const pathFile = arrayFile.pop();
  const fileName = nanoid() + "." + pathFile;
  console.log(pathFile);
  console.log(fileName);
  
  console.log(req.files);
});

app.listen(PORT, () => {
  console.log("Server ready!");
});