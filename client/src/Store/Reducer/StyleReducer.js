import actionType from '../consts/actionType';

const initialState = {
	itemsStyle: [],
}
const myReducer= (state = initialState, action) => {
	switch (action.type) {
		case actionType.get_data_style:
			return {
        ...state,
        itemsStyle: action.payloadStyle
      };
		case actionType.get_data_style_sortDesc:
			return {
        ...state,
        itemsStyle: action.payloadStyleSortDesc
      };
		case actionType.get_data_style_popalarSort:
			return {
        ...state,
        itemsStyle: action.payloadStylePopalar
      };
		default:
			return state
	}
}
export default myReducer;