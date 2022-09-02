import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
	return (
		<Card className="my-3 p3 rounded h-100">
			<Link to={`/product/${product._id}`}>
				<Card.Img src={product.image} variant="top"></Card.Img>
			</Link>

			<Card.Body>
				<Link
					to={`/product/${product._id}`}
					className="text-reset text-decoration-none"
				>
					<Card.Title as="div">
						<strong>{product.name}</strong>
					</Card.Title>
				</Link>
				<Card.Text as="div">
					<Rating rating={product.rating} review={product.numReviews} />
				</Card.Text>

				<Card.Text as="h3">${product.price}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Product;
