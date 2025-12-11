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
  if (!singleProduct) {
    return res.status(404).send("Product does not exist");
  }
  // console.log(singleProduct);
  return res.json(singleProduct);
});

// Route params
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("hello");
});

// Query string params
app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortProducts = [...products];

  if (search) {
    sortProducts = sortProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortProducts = sortProducts.slice(0, Number(limit));
  }
  res.status(200).json(sortProducts);
  // res.send("hello");
});

app.listen(5003, (req, res) => {
  console.log("Server is listening on port 5003...");
});
