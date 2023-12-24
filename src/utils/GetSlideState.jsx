const GetSlideState = (adjustedIndex, currentIndex, lastIndex) => {
	if (adjustedIndex === currentIndex) return "visible";
	if (adjustedIndex === currentIndex - 1) return "previous";
	if (adjustedIndex === currentIndex - 2) return "prevPrevious";
	if (currentIndex === lastIndex && adjustedIndex === 0) return "firstSlide";
	if (adjustedIndex === currentIndex + 1) return "next";
	if (adjustedIndex === currentIndex + 2 && currentIndex !== 0)
		return "nextNext";
	if (adjustedIndex === currentIndex + 2 && currentIndex === 0)
		return "nextNext hiddenNext";
	if (currentIndex === 0 && adjustedIndex === lastIndex) return "lastSlide";
	return "hidden";
};

export default GetSlideState;
