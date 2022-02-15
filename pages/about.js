import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from '../styles/about.module.sass'

function about() {
	return (
		<div className={styles['all-the-details-of-about-us-center']}>
			<img
				className={styles['image-div-about-us']}
				src='img/background-about-us-2.png'></img>
			<div className={styles['profile-pic-container']}>
				<div className={styles['profile-pic-1']}>
					<img
						src='img/image1.jfif'
						className={styles['profile-pic-individual']}></img>
				</div>
				<div className={styles.profile - pic - 2}>
					<img
						src='img/image2.jfif'
						className={styles['profile-pic-individual']}></img>
				</div>
				<div className={styles.profile - pic - 1}>
					<img
						src='img/image3.jfif'
						className={styles['profile-pic-individual']}></img>
				</div>
			</div>
			<div className={styles['about-us-details-center-container']}>
				<div className={styles['about-us-details-center']}>
					<div
						className={[
							styles['title-about-text'],
							styles['archivo-black-about-topic-us-title-4rem']
						].join(' ')}>
						About Us
					</div>
					<div className={styles['topic-data-width']}>
						<p className={styles['archivo-normal-black-pearl-2rem-550']}>
							Jai Ambe Chemicals is a leading company for chemical manufacturing
							based in Tarapur MIDC, Palghar, Maharashtra India for a whopping
							20 years. The company was setup in year 2000 with great vision of
							providing society with easy access to chemicals essential for
							drugs and dye manufacturing.
						</p>
					</div>
					<div className={styles['topic-data-width']}>
						<p className={styles['archivo-normal-black-pearl-2rem-550']}>
							High quality intermediate compounds for drugs and dye
							manufacturing are produced for nationwide supply with state-of-art
							technology and management. Specifically leading in production of
							N-Bromo succinimide, N-Chloro succinimide, Copper Cyanide.
						</p>
					</div>
					<div className={styles['topic-data-width']}>
						<p className={styles['archivo-normal-black-pearl-2rem-550']}>
							We also undertake provisioning of the chemicals in the wholesale
							markets with highly skilled and experienced team of supply chain
							management professionals, holding a major market share in
							distribution of N-Bromo succinimide, N-Chloro succinimide and
							Copper Cyanide.
						</p>
					</div>
				</div>
			</div>
			{/* <div className='our-history-details-center-container'>
				<div className='our-history-details-center'>
					<div className='title-about-text archivo-black-about-topic-us-title-4rem'>
						Our History
					</div>
					<div className='topic-data-width'>
						<p className='archivo-normal-black-pearl-2rem-550'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.popularised in the 1960s with the release of Letraset
							sheets containing Lorem Ipsum passages, and more recently with
							desktop publishing software like Aldus PageMaker including
							versions of Lorem Ipsum.popularised in the 1960s with the release
							of Letraset sheets containing Lorem Ipsum passages, and more
							recently with desktop publishing software like Aldus PageMaker
							including versions of Lorem Ipsum.
						</p>
					</div>
				</div>
			</div> */}
			<div className={styles['our-values-details-center-container']}>
				<div className={styles['about-us-details-center']}>
					<div
						className={[
							styles['title-about-text'],
							styles['archivo-black-about-topic-us-title-4rem']
						].join(' ')}>
						Our Values
					</div>
				</div>
				<div className={styles['width-of-value-div']}>
					<Row className={styles['row-width-size']}>
						<Col className={styles['value-multi-column']}>
							<div>
								<div
									className={[
										styles['our-value-sub-topic'],
										styles['archivo-normal-black-pearl-2-5rem-500']
									].join(' ')}>
									Responsible
								</div>
								<p className={styles['archivo-normal-black-pearl-2rem-550']}>
									Well-being and safety of people associated with us, the
									community, and the environment and the safeguarding of future
									generations is our sole responsibility.
								</p>
							</div>
						</Col>
						<Col className={styles.value - multi - column}>
							<div>
								<div
									className={[
										styles['our-value-sub-topic'],
										styles['archivo-normal-black-pearl-2-5rem-500']
									].join(' ')}>
									Focused
								</div>
								<p className={styles['archivo-normal-black-pearl-2rem-550']}>
									Being market leaders, We are focused on what we manufacture
									ensuring best quality.
								</p>
							</div>
						</Col>
						<Col className={styles['value-multi-column']}>
							<div>
								<div
									className={[
										styles['our-value-sub-topic'],
										styles['archivo-normal-black-pearl-2-5rem-500']
									].join(' ')}>
									Straightforward
								</div>
								<p className={styles['archivo-normal-black-pearl-2rem-550']}>
									We are open and honest with our customers and organizations.
									We make realistic promises and fulfil them with great honour.
								</p>
							</div>
						</Col>
						<Col className={styles.value - multi - column}>
							<div>
								<div
									className={
										[styles[
											'our-value-sub-topic'], styles['archivo-normal-black-pearl-2-5rem-500'
										]].join(' ')
									}>
									Collaborative
								</div>
								<p className={styles['archivo-normal-black-pearl-2rem-550']}>
									With collective efforts from our executives, management and
									clients, we ensure success from all round satisfaction and
									achieve larger common goals.
								</p>
							</div>
						</Col>
					</Row>
				</div>
			</div>
			<div
				className={[styles['group-7801'], styles['archivo-normal-black-pearl-1-4rem']].join(' ')}
				style={{ backgroundColor: 'white' }}>
				<div className={styles.copyright}>
					©Copyright 2021 JAY AMBE CHEMICALS. All Rights Reserved{' '}
				</div>
			</div>
		</div>
	);
}

export default about;
