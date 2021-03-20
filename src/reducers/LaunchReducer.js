import { ACTIONS } from '../actions/Launches';

const initialState = {
  active: null,
  launches: [],
  fetching: false
};

const actionHandlers = {
  [ACTIONS.REQUEST_LAUNCHES]: ({ state }) => ({
    ...state,
    fetching: true
  }),
  [ACTIONS.RECEIVE_LAUNCHES]: ({ state, action }) => ({
    ...state,
    fetching: false,
    launches: [...state.launches, ...action.payload.launches]
  }),
  [ACTIONS.SET_ACTIVE_LAUNCH]: ({ state, action }) => ({
    ...state,
    active: state.active === action.payload.launch ? false : action.payload.launch
  })
};

export default (state = initialState, action) =>
  actionHandlers[action.type] ? actionHandlers[action.type]({ state, action }) : state;
