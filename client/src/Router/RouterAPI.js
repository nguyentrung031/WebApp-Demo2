import axios from 'axios';
export function Params(url, method = 'GET', body) {
  return axios({
    method: method,
    url: url,
    params: body
  })
    .catch(error => {
      console.log(error)
    });
};