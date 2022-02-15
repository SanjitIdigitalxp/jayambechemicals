import React, { useRef } from "react";
import emailjs from "emailjs-com";
import styles from '../styles/EmailEnquiryForm.module.sass';
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
			<div className={styles['enquiry-form-div']}>
				<form ref={form} onSubmit={(e) => sendEmail(e)}>
					<div className={styles['contact-form-text-div']}>
						<p className={styles['archivo-normal-contact-us-pearl-4rem-900']}>
							Contact Us
						</p>
					</div>
					<input
						placeholder='Name'
						name='name'
						className={[
							styles['enquiry-input-box'],
							styles['archivo-normal-black-pearl-2rem']
						].join(' ')}></input>
					<input
						placeholder='Email'
						name='email'
						className={[
							styles['enquiry-input-box'],
							styles['archivo-normal-black-pearl-2rem']
						].join(' ')}></input>
					<input
						placeholder='Subject'
						name='subject'
						className={[
							styles['enquiry-input-box'],
							styles['archivo-normal-black-pearl-2rem']
						].join(' ')}></input>
					<textarea
						placeholder='Message'
						name='message'
						className={[
							styles['enquiry-textarea-box'],
							styles['archivo-normal-black-pearl-2rem']
						].join(' ')}></textarea>
					<div className={styles['contact-form-button-div']}>
						<input
							type='submit'
							value='Submit'
							className={
								[styles['enquiry-submit-button'], styles['archivo-normal-white-pearl-2rem']].join(' ')
							}
						/>
					</div>
				</form>
			</div>
		</div>
	);
}

export default EmailEnquiryForm;
