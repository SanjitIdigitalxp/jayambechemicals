import React from 'react';
import { Row, Col } from 'react-bootstrap';
function ProductDetailsItems(props) {
	return (
		<div className='single-product-container-div-pdic'>
			<img
				src='img/chemical-product-background.jpg'
				className='background-image-position-pdic'
			/>
			<Row sm={12} md={4} lg={4} xl={4}>
				<Col
					className='aline-col-element-pdic archivo-normal-black-pearl-2rem-600'
					sm={12}
					md={4}
					lg={4}
					xl={4}>
					<h1 className='title-name-pdic'>{props.prodName}</h1>
					<div className='product-img-style-pdic'>
						<img src={props.imagePath}></img>
					</div>

					<div className='product-details-style-pdic'>
						<div>
							<Row>
								<div className='separate-key-value-pdic'>
									<div className='archivo-bold-black-pearl-2rem'>Synonyms:</div>
									<div className='archivo-normal-black-pearl-2rem'>
										{props.synonyms}
									</div>
								</div>
								<div className='separate-key-value-pdic'>
									<div className='archivo-bold-black-pearl-2rem'>
										CAS Number:
									</div>
									<div className='archivo-normal-black-pearl-2rem'>
										{props.cas}
									</div>
								</div>
								<div className='separate-key-value-pdic'>
									<div className='archivo-bold-black-pearl-2rem'>
										Molecular Weight:
									</div>
									<div className='archivo-normal-black-pearl-2rem'>
										{props.moleculerWeight}
									</div>
								</div>
								<div className='separate-key-value-pdic'>
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

export default ProductDetailsItems;
