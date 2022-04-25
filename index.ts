import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hello!");
});

app.post("/", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log("Server ready!");
});