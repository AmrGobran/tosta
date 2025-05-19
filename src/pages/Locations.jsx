import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import ScrollToTop from "../components/ui/ScrollToTop.jsx";
import { locations } from "../utils/locationsData.js";
import { IoTime } from "react-icons/io5";

const Locations = () => {
	return (
		<div className="page">
			<ScrollToTop />
			<Header />
			<main className="container flex-1">
				<PageHero title="Our Locations" description="Find a Tosta Coffee Shop near you." imageSRC="locations" />
				<section className="space-y-16">
					{locations.map((location) => (
						<div key={location.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
							<div className="order-2 lg:order-1">
								<div className="p-6 shadow-md rounded-lg">
									<h2 className="text-2xl font-bold mb-6">{location.name}</h2>

									<ul className="flex flex-col gap-2 *:flex *:items-center *:gap-2 mb-6">
										<li>
											<FaMapMarkerAlt className="text-amber-800" size={18} />
											<p>{location.address}</p>
										</li>
										<li>
											<FaPhoneAlt className="text-amber-800" size={18} />
											<p>{location.phone}</p>
										</li>
										<li className="!items-start">
											<IoTime className="text-amber-800" size={18} />
											<div>
												{location.hours.map((hour, i) => (
													<p key={i}>{hour}</p>
												))}
											</div>
										</li>
									</ul>

									<div className="aspect-video w-full rounded-lg overflow-hidden">
										<iframe
											src={`${location.mapUrl}`}
											style={{ border: "none" }}
											width="100%"
											height="100%"
											allowFullScreen={false}
											loading="lazy"
											referrerPolicy="no-referrer-when-downgrade"
											title={`Map showing ${location.name}`}
										></iframe>
									</div>
								</div>
							</div>

							<div className="order-1 lg:order-2 rounded-lg overflow-hidden">
								<img src={`${location.image}`} alt={`${location.name}`} loading="lazy" />
							</div>
						</div>
					))}
				</section>
			</main>
			<Footer />
		</div>
	);
};
export default Locations;
