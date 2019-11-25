import actionType from '../consts/actionType';

const initialState = {
	itemsPengShui: [],
}
const myReducer= (state = initialState, action) => {
	switch (action.type) {
		case actionType.get_data_PengShui:
			return {
        ...state,
        itemsPengShui: action.payloadPengShui
      };
		case actionType.get_data_PengShui_sortDesc:
			return {
        ...state,
        itemsPengShui: action.payloadPengShuiSort
      };
		case actionType.get_data_PengShui_popalarSort:
			return {
        ...state,
        itemsPengShui: action.payloadPengShuiPopalar
      };
		default:
			return state
	}
}
export default myReducer;