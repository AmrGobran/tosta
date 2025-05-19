import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import ScrollToTop from "../components/ui/ScrollToTop.jsx";
import { menu } from "../utils/menuData.js";

const Menu = () => {
	return (
		<div className="page">
			<ScrollToTop />
			<Header />
			<main className="container flex-1">
				<PageHero title="Our Menu" description="Discover our delicious offerings, made fresh daily." imageSRC="menu" />
				<div className="grid grid-cols-1 min-[540px]:grid-cols-2 lg:grid-cols-4 gap-8 pt-30 px-8 mb-15">
					{menu.map((item) => (
						<div key={item.id} className="flex flex-col rounded-xl shadow-lg overflow-hidden">
							<div className="w-full h-50 aspect-3/2">
								<img src={`${item.img}`} alt={item.name} loading="lazy" />
							</div>
							<div className="p-4 flex-1 flex flex-col *:not-first:mt-4">
								<div className="flex items-center justify-between font-semibold">
									<span>{item.name}</span>
									<span className="text-amber-800">{item.price}</span>
								</div>
								<div className="flex-1">
									<p className="text-sm text-gray-700">{item.description}</p>
								</div>
								<div>
									<span className="text-sm text-amber-700 bg-orange-100 py-1 px-2 rounded-xl">{item.category}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</main>
			<Footer />
		</div>
	);
};
export default Menu;
