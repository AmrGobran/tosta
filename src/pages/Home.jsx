import ContactForm from "../components/ContactForm.jsx";
import Footer from "../components/Footer.jsx";
import Gallery from "../components/Gallery.jsx";
import Hero from "../components/Hero.jsx";
import MenuPreview from "../components/MenuPreview.jsx";
import Header from "../components/Header.jsx";
import ReviewsSection from "../components/ReviewsSection.jsx";
import ScrollToTop from "../components/ui/ScrollToTop.jsx";
import Newsletter from "../components/NewsLetter.jsx";

const Home = () => {
	return (
		<>
			<div className="container">
				<ScrollToTop />
				<Header />
				<main>
					<Hero />
					<MenuPreview />
					<ReviewsSection />
					<Gallery />
					<ContactForm />
					<Newsletter />
				</main>
			</div>
			<Footer />
		</>
	);
};
export default Home;
