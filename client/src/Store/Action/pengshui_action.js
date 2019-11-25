import axios from 'axios';
import actionType from '../consts/actionType';

export const getData_pengshui = () => dispatch=> {
   //api trang PengShui
   axios.get('/api/peng_shui')
     .then(res =>
       dispatch({
        type: actionType.get_data_PengShui,
        payloadPengShui: res.data
       })
     )
}	
export const getData_pengshui_sortdesc = () => dispatch=> {
   axios.get('/api/peng_shui/new_sort_desc')
     .then(res =>
       dispatch({
        type: actionType.get_data_PengShui_sortDesc,
        payloadPengShuiSort: res.data
       })
     )
}	
export const getData_pengshui_popalarSort = () => dispatch=> {
   axios.get('/api/peng_shui/popalar_sort')
     .then(res =>
       dispatch({
        type: actionType.get_data_PengShui_popalarSort,
        payloadPengShuiPopalar: res.data
       })
     )
}	