import axios from 'axios';

const SERVICES_URL = 'https://api.spacexdata.com/v3';
const launchesUrl = `${SERVICES_URL}/launches`;
const rocketsUrl = `${SERVICES_URL}/rockets/`;

const api = axios.create();

const launchService = {
  getLaunches: () => api.get(`${launchesUrl}/`),
  getRocket: (id) => api.get(`${rocketsUrl}${id}`),
};

export default launchService;
