import { httpGet } from '../shared/apiHelpers';
// import APIEndpoint from '../shared/apiEndpoints';

export function fetchList() {
  return httpGet('http://localhost:3000/wp-definition-list')
    .then(response => response)
    .catch(err => Promise.reject(err));
}

export function fetchDetail(key) {
  return httpGet(`http://localhost:3000/wp-definition-list/?key=${key}`)
    .then(response => response)
    .catch(err => Promise.reject(err));
}
