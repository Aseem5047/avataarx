import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Options from "./Options";
import "./menu.css";

const Menu = ({ toggleMenu, setToggleMenu, randomImage, downIcon, upIcon }) => {
	const [toggleMoreMenu, setToggleMoreMenu] = useState(false);
	const [menuItems, setMenuItems] = useState([]);

	useEffect(() => {
		// Update the menu items when the component mounts or when the window is resized
		updateMenuItems();
		window.addEventListener("resize", updateMenuItems);
		return () => {
			window.removeEventListener("resize", updateMenuItems);
		};
	}, [toggleMoreMenu]);

	const updateMenuItems = useCallback(() => {
		const windowWidth = window.innerWidth;
		if (windowWidth < 1024) {
			setMenuItems([
				{ label: "Authenticate", onClick: () => setToggleMenu(false) },
				{ label: "Manage", onClick: () => setToggleMenu(false) },
				{ label: "Help", onClick: () => setToggleMenu(false) },
				{ label: "Log Out", onClick: () => setToggleMenu(false) },
				{
					label: "More Options",
					onClick: () =>
						setToggleMoreMenu((prevToggleMoreMenu) => !prevToggleMoreMenu),
					icon: toggleMoreMenu ? upIcon : downIcon,
				},
				{ label: "Your Prime+", onClick: () => setToggleMenu(false) },
				{ label: "Features & Lists", onClick: () => setToggleMenu(false) },
				{ label: "Account & Profile", onClick: () => setToggleMenu(false) },
				{ label: "Address & Location", onClick: () => setToggleMenu(false) },
			]);
		} else if (windowWidth < 1256) {
			setMenuItems([
				{ label: "Authenticate", onClick: () => setToggleMenu(false) },
				{ label: "Manage", onClick: () => setToggleMenu(false) },
				{ label: "Help", onClick: () => setToggleMenu(false) },
				{ label: "Log Out", onClick: () => setToggleMenu(false) },
				{
					label: "More Options",
					onClick: () =>
						setToggleMoreMenu((prevToggleMoreMenu) => !prevToggleMoreMenu),
					icon: toggleMoreMenu ? upIcon : downIcon,
				},
				{ label: "Your Prime+", onClick: () => setToggleMenu(false) },
				{ label: "Account & Profile", onClick: () => setToggleMenu(false) },
				{ label: "Address & Location", onClick: () => setToggleMenu(false) },
			]);
		} else if (windowWidth < 1536) {
			setMenuItems([
				{ label: "Authenticate", onClick: () => setToggleMenu(false) },
				{ label: "Manage", onClick: () => setToggleMenu(false) },
				{ label: "Help", onClick: () => setToggleMenu(false) },
				{ label: "Log Out", onClick: () => setToggleMenu(false) },
				{
					label: "More Options",
					onClick: () =>
						setToggleMoreMenu((prevToggleMoreMenu) => !prevToggleMoreMenu),
					icon: toggleMoreMenu ? upIcon : downIcon,
				},
				{ label: "Address & Location", onClick: () => setToggleMenu(false) },
			]);
		} else {
			setMenuItems([
				{ label: "Authenticate", onClick: () => setToggleMenu(false) },
				{ label: "Manage", onClick: () => setToggleMenu(false) },
				{ label: "Help", onClick: () => setToggleMenu(false) },
				{ label: "Log Out", onClick: () => setToggleMenu(false) },
			]);
		}
	});

	const maxVisibleItems = 5; // Maximum number of items visible before moving to "More"
	const visibleItems = menuItems.slice(0, maxVisibleItems);
	const hiddenItems = menuItems.slice(maxVisibleItems);

	return (
		<div className="menuContainer">
			{/* when the menu is toggled */}
			{toggleMenu && (
				<Options
					randomImage={randomImage}
					setToggleMenu={setToggleMenu}
					visibleItems={visibleItems}
					hiddenItems={hiddenItems}
					toggleMoreMenu={toggleMoreMenu}
				/>
			)}

			{/* when the menu is not toggled */}

			{/* when enough width is available */}
			<div className="mainMenu">
				<div className="userInfoContainer">
					<Link to="/" className="userImageContainer">
						<img
							src={`/users/${randomImage}`}
							alt="profile"
							className="userImage"
						/>
					</Link>
					<div className="navLinkContainer">
						<Link to="/" className="hoverEffectText navLinkUpper">
							Hello Aseem
						</Link>
						<span className="navLinkLower hoverEffectText">
							Features & Lists
						</span>
					</div>
				</div>

				<div className="navLinkSubContainer">
					<Link
						to="/"
						className="navLinkContainer hoverEffectText"
						style={{ width: "max-content" }}
					>
						<span className="navLinkUpper">Account</span>
						<span className="navLinkLower w-max">& Profile</span>
					</Link>
					<Link to="/" className="navLinkContainer hoverEffectText">
						<span className="navLinkUpper">Your</span>
						<span className="navLinkLower">Prime+</span>
					</Link>
				</div>
			</div>

			{/* Profile and menu section */}

			<div
				className="moreMenu"
				onClick={() => {
					setToggleMenu(!toggleMenu);
					setToggleMoreMenu(false);
				}}
			>
				<span className="moreText">More</span>

				<>
					{!toggleMenu ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="moreMenuSvg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="moreMenuSvg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					)}
				</>

				<Link to="/" className="userImageContainer">
					<img
						src={`/users/${randomImage}`}
						alt="profile"
						className="userImageMoreMenu"
					/>
				</Link>
			</div>
		</div>
	);
};

export default Menu;
