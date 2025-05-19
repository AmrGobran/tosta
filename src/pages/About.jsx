import { GiCoffeeBeans } from "react-icons/gi";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import ScrollToTop from "../components/ui/ScrollToTop.jsx";
import { FaUsers } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";

const About = () => {
	return (
		<div className="page">
			<ScrollToTop />
			<Header />
			<main className="container flex-1">
				<PageHero
					title="Our Story"
					description="Discover the passion and dedication behind Tosta Coffee Shop"
					imageSRC="about"
				/>

				{/* story */}
				<section className="">
					<h2 className="text-3xl md:text-4xl font-bold text-center pb-6">How It All Started</h2>
					<p className="w-1/2 max-md:w-[90%] text-gray-700 mx-auto pb-6">
						Founded in 2015, <span className="italic font-bold">Tosta</span> began as a small dream shared by two
						friends with a passion for exceptional coffee. What started as a tiny corner shop has grown into a beloved
						community gathering place, while maintaining the same dedication to quality and service.
					</p>
					<p className="w-1/2 max-md:w-[90%] text-gray-700 mx-auto pb-6">
						Our name, "<span className="italic font-bold">Tosta</span>," comes from the Italian phrase "
						<span className="italic font-bold">ben tostato</span>" meaning "well-roasted" &ndash; reflecting our
						commitment to perfectly roasted coffee beans that bring out complex flavors and aromas in every cup.
					</p>
					<p className="w-1/2 max-md:w-[90%] text-gray-700 mx-auto">
						Today, we continue to source the finest beans from sustainable farms around the world, roast them in small
						batches, and serve them with care and attention to detail. Every cup of coffee at Tosta tells a story
						&ndash; of the farmers who grew the beans, the roasters who developed the flavors, and the baristas who
						craft each drink.
					</p>
				</section>

				{/* Philosophy */}
				<section className="grid grid-cols-1 md:grid-cols-2 gap-8 !pt-0">
					<div className="rounded overflow-hidden">
						<img src="../tosta/images/hero.jpg" alt="Coffee" loading="lazy" />
					</div>
					<div className="flex flex-col justify-center">
						<h2 className="text-2xl md:text-3xl font-bold py-6">Our Coffee Philosophy</h2>
						<p className="mb-4">
							At Tosta, we believe that coffee is more than just a beverage &ndash; it's an experience. We're committed
							to serving coffee that's ethically sourced, expertly roasted, and skillfully prepared.
						</p>
						<p className="">
							Our roasting process is carefully calibrated to highlight the unique characteristics of each bean variety,
							creating complex flavor profiles that showcase the best of what coffee has to offer.
						</p>
					</div>
				</section>

				{/* values */}
				<section>
					<h2 className="text-3xl md:text-4xl font-bold text-center pb-6">Our Values</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="value-card">
							<GiCoffeeBeans className="value-card__icon" />
							<h3 className="value-card__title">Quality</h3>
							<p>
								We never compromise on the quality of our ingredients or the care we put into preparing each drink and
								dish.
							</p>
						</div>
						<div className="value-card">
							<FaUsers className="value-card__icon" />
							<h3 className="value-card__title">Community</h3>
							<p>We strive to create a welcoming space where everyone feels at home and connections are fostered.</p>
						</div>
						<div className="value-card">
							<IoTimeOutline className="value-card__icon" />
							<h3 className="value-card__title">Sustainability</h3>
							<p>
								We commit to environmentally responsible practices and support the well-being of coffee farmers and
								their communities.
							</p>
						</div>
					</div>
				</section>

				{/* team */}
				<section>
					<h2 className="text-3xl md:text-4xl font-bold text-center pb-8">Meet Our Team</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="flex flex-col items-center text-center text-gray-700">
							<div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden mb-5">
								<img src="../tosta/images/team/team-1.jpg" alt="Alex Chen" loading="lazy" />
							</div>
							<h3 className="text-xl font-bold text-black">Alex Chen</h3>
							<h4 className="text-amber-800 mb-4">Founder & Head Roaster</h4>
							<p className="max-sm:max-w-70 mx-auto">
								With 15 years of experience in specialty coffee, Alex brings passion and precision to every roast.
							</p>
						</div>
						<div className="flex flex-col items-center text-center text-gray-700">
							<div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden mb-5">
								<img src="../tosta/images/team/team-2.jpg" alt="Maya Wilson" loading="lazy" />
							</div>
							<h3 className="text-xl font-bold text-black">Maya Wilson</h3>
							<h4 className="text-amber-800 mb-4">Co-founder & Executive Chef</h4>
							<p className="max-sm:max-w-70 mx-auto">
								Maya creates all our delicious pastries and food items, perfectly paired with our coffee offerings.
							</p>
						</div>
						<div className="flex flex-col items-center text-center text-gray-700">
							<div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden mb-5">
								<img src="../tosta/images/team/team-3.jpg" alt="Daniel Lee" loading="lazy" />
							</div>
							<h3 className="text-xl font-bold text-black">Daniel Lee</h3>
							<h4 className="text-amber-800 mb-4">Head Barista</h4>
							<p className="max-sm:max-w-70 mx-auto">
								A champion latte artist, Daniel trains our barista team to ensure consistent quality in every cup.
							</p>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
};
export default About;
