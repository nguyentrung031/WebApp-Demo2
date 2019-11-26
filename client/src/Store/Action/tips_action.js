import axios from 'axios';
import actionType from '../consts/actionType';

export const getData_tips = () => dispatch=> {
    //api trang Tips
    axios.get('/api/tips')
    .then(res =>
      dispatch({
        type: actionType.get_data_Tips,
        payloadTips: res.data
      })
    )
}	
export const getData_tips_sortdesc = () => dispatch=> {
    //api trang Tips
    axios.get('/api/tips/new_sort_desc')
    .then(res =>
      dispatch({
        type: actionType.get_data_Tips_sortDesc,
        payloadTipsDesc: res.data
      })
    )
}	
export const getData_tips_popalarSort = () => dispatch=> {
    //api trang Tips
    axios.get('/api/tips/popalar_sort')
    .then(res =>
      dispatch({
        type: actionType.get_data_Tips_popalarSort,
        payloadTipsPopalar: res.data
      })
    )
}	