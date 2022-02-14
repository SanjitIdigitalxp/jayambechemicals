import React, {useEffect, useState} from "react";
import SingleProductPageView from "../Common/SingleProductPageView";
import {connect} from 'react-redux'
function Products(props) {
	const [pageState, setPageState] = useState(props.selectedProductPage)
	useEffect(()=>{
		setPageState(props.selectedProductPage)
	},[props.selectedProductPage])
	return (
		<div className='aline-product-details-center'>
			{pageState === 'nbromosuccinimide' && (
				<div className='card-for-product-image'>
					<div>
						<SingleProductPageView
							imagePath={'img/n_bromosuccinimide.jpg'}
							prodName={'N-Bromosuccinimide'}
							synonyms={'NBS, N-Bromosuccinimide'}
							cas={'128-08-5'}
							moleculerWeight={'177.98'}
							empirical={'C4H4BrNO2'}
							productImage={'img/N-Bromosuccinimide-product.png'}
						/>
					</div>
				</div>
			)}
			{pageState === 'nchlorosuccinimide' && (
				<div className='card-for-product-image'>
					<div>
						<SingleProductPageView
							imagePath={'img/n_chlorosuccinimide.jpg'}
							prodName={'N-Chlorosuccinimide'}
							synonyms={'NCS, 1-Chloro-2,5-pyrrolidinedione'}
							cas={'128-09-6'}
							moleculerWeight={'133.53'}
							empirical={'C4H4ClNO2'}
							productImage={'img/n-clorosuccinimide-product.png'}
						/>
					</div>
				</div>
			)}
			{pageState === 'coppercynide' && (
				<div className='card-for-product-image'>
					<div>
						<SingleProductPageView
							imagePath={'img/mfcd00010975-medium.png'}
							prodName={'Copper(I) cyanide'}
							synonyms={'Cuprous cyanide'}
							cas={'544-92-3'}
							moleculerWeight={'89.56'}
							empirical={'CuCN'}
							productImage={'img/copper-cyanide-Product.png'}
						/>
					</div>
				</div>
			)}
			<div
				className='group-7801 archivo-normal-black-pearl-1-4rem'
				style={{ position: 'relative', backgroundColor: 'white' }}>
				<div className='copyright'>
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
