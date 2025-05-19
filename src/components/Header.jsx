import { useState } from "react";
import { CgClose, CgMenuRightAlt } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header>
			<nav className="w-full min-h-16 fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						{/* <!-- Logo --> */}
						<div className="flex-shrink-0 text-amber-900 font-bold text-3xl">
							<Link to="/">Tosta</Link>
						</div>

						{/* <!-- Desktop Menu --> */}
						<div className="hidden md:flex space-x-8 text-amber-900 font-semibold">
							<Link to="/" className="nav-link">
								Home
							</Link>
							<Link to="/about" className="nav-link">
								About Us
							</Link>
							<Link to="/menu" className="nav-link">
								Menu
							</Link>
							<Link to="/locations" className="nav-link">
								Locations
							</Link>
						</div>

						{/* <!-- Call to Action --> */}
						<div className="hidden md:block">
							<Link to="/#contact" className="px-4 py-2 rounded-md btn font-semibold">
								Get in Touch
							</Link>
						</div>

						{/* <!-- Mobile Menu Button --> */}
						<div className="md:hidden flex items-center">
							<button
								id="menu-toggle"
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="text-amber-900 focus:outline-none cursor-pointer"
								aria-label="Toggle nav links"
							>
								{isMenuOpen ? <CgClose className="text-2xl" /> : <CgMenuRightAlt className="text-2xl" />}
							</button>
						</div>
					</div>
				</div>

				{/* <!-- Mobile Menu --> */}
				{isMenuOpen && (
					<div id="mobile-menu" className="md:hidden px-4 pb-4">
						<Link to="/" className="mobile-nav-link">
							Home
						</Link>
						<Link to="/about" className="mobile-nav-link">
							About Us
						</Link>
						<Link to="/menu" className="mobile-nav-link">
							Menu
						</Link>
						<Link to="/locations" className="mobile-nav-link">
							Locations
						</Link>
						<Link
							to="/#contact"
							onClick={() => setIsMenuOpen(false)}
							className="btn mt-2 px-4 py-2 font-semibold text-center"
						>
							Get in Touch
						</Link>
					</div>
				)}
			</nav>
		</header>
	);
};
export default Header;
