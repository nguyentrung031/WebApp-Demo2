import axios from 'axios';
import actionType from '../consts/actionType';

export const getDataItem = () => dispatch => {
  axios
    .get('/api/Tendency')
    .then(res =>
      dispatch({
        type: actionType.get_data_tendency,
        payload: res.data
      })
    )
};