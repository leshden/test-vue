import axios from 'axios'
import store from '../store';

const PATH_PORT = 'http://localhost:8080';
const REGIONS = '/filters';
const GROUPS = '/inbox-service/subjects'

export function getRegions() {
  const path = PATH_PORT + REGIONS;
  getRequest(path, 'updateRegions');
}

export function getGroups() {
  const path = PATH_PORT + GROUPS;
  getRequest(path, 'updateGroups');
}

export function getDataFromServer() {
  getRegions();
  getGroups();
}

function getRequest(path: string, action: string) {
 console.log(path);
  axios.get(path)
  .then(response => {
    const result = response.data;
    store.dispatch(action, result);
    console.log(result);
  })
  .catch(error => {
    console.log(error)
  })
}
