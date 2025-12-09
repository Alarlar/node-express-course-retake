const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send("<h1> Home Page</h1><a href='/api/products'>products</a>"); // This is creating API http interface to intercat with data
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  // console.log(req);
  // console.log(req.params);
  const { productID } = req.params;

  const singleProduct = products.find(
    (products) => products.id === Number(productID)
  );
  res.json(singleProduct);
});

app.listen(5003, (req, res) => {
  console.log("Server is listening on port 5003...");
});
