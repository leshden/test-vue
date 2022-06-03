import axios from 'axios'
import store from '../store';

const PATH_PORT = 'http://localhost:8080';
const REGIONS = '/filters';
const GROUPS = '/inbox-service/subjects'
const TYPES = '/inbox-service/subsubjects'

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

export function getTypes(region: number, group: number) {
  const SUB_TYPES = `/subject/${group}/region/${region}`;
  const path = PATH_PORT + TYPES + SUB_TYPES;
  getRequest(path, 'updateTypes');
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
