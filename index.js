const fetch = require("node-fetch");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.get("/", (req, res) => {
  fetch("http://colormind.io/api/", {
    body: '{"model":"default"}',
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => res.send(data))
    .catch((err) => {
      throw new Error(err);
    });
});

app.listen(port, () => {});
