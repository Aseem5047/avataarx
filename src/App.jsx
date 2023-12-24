import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/Navbar";
import InitialLoading from "./components/shared/InitialLoading";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<>
			{loading ? (
				<InitialLoading
					image={
						"https://cdn.dribbble.com/users/1813781/screenshots/5597337/dribbble-girl-with-clock.gif"
					}
				/>
			) : (
				<div className="appContainer">
					{/* Navbar component for navigation */}
					<Navbar />

					{/* Main content container with padding and margin settings */}
					<div className="mainContainer">
						{/* routes for the application */}
						<Routes>
							{/* Default route for the home page. */}
							<Route index element={<HomePage />} />
						</Routes>
					</div>
				</div>
			)}
		</>
	);
}

export default App;
