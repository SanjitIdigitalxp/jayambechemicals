import React, {useEffect, useState} from "react";
import SingleProductPageView from "../components/Common/SingleProductPageView";
import {connect} from 'react-redux';
import styles from '../styles/products.module.sass';

function products(props) {
	const [pageState, setPageState] = useState(props.selectedProductPage)
	useEffect(()=>{
		setPageState(props.selectedProductPage)
	},[props.selectedProductPage])
	return (
		<div className={styles['aline-product-details-center']}>
			{pageState === 'nbromosuccinimide' && (
				<div className={styles['card-for-product-image']}>
					<div>
						<SingleProductPageView
							imagePath={'./public/img/n_bromosuccinimide.jpg'}
							prodName={'N-Bromosuccinimide'}
							synonyms={'NBS, N-Bromosuccinimide'}
							cas={'128-08-5'}
							moleculerWeight={'177.98'}
							empirical={'C4H4BrNO2'}
							productImage={'./public/img/N-Bromosuccinimide-product.png'}
						/>
					</div>
				</div>
			)}
			{pageState === 'nchlorosuccinimide' && (
				<div className={styles['card-for-product-image']}>
					<div>
						<SingleProductPageView
							imagePath={'./public/img/n_chlorosuccinimide.jpg'}
							prodName={'N-Chlorosuccinimide'}
							synonyms={'NCS, 1-Chloro-2,5-pyrrolidinedione'}
							cas={'128-09-6'}
							moleculerWeight={'133.53'}
							empirical={'C4H4ClNO2'}
							productImage={'./public/img/n-clorosuccinimide-product.png'}
						/>
					</div>
				</div>
			)}
			{pageState === 'coppercynide' && (
				<div className={styles['card-for-product-image']}>
					<div>
						<SingleProductPageView
							imagePath={'./public/img/mfcd00010975-medium.png'}
							prodName={'Copper(I) cyanide'}
							synonyms={'Cuprous cyanide'}
							cas={'544-92-3'}
							moleculerWeight={'89.56'}
							empirical={'CuCN'}
							productImage={'./public/img/copper-cyanide-Product.png'}
						/>
					</div>
				</div>
			)}
			<div
				className={[styles['group-7801'], styles['archivo-normal-black-pearl-1-4rem']], join(' ')}
				style={{ position: 'relative', backgroundColor: 'white' }}>
				<div className={styles['copyright']}>
					©Copyright 2021 JAY AMBE CHEMICALS. All Rights Reserved{' '}
				</div>
			</div>
		</div>
	);
}
const mapStateToProps = (state) =>{
	return {
		selectedProductPage: state.selectedProductPage,
	}
}
export default connect(mapStateToProps)(Products);
