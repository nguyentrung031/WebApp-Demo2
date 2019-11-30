import axios from 'axios';
import actionType from '../consts/actionType';

export const getData_Tendency = () => dispatch=> {
   // api trang Tendency,
  axios.get('/api/tendency')
    .then(res =>
       dispatch({
        type: actionType.get_data_tendency,
        payload: res.data
     })
   )
}
//action sapxep theo moi nhat
export const getData_Tendency_newSort = () => dispatch=> {
  axios.get('/api/tendency/new_sort_desc')
    .then(res =>
       dispatch({
        type: actionType.get_data_tendency_sortDest,
        payloadTendencySort: res.data
     })
   )
}
//action sap xep theo luot xem
export const getData_Tendency_popalarSort = () => dispatch=> {
  axios.get('/api/tendency/popalar_sort')
    .then(res =>
       dispatch({
        type: actionType.get_data_tendency_popalarSort,
        payloadTendencyPopalar: res.data
     })
   )
}
//action items phân trang
export const getData_Tendency_items = () => dispatch=> {
  const params = new URLSearchParams(window.location.search);
  const page = parseInt(params.get('page')) || 1;
    axios.get(`/api/tendency/items?page=${page}`)
    .then(res =>
      dispatch({
       type: actionType.get_data_tendency_items,
       payloadTendencypager: res.data.pager,
       payloadTendencypageof: res.data.pageOfItems,
    })
  )
}
 