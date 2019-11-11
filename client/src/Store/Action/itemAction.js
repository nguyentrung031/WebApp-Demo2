import axios from 'axios';
import actionType from '../consts/actionType';

export const getDataItem = () => dispatch=> {
  // api trang Tendency,
  axios.get('/api/Tendency')
    .then(res =>
      dispatch({
        type: actionType.get_data_tendency,
        payload: res.data
      })
    )
  //api trang Style 
  axios.get('/api/Style')
    .then(res =>
      dispatch({
        type: actionType.get_data_style,
        payloadStyle: res.data
      })
    )
  //api trang Space 
  axios.get('/api/Space')
    .then(res =>
      dispatch({
        type: actionType.get_data_space,
        payloadSpace: res.data
      })
    )
  //api trang PengShui
  axios.get('/api/PengShui')
    .then(res =>
      dispatch({
        type: actionType.get_data_PengShui,
        payloadPengShui: res.data
      })
    )
  //api trang Tips
  axios.get('/api/Tips')
    .then(res =>
      dispatch({
        type: actionType.get_data_Tips,
        payloadTips: res.data
      })
    )
};
export const getDetail = id => dispatch=> {
  axios.get(`/Detail/${id}`)
  .then(res =>
    dispatch({
      type: actionType.get_data_detail,
      payloadDetail: res.data
    })
  )
}
