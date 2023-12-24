import React from "react";
import { Link } from "react-router-dom";
import "./menu.scss";

const Options = ({
	randomImage,
	setToggleMenu,
	visibleItems,
	hiddenItems,
	toggleMoreMenu,
}) => {
	return (
		<>
			<ul className="menuOptions" onMouseLeave={() => setToggleMenu(false)}>
				<li className="userInfoContainer" style={{ marginBottom: "1rem" }}>
					<Link to="/" className="userImageContainer">
						<img
							src={`/users/${randomImage}`}
							alt="profile"
							className="userImage"
						/>
					</Link>
					<div className="navLinkContainer">
						<Link
							to="/"
							className="hoverEffectText navLinkUpper"
							style={{ fontSize: "14px" }}
						>
							Hello Aseem
						</Link>
						<span
							className="navLinkLower"
							style={{ fontWeight: "100", fontSize: "12px" }}
						>
							@aseem5047
						</span>
					</div>
				</li>
				{/* Render visible items */}
				{visibleItems.map((item, index) => (
					<Link
						to="/"
						key={index}
						onClick={item.onClick}
						className={`menuItems ${item.icon && "customMenuItems"}`}
					>
						{item.label}
						{item.icon && item.icon}
					</Link>
				))}

				{/* Render "More" section */}

				{toggleMoreMenu &&
					hiddenItems.map((item, index) => (
						<Link
							to="/"
							key={index}
							onClick={item.onClick}
							className="menuItems"
						>
							{item.label}
						</Link>
					))}
			</ul>
		</>
	);
};

export default Options;
