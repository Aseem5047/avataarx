import React from "react";

const NavigationDots = ({
	images,
	currentIndex,
	setCurrentIndex,
	getImageIndex,
	activeDotRef,
}) => {
	return (
		<div className="navigationDotsContainer no-scrollbar">
			{images.map((_, index) => (
				<button
					key={index}
					ref={index === currentIndex ? activeDotRef : null}
					className={`navigationDot ${
						index === currentIndex ? "bgPrimary " : "bgSecondary "
					}`}
					onClick={() => setCurrentIndex(getImageIndex(index))}
				/>
			))}
		</div>
	);
};

export default NavigationDots;
