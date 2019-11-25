import actionType from '../consts/actionType';

const initialState = {
	itemsEmail: [],
}
const myReducer= (state = initialState, action) => {
	switch (action.type) {
		case actionType.add_data_Email:
      return {
        ...state,
        itemsEmail: [action.payloadEmail, ...state.itemsEmail]
      };
		default:
			return state
	}
}
export default myReducer;