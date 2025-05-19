import { useState } from "react";

// Newsletter.jsx
const Newsletter = () => {
	return (
		<section id="newsletter">
			<div className="max-w-xl mx-auto flex flex-col gap-4">
				<div className="">
					<h2 className="text-3xl md:text-4xl font-bold text-center py-6">Stay Caffeinated</h2>
					<p className="max-md:w-[90%] text-center text-gray-700 mx-auto pb-10">
						Subscribe for updates, offers & fresh brews — right to your inbox.
					</p>
				</div>

				<form
					action="https://formsubmit.co/f711eb3024e1117096051721d053c2cf"
					method="POST"
					className="flex flex-row gap-3 items-center justify-center"
				>
					{/* formsubmit input fields */}
					<input type="hidden" name="_subject" value="New Newsletter Signup!" />
					<input type="hidden" name="_captcha" value="false" />
					<input type="text" name="_honey" style={{ display: "none" }} aria-hidden="true" />

					{/* Input & Button */}
					<input
						type="email"
						name="email"
						required
						placeholder="Your email address"
						className="w-full sm:shrink px-4 py-2 rounded-lg border border-amber-300 focus:outline-none"
					/>
					<button type="submit" className="btn px-6 py-2 max-sm:text-sm">
						Subscribe
					</button>
				</form>
			</div>
		</section>
	);
};

export default Newsletter;
