import React from "react";
import {
	Col,
	Image,
	ListGroup,
	ListGroupItem,
	Row,
	Card,
	Button,
} from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = ({ match }) => {
	const { id } = useParams();
	const product = products.find((prod) => prod._id === id);
	// console.log(product);
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
