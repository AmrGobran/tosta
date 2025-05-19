import { useEffect, useState } from "react";
import { IoIosWarning } from "react-icons/io";

const ContactForm = () => {
	const initialValues = { name: "", email: "", subject: "", message: "" };

	const [formData, setFormData] = useState(initialValues);
	const [errors, setErrors] = useState({});

	const handleChange = (name, value) => {
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const validate = () => {
		const newErrors = {};

		const nameRegex = /^(?!.*\s{2})[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,50}$/;
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const subjectRegex = /^[\w\s.,!?()-]{1,60}$/;
		const textareaRegex = /^[\s\S]{10,2000}$/;

		const validName = nameRegex.test(formData.name.trim());
		const validEmail = emailRegex.test(formData.email.trim());
		const validSubject = subjectRegex.test(formData.subject.trim());
		const validMessage = textareaRegex.test(formData.message.trim());

		if (!formData.name) newErrors.name = "Name is required";
		if (!validName) newErrors.name = "Name: 2-50 letters, spaces, - or '";
		if (!formData.email) newErrors.email = "Email is required";
		if (!validEmail) newErrors.email = "(e.g., user@example.com)";
		if (!formData.subject || !validSubject) newErrors.subject = "Subject must be 1-60 characters.";
		if (!formData.message || !validMessage) newErrors.message = "Message must be 10-2000 characters.";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validate()) return;
		setFormData(initialValues);
		setErrors({});
		e.target.submit();
	};

	return (
		<section id="contact">
			<h2 className="text-3xl md:text-4xl font-bold text-center py-6">Contact Us</h2>
			<p className="w-1/2 max-md:w-[90%] text-center text-gray-700 mx-auto pb-10">
				Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as
				soon as possible.
			</p>
			<form
				action="https://formsubmit.co/f711eb3024e1117096051721d053c2cf"
				method="POST"
				onSubmit={handleSubmit}
				className="p-8 max-sm:w-full md:w-[70%] xl:w-1/2 mx-auto flex flex-col gap-6 rounded-xl shadow-xl"
			>
				{/* formsubmit input fields */}
				<input type="hidden" name="_subject" value="New Contact Message from Tosta" />
				<input type="hidden" name="_captcha" value="false" />
				<input type="text" name="_honey" style={{ display: "none" }} aria-hidden="true" />

				{/* input fields & button */}
				<div className="max-sm:flex-col flex *:flex *:flex-col *:flex-1 gap-4 max-sm:gap-6">
					<div className="relative">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Your name"
							value={formData.name}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							className={`${errors.name ? "error" : ""}`}
						/>
						{errors.name && (
							<span className="error">
								<IoIosWarning className="text-sm" /> {errors.name}
							</span>
						)}
					</div>

					<div className="relative">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="your.email@example.com"
							value={formData.email}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							className={`${errors.email ? "error" : ""}`}
						/>
						{errors.email && (
							<span className="error">
								<IoIosWarning className="text-sm" /> {errors.email}
							</span>
						)}
					</div>
				</div>

				<div className="relative flex flex-col">
					<label htmlFor="subject">Subject</label>
					<input
						type="text"
						name="subject"
						id="subject"
						placeholder="How can we help you?"
						value={formData.subject}
						onChange={(e) => handleChange(e.target.name, e.target.value)}
						className={`${errors.subject ? "error" : ""}`}
					/>
					{errors.subject && (
						<span className={`${"error"}`}>
							<IoIosWarning className="text-sm" /> {errors.subject}
						</span>
					)}
				</div>

				<div className="relative flex flex-col">
					<label htmlFor="message">Message</label>
					<textarea
						name="message"
						id="message"
						rows={8}
						placeholder="Your message here..."
						value={formData.message}
						onChange={(e) => handleChange(e.target.name, e.target.value)}
						className={`${errors.message ? "error" : ""}`}
					></textarea>
					{errors.message && (
						<span className="error">
							<IoIosWarning className="text-sm" /> {errors.message}
						</span>
					)}
				</div>

				<button type="submit" className="btn py-2 mt-3">
					Submit
				</button>
			</form>
		</section>
	);
};
export default ContactForm;
