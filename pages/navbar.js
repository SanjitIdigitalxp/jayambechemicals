import React, { useState, useEffect, useRef } from 'react';
import ProductDropDownMenu from "../components/Common/ProductDropDownMenu";
import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import styles from '../styles/navbar.module.sass';

let useClickOutSide = (handler) => {
	let domNode2 = useRef();

	useEffect(() => {
		let mayBeHandler = (event) => {
			if (!domNode2.current.contains(event.target)) {
				handler();
			}
		};

		document.addEventListener('mousedown', mayBeHandler);
		return () => {
			document.removeEventListener('mousedown', mayBeHandler);
		};
	});

	return domNode2;
};
const Navbar = (props) => {
	const [showMediaIcons, setShowMediaIcons] = useState(false);
	const [showHide, setShowHide] = useState(true);
	const history = useHistory()
	const showDropDown = async () => {
		if (showHide) {
			setShowHide(false);
		} else {
			history.push('/products')
			setShowHide(true);
		}
	};

	const checkPathF = () => {
		
	};

	checkPathF();

	const  path  = props.selectedProductPage
		console.log("path:", path);

	let domNode = useClickOutSide(() => {
		// console.log('pout side click happen 2');
		setShowHide(false);
	});

	return (
		<div style={{ position: 'relative', backgroundColor: 'white' }}>
			<nav className={styles['main-nav']}>
				<div className={styles['logo-img']}>
					<img src='./public/img/pankaj_Singh_card-previ.png'></img>
					<h2 className={[styles['logo'], styles['nanum-myeongjo-normal-black-pearl-3-5rem']], join(' ')}>JAY AMBE CHEMICALS</h2>
				</div>

				{/* 2nd menu part  */}
				<div
					className={
						showMediaIcons ? 'menu-link mobile-menu-link' : 'menu-link'
					}>
					<ul>
						<li className={styles['archivo-normal-black-pearl-2rem']}>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li className={styles['archivo-normal-black-pearl-2rem']}>
							<NavLink to='/about'>about</NavLink>
						</li>
						<li
							className={styles['archivo-normal-black-pearl-2rem']}
							style={{ position: 'relative' }}
							ref={domNode}>
							<p onClick={() => showDropDown()}>Products</p>
							{showHide && (
								<div style={{ position: 'absolute', top: '6.3rem' }}>
									<ProductDropDownMenu hideOnselect={setShowHide} />
								</div>
							)}
						</li>

						<li className={styles['archivo-normal-black-pearl-2rem']}>
							<NavLink to='/contact'>contact</NavLink>
						</li>
					</ul>
				</div>

				{/* 3rd social media links */}
				<div className={styles['social-media']}>
					{/* hamburget menu start  */}
					<div className={styles['hamburger-menu']}>
						<a href='#' onClick={() => setShowMediaIcons(!showMediaIcons)}>
							<GiHamburgerMenu />
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log("initial path:", state.selectedProductPage);
	return {
		selectedProductPage: state.selectedProductPage,
	};
};

export default connect(mapStateToProps)(Navbar);
