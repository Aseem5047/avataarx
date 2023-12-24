import React from "react";
import "./navigation.scss";

const NavigationButtons = ({ direction, onClick }) => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className={`${
					direction === "normalLeft" || direction === "normalRight"
						? `${direction} `
						: direction
				}`}
				onClick={onClick}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d={
						direction === "left" || direction === "normalLeft"
							? "M15.75 19.5L8.25 12l7.5-7.5"
							: "M8.25 4.5l7.5 7.5-7.5 7.5"
					}
				/>
			</svg>
		</>
	);
};

export default NavigationButtons;
