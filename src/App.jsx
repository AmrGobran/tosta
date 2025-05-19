import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, lazy } from "react";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Menu = lazy(() => import("./pages/Menu.jsx"));
const Locations = lazy(() => import("./pages/Locations.jsx"));

const ScrollToHash = () => {
	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			const element = document.getElementById(location.hash.substring(1));
			setTimeout(() => {
				element?.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}, 100);
		}
	}, [location]);

	return null;
};

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<ScrollToHash />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="/locations" element={<Locations />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};
export default App;
