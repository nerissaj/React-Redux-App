import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData } from '../actions';

import Bitcoin from './bitcoin';

const BitcoinList = props => {
  return (
    <>
      <h1>Welcome to the Bitcoin charts!</h1>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="tailspin" color="#00BFFF" height="15" width="100" />
        ) : (
          'Get Bitcoin Data'
        )}
      </button>
      {props.bitcoin &&
        props.bitcoin.map(bitcoin => <Bitcoin key={bitcoin.tid} bitcoin={bitcoin} />)}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    bitcoin: state.bitcoin
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(BitcoinList);

// TASKS
// - get BitcoinList connected to the Redux store
// - Bring in the `test` property from state
// - if done correctly, you should see "It's working" dipslayed in the app
// GOOD LUCK 😃
