import React from "react";
import SingleProductView from "../Common/SingleProductView";
import { Row, Col } from "react-bootstrap";
import footer from "./footer.js";
import particals from "./particals.js";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import styles from '../styles/home.module.sass';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function home() {
	
	return (
		<div>
			<div className={styles['marketing-tag-div']}>
				<div>
					<Row>
						<Col sm={12}>
						
							<div className={styles['col-one-headcontent']}>
							 <Particals />
								<p className={[styles['main-content-1'], styles['archivo-bold-black-pearl-5rem']], join(' ')}>
									Buy from JAY AMBE CHEMICALS
								</p>
								{/* <p className='main-content-2 archivo-bold-black-pearl-5rem'>
								provide the best rate in the market.
							</p> */}
								<p className={[styles['main-content-2'], styles['archivo-bold-black-pearl-5rem']], join(' ')}>
									with quality assurance.
								</p>
								<div className={[styles['sub-content'], styles['archivo-light-black-pearl-5rem']], join(' ')}>
									JAY AMBE CHEMICALS manufacturing facilities for Drug
									Intermediates and fine chemicals.
								</div>
							</div>
						</Col>
					</Row>
				</div>
				<div className={styles['contact-slider-container']} style={{position: "relative"}}>
					<AutoplaySlider fillParent="true" play={true} cancelOnInteraction={true} interval={3000}>
					<div className={styles['contact-content-holder']}>
								<div className={[styles['dilivery'], styles['sm']], join(' ')}>
									<img src='./public/img/delivery_icon.png'></img>
									<div>
										<p className={styles['archivo-normal-black-pearl-2-5rem-700']}>
											On-time delivery
										</p>
										<p className={[styles['archivo-normal-black-pearl-2rem-600'], styles['no-wrap']], join(' ')}>
											with the best service
										</p>
									</div>
								</div>
							</div>
							<div className={styles['contact-content-holder']}>
								<div className={[styles['email'], styles['sm']], join(' ')}>
									<img src='./public/img/email_icon_176616.png'></img>
									<div>
										<p className={styles['archivo-normal-black-pearl-2rem-600']}>Email</p>
										<p className={styles['email-data archivo-normal-black-pearl-2-5rem-700']}>
											jac115@rediffmail.com
										</p>
									</div>
								</div>
							</div>
							<div className={styles['contact-content-holder']}>
								<div className={[styles['phone'], styles['sm']], join(' ')}>
									<img src='./public/img/phone-call.png'></img>
									<div>
										<p className={styles['archivo-normal-black-pearl-2rem-600']}>Call</p>
										<p className={[styles['call-data'], styles['archivo-normal-black-pearl-2-5rem-700']], join(' ')}>
											8888735224
										</p>
									</div>
								</div>
							</div>
							<div className={styles['contact-content-holder']}>
								<div className={[styles['whats-app'], styles['sm']], join(' ')}>
									<img src='./public/img/WhatsApp.svg'></img>
									<div>
										<p className={styles['archivo-normal-black-pearl-2rem-600']}>
											Whatsapp
										</p>
										<p className={[styles['whatsapp-data'], styles['archivo-normal-black-pearl-2-5rem-700']], join(' ')}>
											9423365393
										</p>
									</div>
								</div>
							</div>
					</AutoplaySlider>
				</div>
				<div className={styles['contact-details-lg']}>
					<Row style={{ position: "relative", backgroundColor: "white" }}>
						<Col style={{padding: "1.2rem"}}>
							<div className={styles['contact-details']}>
								<div className={styles['dilivery']}>
									<img src='./public/img/delivery_icon.png'></img>
									<div>
										<p className={styles['archivo-normal-black-pearl-2-5rem-700']}>
											On-time delivery
										</p>
										<p className={[styles['archivo-normal-black-pearl-2-5rem-700'], styles['no-wrap']], join(' ')}>
											with the best service
										</p>
									</div>
								</div>
							</div>
							</Col>
							<Col style={{padding: "1.2rem"}}>
							<div className={styles['contact-details']}>
								<div className={styles['email']}>
									<img src='./public/img/email_icon_176616.png'></img>
									<div>
										<p className={styles['archivo-bold-black-pearl-2rem']}>Email</p>
										<p className={[styles['email-data'], styles['archivo-bold-black-pearl-2xrem']], join(' ')}>
											jac115@rediffmail.com
										</p>
									</div>
								</div>
							</div>
							</Col>
							<Col style={{padding: "1.2rem"}}>
							<div className={styles['contact-details']}>
								<div className={styles['phone']}>
									<img src='./public/img/phone-call.png'></img>
									<div>
										<p className={styles['archivo-bold-black-pearl-2rem']}>Call</p>
										<p className={[styles['call-data'], styles['archivo-normal-black-pearl-2-5rem-700']], join(' ')}>
											8888735224
										</p>
									</div>
								</div>
							</div>
							</Col>
							<Col style={{padding: "1.2rem"}}>
							<div  className={styles['contact-details']}>
								<div className={styles['whats-app']}>
									<img src='./public/img/WhatsApp.svg'></img>
									<div>
										<p className={styles['archivo-bold-black-pearl-2rem']}>
											Whatsapp
										</p>
										<p className={[styles['whatsapp-data'], styles['archivo-normal-black-pearl-2-5rem-700']], join(' ')}>
											9423365393
										</p>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</div>
				
				<div>
					<Row
						className={styles['product-top-div']}
						style={{ position: "relative", backgroundColor: "white", paddingTop: "48px" }}
					>
						<div className={styles['list-of-product-text']}>
							<span className={styles['list-of-product-span']}>
								<p className={styles['archivo-normal-white-pearl-2rem-700']}>
									List Of Product
								</p>
							</span>
						</div>
						<div className={styles['aline-home-items-center']}>
							<SingleProductView
								imagePath={"./public/img/n_bromosuccinimide.jpg"}
								prodName={"N-Bromosuccinimide"}
								synonyms={"NBS, N-Bromosuccinimide"}
								cas={"128-08-5"}
								moleculerWeight={"177.98"}
								empirical={"C4H4BrNO2"}
							/>
							<SingleProductView
								imagePath={"./public/img/n_chlorosuccinimide.jpg"}
								prodName={"N-Chlorosuccinimide"}
								synonyms={"NCS, 1-Chloro-2,5-pyrrolidinedione"}
								cas={"128-09-6"}
								moleculerWeight={"133.53"}
								empirical={"C4H4ClNO2"}
							/>
							<SingleProductView
								imagePath={"./public/img/mfcd00010975-medium.png"}
								prodName={"Copper(I) cyanide"}
								synonyms={"Cuprous cyanide"}
								cas={"544-92-3"}
								moleculerWeight={"89.56"}
								empirical={"CuCN"}
							/>
						</div>
					</Row>
					<footer />
				</div>
			</div>
		</div>
	);
}

export default home;
