import React from "react";
import Footer from "../components/Footer";
import { Row, Col } from "react-bootstrap";
import EmailEnquiryForm from "../EmailEnquiryForm";

function contact() {
	return (
		<div style={{ backgroundColor: '#f8f5f2' }}>
			{/* N-115, M.I.D.C, Tarapur, Boisar, Dist: Thane - 401 506 Maharashtra, India. 
				Email: jac115@reduffmail.com
				contact no Whatsapp: 9423365393
				contact no Call: 8888735224
			
			*/}
			<div
				id='map-container-google-1'
				className={styles['z-depth-1-half map-container']}>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22069.173732435127!2d72.73322797907812!3d19.800185565386464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71e465563e5ff%3A0xfd3e5e19c485d1fd!2sUnilex%20Colours%20%26%20Chemicals%20Limited!5e0!3m2!1sen!2sin!4v1636005902668!5m2!1sen!2sin'
					width='100%'
					height='600'
					// allowfullscreen=''
					style={{ border: '0' }}
					loading='lazy'></iframe>
			</div>
			{/* <Footer /> */}
			<div>
				<Row>
					<Col lg={12}>
						<Row className={styles.contact - list}>
							<Col style={{ display: 'flex', justifyContent: 'center' }}>
								<div className={styles.dilivery - contact}>
									<img src='img/locationIcon.png'></img>
									<div>
										<p
											className={
												styles['archivo-normal-black-pearl-2-5rem-700']
											}>
											N-115, M.I.D.C, Tarapur, Boisar, Dist: Thane - 401 506
											Maharashtra, India.
										</p>
									</div>
								</div>
							</Col>
							<Col style={{ display: 'flex', justifyContent: 'center' }}>
								<div className={styles.email - contact}>
									<img src='img/email_icon_176616.png'></img>
									<div>
										<p
											className={styles['archivo-normal-black-pearl-2rem-600']}>
											Email
										</p>
										<p
											className={
												styles[
													'email-data archivo-normal-black-pearl-2-5rem-700'
												]
											}>
											jac115@rediffmail.com
										</p>
									</div>
								</div>
							</Col>
							<Col style={{ display: 'flex', justifyContent: 'center' }}>
								<div className={style.phone - contact}>
									<img src='img/phone-call.png'></img>
									<div>
										<p
											className={styles['archivo-normal-black-pearl-2rem-600']}>
											Call
										</p>
										<p
											className={
												styles[
													'call-data archivo-normal-black-pearl-3-5rem-700'
												]
											}>
											8888735224
										</p>
									</div>
								</div>
							</Col>
							<Col style={{ display: 'flex', justifyContent: 'center' }}>
								<div className={styles['whats-app-contact']}>
									<img src='img/WhatsApp.svg'></img>
									<div>
										<p
											className={styles['archivo-normal-black-pearl-2rem-600']}>
											Whatsapp
										</p>
										<p
											className={
												styles[
													'whatsapp-data archivo-normal-black-pearl-3-5rem-700'
												]
											}>
											9423365393
										</p>
									</div>
								</div>
							</Col>
						</Row>
					</Col>
					<Col
						lg={12}
						className={styles['center-contact-form-contact']}
						style={{ marginBottom: '5rem' }}>
						<div className={styles['email-form-div aline-image-center-footer']}>
							<img
								src='img/Contactus.png'
								className={styles['contact-Form-background-img']}></img>

							<div style={{ padding: '1.5rem' }}>
								<EmailEnquiryForm />
							</div>
						</div>
					</Col>
					<div
						className={styles['group-7801 archivo-normal-black-pearl-1-4rem']}>
						<div className={styles.copyright}>
							©Copyright 2021 JAY AMBE CHEMICALS.{' '}
							<span>All Rights Reserved</span>{' '}
						</div>
					</div>
				</Row>
			</div>
		</div>
	);
}

export default contact;
