import actionType from '../consts/actionType';
export const getData = (value) => { return { type: actionType.GET_DATA, value: value }}