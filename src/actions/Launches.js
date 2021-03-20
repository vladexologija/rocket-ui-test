import api from '../services/API';

export const ACTIONS = {
  REQUEST_LAUNCHES: 'REQUEST_LAUNCHES',
  RECEIVE_LAUNCHES: 'RECEIVE_LAUNCHES',
  SET_ACTIVE_LAUNCH: 'SET_ACTIVE_LAUNCH'
};

export const requestLaunches = () => ({
  type: ACTIONS.REQUEST_LAUNCHES
});

const receiveLaunches = response => ({
  type: ACTIONS.RECEIVE_LAUNCHES,
  payload: {
    launches: response.data
  }
});

export const setActiveLaunch = launch => {
  return {
    type: ACTIONS.SET_ACTIVE_LAUNCH,
    payload: {
      launch
    }
  }
};

export const fetchLaunches = () => dispatch => {
  dispatch(requestLaunches());
  return api.getLaunches().then(response => dispatch(receiveLaunches(response)));
};

const shouldFetchLaunches = launchReducer => !launchReducer || !launchReducer.fetching;

export const fetchLaunchesIfNeeded = () => (dispatch, getState) => {
  const { launchReducer } = getState()
  return shouldFetchLaunches(launchReducer)  && dispatch(fetchLaunches());
}
