const InitialLoading = ({ image }) => {
	return (
		<div className="custom-loading-screen">
			<img src={image} alt="" className="custom-loading-image" />
		</div>
	);
};

export default InitialLoading;
