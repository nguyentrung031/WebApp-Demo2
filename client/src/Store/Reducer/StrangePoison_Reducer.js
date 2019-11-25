import actionType from '../consts/actionType';

const initialState = {
	itemsSP: [],
}
const myReducer= (state = initialState, action) => {
	switch (action.type) {
		case actionType.get_data_StrangePoison:
      return {
        ...state,
        itemsSP: action.payloadSP
      };
		case actionType.get_data_StrangePoison_sortDesc:
      return {
        ...state,
        itemsSP: action.payloadSPDesc
      };
		case actionType.get_data_StrangePoison_popalarSort:
      return {
        ...state,
        itemsSP: action.payloadSPPopalar
      };
		default:
			return state
	}
}
export default myReducer;