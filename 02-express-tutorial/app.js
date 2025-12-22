const express = require("express");
const app = express();
const people = require("./routes/people");
const auth = require("./routes/auth");

// static assest
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false })); // HTML form Нужен если данные приходят из HTML формы, Парсит name=John&age=30, //Middleware → переводит тело запроса в JS-объект
// parse json
app.use(express.json());

app.use("/api/people", people);
app.use("/login", auth);

app.listen(5003, (req, res) => {
  console.log("Server is listening on port 5003...");
});
