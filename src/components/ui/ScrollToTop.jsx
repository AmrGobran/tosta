import { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			setIsVisible(window.scrollY > 200);
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		isVisible && (
			<button
				onClick={scrollToTop}
				className="btn fixed text-xl bottom-4 right-4 lg:bottom-7 lg:right-7 lg:text-2xl p-3 !rounded-full z-50"
				aria-label="Scroll to top"
			>
				<MdOutlineKeyboardDoubleArrowUp />
			</button>
		)
	);
};
export default ScrollToTop;
