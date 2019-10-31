import axios from 'axios';
import actionType from '../consts/actionType';

export const getDataItem = () => dispatch => {
  axios
    .get('/api/Tendency')
    .then(res =>
      dispatch({
        type: actionType.GET_DATA,
        payload: res.data
      })
    )
};