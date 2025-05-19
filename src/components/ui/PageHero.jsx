const PageHero = ({ title, description, imageSRC }) => {
	return (
		<section className="hero container h-[50vh] min-h-100 flex items-center justify-center">
			<div className="absolute inset-0 -z-50">
				<img src={`../tosta/images/${imageSRC}.jpg`} alt="Tosta coffee shop" />
				{/* <!-- Gradient overlay --> */}
				<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
			</div>
			<div className="text-center text-white">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</section>
	);
};
export default PageHero;
