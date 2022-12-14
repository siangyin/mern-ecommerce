import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import axios from "axios";
const App = () => {
	// axios.defaults.headers.common["Accept"] = "application/json";
	// axios.defaults.baseURL = "localhost:8000";
	return (
		<BrowserRouter>
			<Header />
			<main className="py-3">
				<Container>
					<Routes>
						<Route path="/" element={<HomeScreen />} />
						<Route path="/product/:id" element={<ProductScreen />} />
					</Routes>
				</Container>
			</main>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
