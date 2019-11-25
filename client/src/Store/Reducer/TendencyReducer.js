import actionType from '../consts/actionType';

const initialState = {
	itemsTendency: [],
}
const myReducer= (state = initialState, action) => {
	switch (action.type) {
		case actionType.get_data_tendency:
			return {
        ...state,
        itemsTendency: action.payload
      };
		case actionType.get_data_tendency_sortDest:
			return {
        ...state,
        itemsTendency: action.payloadTendencySort
      };
		case actionType.get_data_tendency_popalarSort:
			return {
        ...state,
        itemsTendency: action.payloadTendencyPopalar
      };
		default:
			return state
	}
}
export default myReducer;