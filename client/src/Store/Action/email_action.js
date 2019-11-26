import axios from 'axios';
import actionType from '../consts/actionType';

//api add email
export const addEmail = item => dispatch=> {
  axios.post('/api/email', item)
  .then(res =>
    dispatch({
      type: actionType.add_data_Email,
      payloadEmail: res.data
    })
  )
}