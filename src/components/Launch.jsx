import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocket } from '../actions/Rockets';
import { setActiveLaunch } from '../actions/Launches';

const Launch = ({ isSelected, launch }) => {
  const dispatch = useDispatch();
  const rocket = useSelector(state => {
    return state.rocketReducer.rockets[launch.rocket.rocket_id]
  })
  
  const renderDetails = () => (
    <div>
      <div> Flight Number: {launch.flight_number} </div>
      <div> Rocket ID: {launch.rocket.rocket_id} </div>
      <div> Cost per launch: {rocket && rocket.cost_per_launch} </div>
      <div> Details: {launch.details} </div>
    </div>
  );

  const openLink = () => {
    dispatch(setActiveLaunch(launch.flight_number))
    dispatch(fetchRocket(launch.rocket.rocket_id))
  }

  return (
    <li
      style={{ cursor: 'pointer' }}
      aria-hidden="true"
      onClick={() => openLink(launch)}
    >
      <h2> {launch.mission_name} </h2>
      {isSelected && renderDetails()}
    </li>
  );
};

Launch.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  launch: PropTypes.shape({
    mission_name: PropTypes.string,
    flight_number: PropTypes.number,
    details: PropTypes.string,
    rocket: PropTypes.shape({
      rocket_id: PropTypes.string
    })
  }).isRequired
};

export default Launch;
