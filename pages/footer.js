import React from "react";
import { Row, Col } from "react-bootstrap";
import { ImLocation2 } from "react-icons/im";
import { RiPhoneFill, RiWhatsappLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import emailEnquiryForm from "../components/EmailEnquiryForm";

function footer() {
	return (
		<div>
			<div className={styles['footer-div']}>
				<Row>
					<Col lg={5}>
						<div className={styles['aline-logo-center-footer-outer']}>
							<div className={styles['aline-logo-center-footer']}>
								<div className={styles['logo-name-footer']}>
									<div className={styles['logo-img-footer']}>
										<img src='./public/img/pankaj_Singh_card-previ.png'></img>
									</div>

									<div className={[styles['logo-footer'], styles['nanum-myeongjo-normal-black-pearl-4rem']], join(' ')}>
										<h2>JAY AMBE CHEMICALS</h2>
									</div>
								</div>

								<img
									src='./public/img/relationship-2.png'
									className={styles['relationship-img']}
								></img>
									<p className={[styles['long-term-relationships'], styles['archivo-normal-black-pearl-2-5rem-700']], join(' ')}>
										We always do what is right for our clients and try to
										understand their requirements, value their time with
										Honesty, responsibility, accountability, openness, and
										respect are the centrepiece to build long-term relationships
										with our clients
									</p>
							</div>
						</div>
					</Col>
					<Col lg={7} className={styles['aline-image-center-footer']}>
						<div className={styles['email-form-div']}>
							<img
								src='./public/img/Contactus.png'
								className={styles['contact-Form-background-img']}
							></img>
								<emailEnquiryForm />
						</div>
					</Col>
					<div className={[styles['group-7801'], styles['archivo-normal-black-pearl-1-4rem']], join(' ')}>
						<div className={styles['copyright']}>
							©Copyright 2021 JAY AMBE CHEMICALS. <span>All Rights Reserved</span>{" "}
						</div>
					</div>
				</Row>
			</div>
		</div>
	);
}

export default footer;
