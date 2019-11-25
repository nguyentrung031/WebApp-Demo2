import axios from 'axios';
import actionType from '../consts/actionType';

export const getData_supplies= () => dispatch=> {
    //api trang vật tư
  axios.get('/api/supplies')
    .then(res =>
      dispatch({
        type: actionType.get_data_Supplies,
        payloadSupplies: res.data
      })
    )
}	
export const getData_supplies_sortdesc= () => dispatch=> {
    //api trang vật tư
  axios.get('/api/supplies/new_sort_desc')
    .then(res =>
      dispatch({
        type: actionType.get_data_Supplies_sortDesc,
        payloadSuppliesDesc: res.data
      })
    )
}	
export const getData_supplies_popalar_sort= () => dispatch=> {
    //api trang vật tư
  axios.get('/api/supplies/popalar_sort')
    .then(res =>
      dispatch({
        type: actionType.get_data_Supplies_popalarSort,
        payloadSuppliesPopalar: res.data
      })
    )
}	