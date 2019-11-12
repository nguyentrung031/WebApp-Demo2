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
  //api trang vật tư
  axios.get('/api/Supplies')
    .then(res =>
      dispatch({
        type: actionType.get_data_Supplies,
        payloadSupplies: res.data
      })
    )
  //api trang Độc lạ
  axios.get('/api/StrangePoison')
    .then(res =>
      dispatch({
        type: actionType.get_data_StrangePoison,
        payloadSP: res.data
      })
    )
};
//api trang chi tiết tin tức
export const getDetail = id => dispatch=> {
  axios.get(`/Detail/${id}`)
  .then(res =>
    dispatch({
      type: actionType.get_data_detail,
      payloadDetail: res.data
    })
  )
}
//api add email
export const addEmail = item => dispatch=> {
  axios.post('/api/addEmail', item)
  .then(res =>
    dispatch({
      type: actionType.add_data_Email,
      payloadEmail: res.data
    })
  )
}
