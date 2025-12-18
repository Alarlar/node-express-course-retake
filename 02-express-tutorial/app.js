const express = require("express");
const app = express();
let { people } = require("./data");

// static assest
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false })); // HTML form Нужен если данные приходят из HTML формы, Парсит name=John&age=30, //Middleware → переводит тело запроса в JS-объект
// parse json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide a name");
});

app.listen(5003, (req, res) => {
  console.log("Server is listening on port 5003...");
});
