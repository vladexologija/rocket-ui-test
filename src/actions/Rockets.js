import api from '../services/API';
import { selectRockets } from '../selectors'

export const ACTIONS = {
  REQUEST_ROCKET: 'REQUEST_ROCKET',
  RECEIVE_ROCKET: 'RECEIVE_ROCKET'
};

export const requestRocket = () => ({
  type: ACTIONS.REQUEST_ROCKET
});

const receiveRocket = response => ({
  type: ACTIONS.RECEIVE_ROCKET,
  payload: {
    rocket: response.data
  }
});

export const fetchRocket = (id) => (dispatch, getState) => {
  const alreadyFetched = selectRockets(getState())[id]
  if (alreadyFetched) return alreadyFetched
  
  dispatch(requestRocket());
  return api.getRocket(id).then(response => dispatch(receiveRocket(response)));
};

