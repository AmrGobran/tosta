import { FaStar } from "react-icons/fa";
import { reviews } from "../utils/reviewsData.js";

const ReviewsSection = () => {
	const stars = (rating) => {
		const ratingStars = Array.from({ length: rating });
		return (
			<div className="flex items-center gap-1 text-yellow-400">
				{ratingStars.map((_, i) => (
					<FaStar key={i} />
				))}
			</div>
		);
	};

	return (
		<section>
			<h2 className="text-3xl md:text-4xl font-bold text-center py-6">What Our Customers Say</h2>
			<p className="w-1/2 max-md:w-[90%] text-center text-gray-700 mx-auto pb-10">
				We value every customer's experience and strive to make every visit special.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{reviews.map((review) => (
					<div
						key={review.id}
						className="py-6 px-10 flex flex-col items-start *:not-last:mb-3 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
					>
						<div>{stars(review.rating)}</div>
						<div className="flex-1">
							<p className="italic ">"{review.text}"</p>
						</div>
						<div className="flex items-center gap-3">
							<div className="w-10 h-10">
								<img src={`${review.image}`} alt={`${review.author}`} loading="lazy" className="rounded-full" />
							</div>
							<p className="font-semibold text-gray-800">{review.author}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
export default ReviewsSection;
