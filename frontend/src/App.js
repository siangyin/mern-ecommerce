import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
	return (
		<div>
			<Header />
			<main>
				<Container>
					<h1>HI</h1>
				</Container>
			</main>
			<Footer />
		</div>
	);
};

export default App;
