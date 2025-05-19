import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<div>
			<div className="relative min-h-[600px] flex items-center bg-black text-white mt-16 px-4 sm:px-8 md:px-12">
				{/* <!-- Background image --> */}
				<div className="absolute inset-0">
					<img src="/images/hero.jpg" alt="Tosta coffee shop" />
					{/* <!-- Gradient overlay --> */}
					<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
				</div>

				{/* <!-- Content --> */}
				<div className="relative z-10 max-w-2xl w-full text-center md:text-left md:ml-0 lg:ml-12">
					<h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-tight">Tosta</h1>
					<p className="mt-4 mb-8 text-base sm:text-lg text-white">Simple coffee. Honest flavors. Cozy moments.</p>
					<div className="pt-8 flex items-center gap-4 justify-center md:justify-start flex-wrap">
						<Link to="/tosta/#contact" className="px-4 py-2 rounded-md btn font-semibold">
							Get in Touch
						</Link>
						<Link to="/tosta/menu" className="px-4 py-2 rounded-md white-btn font-semibold">
							View Menu
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Hero;
