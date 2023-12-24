import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Search = () => {
	return (
		<div className="mainSearchContainer">
			{/* Navigation links */}
			<div className="navLinksContainer">
				<Link to="/" className="navbarText">
					People
				</Link>
				<span>|</span>
				<Link to="/" className="navbarText">
					Profile
				</Link>
				<span>|</span>
				<Link to="/" className="navbarText">
					Connect
				</Link>
				<span>|</span>

				<button className="navbarSearchButton">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="3"
						stroke="currentColor"
						className="searchSvg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Search;
