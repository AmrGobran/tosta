import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-slate-900 text-gray-400 pt-14 pb-8 px-8">
			<div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
				<div>
					<h3 className="!text-2xl">Tosta</h3>
					<p>Serving warmth, community, and rich coffee — one cup at a time.</p>
					<div className="flex *:text-2xl gap-3 *:duration-300 mt-10">
						<Link to="/tosta" aria-label="Facebook link" className="hover:text-blue-500">
							<FaFacebook />
						</Link>
						<Link to="/tosta" aria-label="X/Twitter link" className="hover:text-white">
							<FaXTwitter />
						</Link>
						<Link to="/tosta" aria-label="Instagram link" className="hover:text-fuchsia-500">
							<FaInstagram />
						</Link>
						<Link
							to="https://github.com/AmrGobran"
							aria-label="Github link"
							target="_blank"
							className="hover:text-white"
						>
							<FaGithub />
						</Link>
					</div>
				</div>

				<div>
					<h3 className="footer-heading">Links</h3>
					<ul className="*:hover:text-white *:duration-300">
						<li>
							<Link to="/tosta">Home</Link>
						</li>
						<li>
							<Link to="/tosta/about">About Us</Link>
						</li>
						<li>
							<Link to="/tosta/menu">Menu</Link>
						</li>
						<li>
							<Link to="/tosta/locations">Locations</Link>
						</li>
						<li>
							<Link to="/#contact">Get in Touch</Link>
						</li>
					</ul>
				</div>

				<div>
					<h3>Hours</h3>
					<ul className="flex flex-col gap-2">
						<li>Monday - Friday: 7am - 7pm</li>
						<li>Saturday: 8am - 8pm</li>
						<li>Sunday: 8am - 6pm</li>
					</ul>
				</div>

				<div>
					<h3>Contact Info</h3>
					<ul className="flex flex-col gap-2 *:flex *:items-center *:gap-2">
						<li>
							<FaMapMarkerAlt className="text-white" />
							<p>123 Coffee Street, Brewtown</p>
						</li>
						<li>
							<FaPhoneAlt className="text-white" />
							<p>(123) 456-7890</p>
						</li>
						<li>
							<FaEnvelope className="text-white" />
							<p>hello@tostacoffee.com</p>
						</li>
					</ul>
				</div>
			</div>

			<div className="border-t border-gray-800 mt-12 pt-8 text-center">
				<p className="mb-2 text-sm">
					made with ☕ by{" "}
					<a
						href="https://github.com/AmrGobran"
						target="_blank"
						className="font-semibold text-white underline cursor-pointer"
					>
						AmrGobran
					</a>
				</p>
				<p>© {new Date().getFullYear()} Tosta Coffee Shop. All rights reserved.</p>
			</div>
		</footer>
	);
};
export default Footer;
