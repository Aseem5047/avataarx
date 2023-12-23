export const GetMenuItems = (
	windowWidth,
	setToggleMenu,
	toggleMoreMenu,
	setToggleMoreMenu,
	upIcon,
	downIcon
) => {
	if (windowWidth < 1024) {
		return [
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
			{ label: "Features & Lists", onClick: () => setToggleMenu(false) },
			{ label: "Address & Location", onClick: () => setToggleMenu(false) },
		];
	} else if (windowWidth < 1256) {
		return [
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
		];
	} else if (windowWidth < 1536) {
		return [
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
		];
	} else {
		return [
			{ label: "Authenticate", onClick: () => setToggleMenu(false) },
			{ label: "Manage", onClick: () => setToggleMenu(false) },
			{ label: "Help", onClick: () => setToggleMenu(false) },
			{ label: "Log Out", onClick: () => setToggleMenu(false) },
		];
	}
};
