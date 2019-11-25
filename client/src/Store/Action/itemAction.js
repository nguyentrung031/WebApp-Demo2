import axios from 'axios';
import actionType from '../consts/actionType';

export const getDataItem = () => dispatch=> {
  // api trang Tendency,
  axios.get('/api/tendency')
    .then(res =>
      dispatch({
        type: actionType.get_data_tendency,
        payload: res.data
      })
    )
  //api trang Style 
  axios.get('/api/style')
    .then(res =>
      dispatch({
        type: actionType.get_data_style,
        payloadStyle: res.data
      })
    )
  //api trang Space 
  axios.get('/api/space')
    .then(res =>
      dispatch({
        type: actionType.get_data_space,
        payloadSpace: res.data
      })
    )
  //api trang PengShui
  axios.get('/api/peng_shui')
    .then(res =>
      dispatch({
        type: actionType.get_data_PengShui,
        payloadPengShui: res.data
      })
    )
  //api trang Tips
  axios.get('/api/tips')
    .then(res =>
      dispatch({
        type: actionType.get_data_Tips,
        payloadTips: res.data
      })
    )
  //api trang vật tư
  axios.get('/api/supplies')
    .then(res =>
      dispatch({
        type: actionType.get_data_Supplies,
        payloadSupplies: res.data
      })
    )
  //api trang Độc lạ
  axios.get('/api/strange_poison')
    .then(res =>
      dispatch({
        type: actionType.get_data_StrangePoison,
        payloadSP: res.data
      })
    )
};
//api trang chi tiết tin tức
export const getDetail = (id) => dispatch=> {
  axios.get(`/api/get_detail/${id}`)
  .then(res =>
    dispatch({
      type: actionType.get_data_detail,
      payloadDetail: res.data,
    })
  )
}
// api search data
export const searchData = ((history, name) => dispatch => {
  axios.get(`/api/get_search?q=${name}`)
  .then(res =>
    dispatch({
      type: actionType.search_data,
      payloadSearch: history.push({
        pathname: "/Search",
        search: `?q=${name}`,
        state: {item: res.data}
      })
    })
  );
});
//api add email
export const addEmail = item => dispatch=> {
  axios.post('/api/add_email', item)
  .then(res =>
    dispatch({
      type: actionType.add_data_Email,
      payloadEmail: res.data
    })
  )
}
