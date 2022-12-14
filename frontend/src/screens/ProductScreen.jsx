import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
	Col,
	Image,
	ListGroup,
	ListGroupItem,
	Row,
	Card,
	Button,
} from "react-bootstrap";
import Rating from "../components/Rating";
// import products from "../products";

const ProductScreen = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);

	useEffect(() => {
		const url = `/api/products/${id}`;
		const fetchProduct = async () => {
			const res = await axios.get(url);
			setProduct(res.data);
		};
		fetchProduct();
	}, [id]);

	if (!product) return null;
	return (
		<>
			<Link className="btn btn-light my-3" to="/">
				Go Back
			</Link>

			<Row>
				<Col md={6}>
					<Image src={product.image} alt={product.name} fluid />
				</Col>

				<Col md={3}>
					<ListGroup variant="flush">
						<ListGroupItem>
							<h3>{product.name}</h3>
						</ListGroupItem>

						<ListGroupItem>
							<Rating rating={product.rating} review={product.numReviews} />
						</ListGroupItem>

						<ListGroupItem>Price: ${product.price}</ListGroupItem>

						<ListGroupItem>Description: ${product.description}</ListGroupItem>
					</ListGroup>
				</Col>

				<Col md={3}>
					<Card>
						<ListGroup variant="flush">
							<ListGroupItem>
								<Row>
									<Col>Price:</Col>
									<Col>
										<strong>${product.price}</strong>
									</Col>
								</Row>
							</ListGroupItem>

							<ListGroupItem>
								<Row>
									<Col>Status:</Col>
									<Col>
										{product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
									</Col>
								</Row>
							</ListGroupItem>

							<ListGroupItem className="d-grid gap-2">
								<Button
									className={`btn ${
										product.countInStock === 0
											? "btn-secondary disabled"
											: "btn-danger"
									}`}
									type="button"
								>
									{product.countInStock === 0 ? "sold out" : "add to cart"}
								</Button>
							</ListGroupItem>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default ProductScreen;
