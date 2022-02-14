import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'
import {selectedPageAction} from '../redux/actions'
import { connect } from 'react-redux'
 function Home(props) {
   console.log('initial state:',props.rootReducer);
  return (
		<div className={styles.container}>
			<div>{props.rootReducer.selectedProductPage}</div>

			<button onClick={() => props.selectedPageAction('hbvdhsdvh')}></button>

		</div>
	);
}


const mapStateToProps = (state) => ({
	rootReducer: state.rootReducer
});

// this is for importing actions in next.js
const mapDispatchToProps = {
	selectedPageAction: selectedPageAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);