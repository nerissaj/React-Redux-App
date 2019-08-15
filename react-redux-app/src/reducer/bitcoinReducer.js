import {
    FETCH_BITCOIN_DATA_START,
    FETCH_BITCOIN_DATA_SUCCESS,
    FETCH_BITCOIN_DATA_FAILURE
  } from '../actions';
  
  const initialState = {
    bitcoin: [],
    isLoading: false,
    error: ''
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BITCOIN_DATA_START:
        return {
          ...state,
          isLoading: true,
          error: ''
        };
      case FETCH_BITCOIN_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          webcams: action.payload,
          error: ''
        };
      default:
        return state;
    }
  };
  