import React, { useRef } from "react";
import emailjs from "emailjs-com";
function EmailEnquiryForm() {
	const form = useRef();

	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm("service_id9ogc7", "template_26rwssb", e.target, "user_GtLk7sR3mG6Ejeim2XCWD")
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		e.target.reset()
	}
	return (
		<div>
			<div className='enquiry-form-div'>
				<form ref={form} onSubmit={(e)=>sendEmail(e)}>
					<div className='contact-form-text-div'>
						<p className='archivo-normal-contact-us-pearl-4rem-900'>
							Contact Us
						</p>
					</div>
					<input
						placeholder='Name'
						name='name'
						className='enquiry-input-box archivo-normal-black-pearl-2rem'
					></input>
					<input
						placeholder='Email'
						name='email'
						className='enquiry-input-box archivo-normal-black-pearl-2rem'
					></input>
					<input
						placeholder='Subject'
						name='subject'
						className='enquiry-input-box archivo-normal-black-pearl-2rem'
					></input>
					<textarea
						placeholder='Message'
						name='message'
						className='enquiry-textarea-box archivo-normal-black-pearl-2rem'
					></textarea>
					<div className='contact-form-button-div'>
						<input
							type='submit'
							value='Submit'
							className='enquiry-submit-button archivo-normal-white-pearl-2rem'
						/>
							
						
					</div>
				</form>
			</div>
		</div>
	);
}

export default EmailEnquiryForm;
