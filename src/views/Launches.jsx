import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchLaunchesIfNeeded } from '../actions/Launches';
import Launch from '../components/Launch';

class LaunchesView extends Component {
  componentDidMount() {
    const { fetchLaunches } = this.props;
    fetchLaunches();
  }

  getContent() {
    const { launchReducer } = this.props;

    if (!launchReducer || launchReducer.fetching) {
      return <div> LOADING </div>;
    }

    if (!launchReducer.launches.length) {
      return <div> NO DATA </div>;
    }

    return <ul>{this.renderLaunches()}</ul>;
  }

  renderLaunches() {
    const { launchReducer } = this.props;

    return launchReducer.launches.map(launch => {
      const isSelected = launchReducer.active === launch.flight_number;

      return (
        <Launch
          {...{
            key: launch.flight_number,
            isSelected,
            launch
          }}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h2> SpaceX launches </h2>
        {this.getContent()}
      </div>
    );
  }
}

const mapStateToProps = state => ({ launchReducer: state.launchReducer });

const mapDispatchToProps = dispatch => ({
  fetchLaunches: () => dispatch(fetchLaunchesIfNeeded())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LaunchesView);
