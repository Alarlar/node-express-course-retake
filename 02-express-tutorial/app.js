const express = require("express");
const app = express();
let { people } = require("./data");

// static assest
app.use(express.static("./methods-public"));
// parse from data
app.use(express.urlencoded({ extended: false }));

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }

  res.status(401).send("Please provide a name");
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide a name" });
  }

  people.push({ id: people.length + 1, name });

  res.status(201).json({ success: true, name });
});
app.listen(5003, (req, res) => {
  console.log("Server is listening on port 5003...");
});
