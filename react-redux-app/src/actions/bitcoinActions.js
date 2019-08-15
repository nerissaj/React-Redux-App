import axios from 'axios';

export const FETCH_BITCOIN_DATA_START = 'FETCH_BITCOIN_DATA_START';
export const FETCH_BITCOIN_DATA_SUCCESS = 'FETCH_BITCOIN_DATA_SUCCESS';
export const FETCH_BITCOIN_DATA_FAILURE = 'FETCH_BITCOIN_DATA_FAILURE';

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_BITCOIN_DATA_START });
    axios
      .get('https//exchange.bitcoin/api/trades?since=5')
      .then(res => {
        // res.data.data
        console.log(res);
        dispatch({ type: FETCH_BITCOIN_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_BITCOIN_DATA_FAILURE, payload: err.response });
      });
  };
};
