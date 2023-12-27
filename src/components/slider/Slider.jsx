import React, { useState, useEffect, useRef } from "react";
import NavigationDots from "./navigation/NavigationDots";
import NavigationButtons from "./navigation/NavigationButtons";
import Loader from "../shared/Loader";
import "./slider.scss";
import GetSlideState from "../../utils/GetSlideState";

const Slider = ({ images, loading }) => {
	// State to track the current index of the active slide
	const [currentIndex, setCurrentIndex] = useState(0);

	// State to track whether the image is still loading or not
	const [imagesLoaded, setImagesLoaded] = useState(false);

	// State and refs for handling drag interactions
	const [startX, setStartX] = useState(null);
	const [dragging, setDragging] = useState(false);
	const activeDotRef = useRef();

	// Calculate the last index in the images array
	const lastIndex = images.length - 1;

	// Ensure currentIndex stays within bounds when images change
	useEffect(() => {
		setCurrentIndex((prev) =>
			prev < 0 ? lastIndex : prev > lastIndex ? 0 : prev
		);
	}, [images, currentIndex]);

	// Auto-advance the slider every 5000 milliseconds (5 seconds)
	useEffect(() => {
		const slider = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1 > lastIndex ? 0 : prev + 1));
		}, 5000);

		return () => clearInterval(slider);
	}, [currentIndex, lastIndex]);

	// Helper function to ensure the index is within bounds
	const getImageIndex = (index) =>
		index < 0 ? lastIndex : index > lastIndex ? 0 : index;

	// Determine the state of each slide based on its position relative to the current index
	const getSlideState = (adjustedIndex) => {
		return GetSlideState(adjustedIndex, currentIndex, lastIndex);
	};

	// Reusable function for mouse and touch interactions
	const handleInteractionStart = (e, type) => {
		const clientX = type === "mouse" ? e.clientX : e.touches[0].clientX;
		setStartX(clientX);
		setDragging(true);
	};

	const handleInteractionMove = (e, type) => {
		if (startX !== null && dragging) {
			const clientX = type === "mouse" ? e.clientX : e.touches[0].clientX;
			const deltaX = clientX - startX;
			if (Math.abs(deltaX) > 50) {
				const direction = deltaX > 0 ? -1 : 1;
				setCurrentIndex((prevIndex) => getImageIndex(prevIndex + direction));
				setStartX(null);
				setDragging(false);
			}
		}
	};

	const handleInteractionEnd = () => {
		if (dragging) {
			setStartX(null);
			setDragging(false);
		}
	};

	// Event handlers for mouse interactions
	const handleMouseDown = (e) => handleInteractionStart(e, "mouse");
	const handleMouseMove = (e) => handleInteractionMove(e, "mouse");
	const handleMouseUp = () => handleInteractionEnd();

	// Event handlers for touch interactions
	const handleTouchStart = (e) => handleInteractionStart(e, "touch");
	const handleTouchMove = (e) => handleInteractionMove(e, "touch");
	const handleTouchEnd = () => handleInteractionEnd();
	// ...

	// Logic to scroll to the currently active banner dot

	useEffect(() => {
		if (activeDotRef.current) {
			activeDotRef.current.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "center",
			});
		}
	}, [currentIndex, activeDotRef]);

	// ...

	// reset the image loaded state
	const resetImageState = () => {
		setImagesLoaded(false); // Reset imagesLoaded state
	};

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className="sliderContainer">
					{/* Main Slider */}
					<div
						className={`imageSlider ${
							(currentIndex === 0 || currentIndex === lastIndex) &&
							"imageSliderReverse"
						} `}
						onMouseDown={handleMouseDown}
						onMouseMove={handleMouseMove}
						onMouseUp={handleMouseUp}
						onMouseLeave={handleMouseUp}
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
						onTouchEnd={handleTouchEnd}
					>
						{images &&
							images.map((image, currentImageIndex) => {
								let adjustedIndex = getImageIndex(currentImageIndex);
								const slideState = getSlideState(adjustedIndex);

								return (
									<article
										key={image + adjustedIndex}
										className={` ${slideState}`}
									>
										<img
											src={image}
											alt=""
											className={`sliderImage ${
												imagesLoaded ? "imageLoaded" : "imageNotLoaded"
											}`}
											onClick={() => setCurrentIndex(currentImageIndex)}
											onDragStart={(e) => e.preventDefault()}
											onLoad={() => {
												resetImageState();
												setImagesLoaded(true);
											}}
										/>
									</article>
								);
							})}

						{/* Banner navigation buttons */}
						<NavigationButtons
							direction="left"
							onClick={() => setCurrentIndex(getImageIndex(currentIndex - 1))}
						/>
						<NavigationButtons
							direction="right"
							onClick={() => setCurrentIndex(getImageIndex(currentIndex + 1))}
						/>
					</div>

					{/* Navigation Dots */}

					<div className="navigationParentContainer ">
						<NavigationButtons
							direction="normalLeft"
							onClick={() => setCurrentIndex(getImageIndex(currentIndex - 1))}
						/>
						{/* Navigation Dots Buttons */}
						<NavigationDots
							images={images}
							currentIndex={currentIndex}
							setCurrentIndex={setCurrentIndex}
							getImageIndex={getImageIndex}
							activeDotRef={activeDotRef}
						/>
						<NavigationButtons
							direction="normalRight"
							onClick={() => setCurrentIndex(getImageIndex(currentIndex + 1))}
						/>{" "}
					</div>
				</div>
			)}
		</>
	);
};

export default Slider;
