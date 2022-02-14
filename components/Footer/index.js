import React from "react";
import { Row, Col } from "react-bootstrap";
import { ImLocation2 } from "react-icons/im";
import { RiPhoneFill, RiWhatsappLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import EmailEnquiryForm from "../EmailEnquiryForm";

function Footer() {
	return (
		<div>
			<div className='footer-div'>
				<Row>
					<Col lg={5}>
						<div className='aline-logo-center-footer-outer'>
							<div className='aline-logo-center-footer'>
								<div className='logo-name-footer'>
									<div className='logo-img-footer'>
										<img src='img/pankaj_Singh_card-previ.png'></img>
									</div>

									<div className='logo-footer nanum-myeongjo-normal-black-pearl-4rem'>
										<h2>JAY AMBE CHEMICALS</h2>
									</div>
								</div>

								<img
									src='img/relationship-2.png'
									className='relationship-img'
								></img>
									<p className='long-term-relationships archivo-normal-black-pearl-2-5rem-700'>
										We always do what is right for our clients and try to
										understand their requirements, value their time with
										Honesty, responsibility, accountability, openness, and
										respect are the centrepiece to build long-term relationships
										with our clients
									</p>
							</div>
						</div>
					</Col>
					<Col lg={7} className='aline-image-center-footer'>
						<div className='email-form-div'>
							<img
								src='img/Contactus.png'
								className='contact-Form-background-img'
							></img>
								<EmailEnquiryForm />
						</div>
					</Col>
					<div
						className='group-7801 archivo-normal-black-pearl-1-4rem'
					>
						<div className='copyright'>
							©Copyright 2021 JAY AMBE CHEMICALS. <span>All Rights Reserved</span>{" "}
						</div>
					</div>
				</Row>
			</div>
		</div>
	);
}

export default Footer;
