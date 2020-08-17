const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/stream");
PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
