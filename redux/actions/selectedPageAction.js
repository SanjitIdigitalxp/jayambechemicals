import * as t from '../types'

export const selectedPageAction = (pageName) => async (dispatch) => {
	dispatch({
		type: t.ON_SELECTED_PAGE_NAME,
		payload: pageName
	});
};
