import { httpGet } from '../shared/apiHelpers';
// import APIEndpoint from '../shared/apiEndpoints';

export function fetchList(wp_key) {
  return httpGet(`http://localhost:3000/wp-instance-list/?wp_key=${wp_key}`)
    .then(response => response)
    .catch(err => Promise.reject(err));
}
