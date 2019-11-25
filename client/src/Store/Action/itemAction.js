import axios from 'axios';
import actionType from '../consts/actionType';

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

