import actionType from '../consts/actionType';

const initialState = {
  itemsSpace: [],
}
const myReducer= (state = initialState, action) => {
  switch (action.type) {
    case actionType.get_data_space:
      return {
        ...state,
        itemsSpace: action.payloadSpace
      };
    case actionType.get_data_space_sortDesc:
      return {
        ...state,
        itemsSpace: action.payloadSpaceSort
      };
    case actionType.get_data_space_popalarSort:
      return {
        ...state,
        itemsSpace: action.payloadSpacePopalar
      };
    default:
      return state
  }
}
export default myReducer;