import React from "react";
import { Row, Col } from "react-bootstrap";
function SingleProductPageView(props) {
	return (
		<div className='center-product-image-and-delivery'>
			<div className='single-product-container-div'>
				<img
					src='img/chemical-product-background.jpg'
					className='background-image-position'
				/>
				<Row>
					<Col sm={12} md={6} lg={6} xl={6}>
						<img
							src={props.productImage}
							style={{
								width: '40rem',
								height: '40rem',
								position: 'relative',
								borderRadius: '1rem',
								marginLeft: '5rem'
							}}></img>
					</Col>
				</Row>
				<Row sm={12} md={12} lg={12} xl={12}>
					<Col
						className='aline-col-element archivo-normal-black-pearl-2rem-600'
						sm={12}
						md={6}
						lg={6}
						xl={6}>
						<h1 className='title-name'>{props.prodName}</h1>
						<div className='product-img-style'>
							<img src={props.imagePath}></img>
						</div>

						<div className='product-details-style'>
							<div>
								<Row>
									<div className='separate-key-value'>
										<div className='archivo-bold-black-pearl-2rem'>
											Synonyms:
										</div>
										<div className='archivo-normal-black-pearl-2rem'>
											{props.synonyms}
										</div>
									</div>
									<div className='separate-key-value'>
										<div className='archivo-bold-black-pearl-2rem'>
											CAS Number:
										</div>
										<div className='archivo-normal-black-pearl-2rem'>
											{props.cas}
										</div>
									</div>
									<div className='separate-key-value'>
										<div className='archivo-bold-black-pearl-2rem'>
											Molecular Weight:
										</div>
										<div className='archivo-normal-black-pearl-2rem'>
											{props.moleculerWeight}
										</div>
									</div>
									<div className='separate-key-value'>
										<div className='archivo-bold-black-pearl-2rem'>
											Empirical Formula (Hill Notation):
										</div>
										<div className='archivo-normal-black-pearl-2rem'>
											{props.empirical}
										</div>
									</div>
								</Row>
							</div>
						</div>
					</Col>
				</Row>
			</div>
			<div className='delivery-container'>
				<div className='packaging-text'>
					<p className='archivo-normal-black-pearl-2-5rem-700'>
						Packing provided in 25 kg and 50 kg containers
					</p>
				</div>
				<Row style={{ backgroundColor: '#ffffff' }}>
					<Col md={6} sm={12}>
						<img
							src='img/HDPE-50-liter-drum.jpg'
							style={{ width: '100%' }}></img>
					</Col>
					<Col md={6} sm={12}>
						<img src='img/fiber-drums.jpg' style={{ width: '100%' }}></img>
					</Col>
				</Row>
				<div className='packaging-text-contact-benifit'>
					<p className='archivo-normal-black-pearl-1-5rem'>
						Contact Us to get more details regarding quantity and pricing
					</p>
					<p className='archivo-normal-black-pearl-1-5rem'>
						Send your queries through whatsapp, email or you can call on
						provided mobile no.
					</p>
					<p className='archivo-normal-black-pearl-1-5rem'>
						We are looking forward to have business with you, our clients are
						very happy with our service. Feel free to contact to know more.
					</p>
				</div>
			</div>
		</div>
	);
}

export default SingleProductPageView;
