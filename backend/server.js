import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import products from "./data/products.js";

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

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`server running on ${PORT}...`);
});
