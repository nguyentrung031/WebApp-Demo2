import axios from 'axios';
import actionType from '../consts/actionType';

export const getData_space = () => dispatch=> {
   //api trang Space 
   axios.get('/api/space')
     .then(res =>
       dispatch({
        type: actionType.get_data_space,
        payloadSpace: res.data
       })
    )
}
export const getData_space_sortdesc = () => dispatch=> {
   //api trang Space 
   axios.get('/api/space/new_sort_desc')
     .then(res =>
       dispatch({
        type: actionType.get_data_space_sortDesc,
        payloadSpaceSort: res.data
       })
    )
}
export const getData_space_popalarSort = () => dispatch=> {
   //api trang Space 
   axios.get('/api/space/popalar_sort')
     .then(res =>
       dispatch({
        type: actionType.get_data_space_popalarSort,
        payloadSpacePopalar: res.data
       })
    )
}