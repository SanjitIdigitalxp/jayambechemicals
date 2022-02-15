import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from '../styles/ProductDetailsItems.module.sass';
function ProductDetailsItems(props) {
	return (
		<div className={styles['single-product-container-div-pdic']}>
			<img
				src='img/chemical-product-background.jpg'
				className={styles['background-image-position-pdic']}
			/>
			<Row sm={12} md={4} lg={4} xl={4}>
				<Col
					className={
						[styles['aline-col-element-pdic'],
						styles['archivo-normal-black-pearl-2rem-600']].join(' ')
					}
					sm={12}
					md={4}
					lg={4}
					xl={4}>
					<h1 className={styles['title-name-pdic']}>{props.prodName}</h1>
					<div className={styles['product-img-style-pdic']}>
						<img src={props.imagePath}></img>
					</div>

					<div className={styles['product-details-style-pdic']}>
						<div>
							<Row>
								<div className={styles['separate-key-value-pdic']}>
									<div className={styles['archivo-bold-black-pearl-2rem']}>
										Synonyms:
									</div>
									<div className={styles['archivo-normal-black-pearl-2rem']}>
										{props.synonyms}
									</div>
								</div>
								<div className={styles['separate-key-value-pdic']}>
									<div className={styles['archivo-bold-black-pearl-2rem']}>
										CAS Number:
									</div>
									<div className={styles['archivo-normal-black-pearl-2rem']}>
										{props.cas}
									</div>
								</div>
								<div className={styles['separate-key-value-pdic']}>
									<div className={styles['archivo-bold-black-pearl-2rem']}>
										Molecular Weight:
									</div>
									<div className={styles['archivo-normal-black-pearl-2rem']}>
										{props.moleculerWeight}
									</div>
								</div>
								<div className={styles['separate-key-value-pdic']}>
									<div className={styles['archivo-bold-black-pearl-2rem']}>
										Empirical Formula (Hill Notation):
									</div>
									<div className={styles['archivo-normal-black-pearl-2rem']}>
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
