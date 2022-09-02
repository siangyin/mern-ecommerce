const express = require("express");
const products = require("./data/products");
const app = express();

app.get("/", (req, res) => {
	res.send("hello");
});

app.get("/api/products", (req, res) => {
	res.json(products);
});

app.get("/api/products/:id", (req, res) => {
	const product = products.find((prod) => prod._id === req.params.id);
	res.json(product);
});

app.listen(8000, () => {
	console.log("server running");
});
