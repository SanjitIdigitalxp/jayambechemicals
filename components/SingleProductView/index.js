import React from 'react';
import { Row, Col } from 'react-bootstrap';
function SingleProductView(props) {
	return (
		<div className='single-product-container-div'>
			<img
				src='img/chemical-product-background.jpg'
				className='background-image-position'
			/>
			<Row sm={12} md={4} lg={4} xl={4}>
				<Col
					className='aline-col-element archivo-normal-black-pearl-2rem-600'
					sm={12}
					md={4}
					lg={4}
					xl={4}>
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
	);
}

export default SingleProductView;
