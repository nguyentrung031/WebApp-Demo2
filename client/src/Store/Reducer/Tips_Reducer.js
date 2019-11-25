import actionType from '../consts/actionType';

const initialState = {
	itemsTips: [],
}
const myReducer= (state = initialState, action) => {
	switch (action.type) {
		case actionType.get_data_Tips:
			return {
        ...state,
        itemsTips: action.payloadTips
      };
		case actionType.get_data_Tips_sortDesc:
			return {
        ...state,
        itemsTips: action.payloadTipsDesc
      };
		case actionType.get_data_Tips_popalarSort:
			return {
        ...state,
        itemsTips: action.payloadTipsPopalar
      };
		default:
			return state
	}
}
export default myReducer;