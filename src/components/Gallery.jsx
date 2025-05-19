import { galleryImages } from "../utils/galleryData.js";

const Gallery = () => {
	return (
		<section>
			<h2 className="text-3xl md:text-4xl font-bold text-center py-6">Our Gallery</h2>
			<p className="w-1/2 max-md:w-[90%] text-center text-gray-700 mx-auto pb-10">
				Take a visual journey through our coffee shop and see what makes Tosta special.
			</p>
			<div className="grid grid-cols-1 min-[540px]:grid-cols-2 lg:grid-cols-3 gap-10">
				{galleryImages.map((img) => (
					<div key={img.id} className="rounded-xl overflow-hidden">
						<img src={`${img.src}`} alt={img.alt} loading="lazy" className="hover:scale-105 duration-300" />
					</div>
				))}
			</div>
		</section>
	);
};
export default Gallery;
