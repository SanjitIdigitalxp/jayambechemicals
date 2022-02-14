import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {selectedPageAction} from '../../../actions'
function ProductDropDownMenu(props) {
    const {hideOnselect} = props
    const [activePage, setActivePage] = useState(props.selectedProductPage)
    useEffect(()=>{
        setActivePage(props.selectedProductPage)
    },[props.selectedProductPage])
    return (
        <div className={styles.outer-div-dropDown}>
            <div className={activePage === 'nbromosuccinimide' ? 'product-list-style background-color-drop-down-option':'product-list-style'} onClick={()=>{props.selectedPageAction('nbromosuccinimide')
            hideOnselect(false);
        }}>N-Bromosuccinimide</div>
            <div className={activePage === 'nchlorosuccinimide' ? 'product-list-style background-color-drop-down-option':'product-list-style'} onClick={()=>{props.selectedPageAction('nchlorosuccinimide')
            hideOnselect(false);
        }}>N-Chlorosuccinimide</div>
            <div className={activePage === 'coppercynide' ? 'product-list-style background-color-drop-down-option':'product-list-style'} onClick={()=>{props.selectedPageAction('coppercynide')
            hideOnselect(false);
        }}>Copper(I) cyanide</div>
        </div>
    )
}

const mapStateToProps = (state) => {
	console.log("initial path drop down:", state.selectedProductPage);
	return {
		selectedProductPage: state.selectedProductPage,
	};
};

export default connect(mapStateToProps,{selectedPageAction})(ProductDropDownMenu)
