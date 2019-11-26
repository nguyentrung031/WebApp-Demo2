import actionType from '../consts/actionType';

const initialState = {
  itemsSupplies: [],
}
const myReducer= (state = initialState, action) => {
  switch (action.type) {
    case actionType.get_data_Supplies:
      return {
        ...state,
        itemsSupplies: action.payloadSupplies
      };
    case actionType.get_data_Supplies_sortDesc:
      return {
        ...state,
        itemsSupplies: action.payloadSuppliesDesc
      };
    case actionType.get_data_Tips_popalarSort:
      return {
        ...state,
        itemsSupplies: action.payloadSuppliesPopalar
      };
    default:
      return state
  }
}
export default myReducer;