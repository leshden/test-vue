import axios from 'axios'
import store from '../store';

const PATH_PORT = 'http://localhost:8080';
const REGIONS = '/filters';

export function getRegions() {
  const path = PATH_PORT + REGIONS;
 console.log(path);
  axios.get(path)
  .then(response => {
    store.state.regions = response.data;
    console.log(store.state.regions);
  })
  .catch(error => {
    console.log(error)
  })
}
