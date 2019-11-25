import axios from 'axios';
import actionType from '../consts/actionType';

export const getData_style = () => dispatch=> {
	 //api trang Style 
	 axios.get('/api/style')
	 	.then(res =>
		 	dispatch({
				type: actionType.get_data_style,
				payloadStyle: res.data
		 	})
	 	)
}
export const getData_style_sortdesc = () => dispatch=> {
	 axios.get('/api/style/new_sort_desc')
	 	.then(res =>
		 	dispatch({
				type: actionType.get_data_style_sortDesc,
				payloadStyleSortDesc: res.data
		 	})
	 	)
}
export const getData_style_popalarSort = () => dispatch=> {
	 axios.get('/api/style/popalar_sort')
	 	.then(res =>
		 	dispatch({
				type: actionType.get_data_style_popalarSort,
				payloadStylePopalar: res.data
		 	})
	 	)
}