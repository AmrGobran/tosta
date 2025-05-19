import { Link } from "react-router-dom";
import { menu } from "../utils/menuData.js";

const MenuPreview = () => {
	const previewArr = [];
	for (let i = 0; i < 4; i++) {
		previewArr.push(menu[i]);
	}

	return (
		<section>
			<h2 className="text-3xl md:text-4xl font-bold text-center py-6">Our Popular Menu</h2>
			<p className="w-1/2 max-md:w-[90%] text-center text-gray-700 mx-auto pb-10">
				Indulge in our carefully crafted selection of beverages and treats, made with the finest ingredients.
			</p>
			<div className="grid grid-cols-1 min-[540px]:grid-cols-2 lg:grid-cols-4 gap-8 mb-15">
				{previewArr.map((item) => (
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
								<span className="text-sm text-amber-700 border-1 border-amber-700 py-1 px-2 rounded-xl">
									{item.category}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
			<Link to="/tosta/menu" className="btn w-fit py-2 px-3 text-sm mx-auto font-semibold">
				See Full Menu
			</Link>
		</section>
	);
};
export default MenuPreview;
