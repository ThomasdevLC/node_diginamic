const express = require("express");

const app = express();

app.listen(8000, () => {
  console.log("App running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello world! " + "Hello world!");
});

//testing
