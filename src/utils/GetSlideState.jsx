const GetSlideState = (adjustedIndex, currentIndex, lastIndex) => {
	// logic to determine the visible slide
	if (adjustedIndex === currentIndex) return "visible";

	// logic to determine previous slides
	if (adjustedIndex === currentIndex - 1) return "previous";
	if (adjustedIndex === currentIndex - 2 && currentIndex !== lastIndex)
		return "prevPrevious";

	// logic to determine next slides
	if (adjustedIndex === currentIndex + 1) return "next";
	if (adjustedIndex === currentIndex + 2 && currentIndex !== 0)
		return "nextNext";

	// logic to determine first and last slides
	if (currentIndex === lastIndex && adjustedIndex === 0) return "firstSlide";
	if (currentIndex === 0 && adjustedIndex === lastIndex) return "lastSlide";

	// special cases
	if (adjustedIndex === currentIndex - 2 && currentIndex === lastIndex)
		return "prevPrevious hiddenPrevious";

	if (adjustedIndex === currentIndex + 2 && currentIndex === 0)
		return "nextNext hiddenNext";

	return "hidden";
};

export default GetSlideState;
