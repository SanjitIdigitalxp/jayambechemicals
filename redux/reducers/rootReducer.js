import * as t from "../types"


const rootReducer = (
	state = {
		selectedProductPage: 'nbromosuccinimide'
	},
	action
) => {
	if (action.type === t.ON_SELECTED_PAGE_NAME) {
		return { ...state, selectedProductPage: action.payload };
	}
	return state;
};

export default rootReducer;
