import axios from 'axios';

export function httpGet(url) {
  return axios.get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
}

export default {
  httpGet,
};
