import axios from 'axios';
import actionType from '../consts/actionType';

export const getData_strange_poison = () => dispatch=> {
  //api trang Độc lạ
  axios.get('/api/strange_poison')
    .then(res =>
      dispatch({
        type: actionType.get_data_StrangePoison,
        payloadSP: res.data
      })
    )
}	
export const getData_strange_poison_sortdesc = () => dispatch=> {
  //api trang Độc lạ
  axios.get('/api/strange_poison/new_sort_desc')
    .then(res =>
      dispatch({
        type: actionType.get_data_StrangePoison_sortDesc,
        payloadSPDesc: res.data
      })
    )
}	
export const getData_strange_poison_popalarSort = () => dispatch=> {
  //api trang Độc lạ
  axios.get('/api/strange_poison/popalar_sort')
    .then(res =>
      dispatch({
        type: actionType.get_data_StrangePoison_popalarSort,
        payloadSPPopalar: res.data
      })
    )
}	