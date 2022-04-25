import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello!");
});

app.post("/", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log("Server ready!");
});