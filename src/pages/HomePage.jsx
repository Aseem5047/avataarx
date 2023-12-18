import React, { useEffect, useState } from "react";

import Slider from "../components/slider/Slider";
import { bannerImages } from "../constants/SliderData";

import "./pages.css";

const HomePage = () => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);
	return (
		<div className="homeContainer">
			<Slider images={bannerImages} loading={loading} />
		</div>
	);
};

export default HomePage;
