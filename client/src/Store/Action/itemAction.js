import axios from 'axios';
import actionType from '../consts/actionType';

export const getDataItem = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get('/api/Tendency')
    .then(res =>
      dispatch({
        type: actionType.GET_DATA,
        payload: res.data
      })
    )
};
export const setItemsLoading = () => {
  return {
    type: actionType.ITEMS_LOADING
  };
};