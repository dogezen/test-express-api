const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Oh Hi There!");
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Listening on port 3000")
);
