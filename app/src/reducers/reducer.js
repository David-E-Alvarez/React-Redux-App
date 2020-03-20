//intitial state; updates here

import {
    FETCH_BOOKS_START,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAIL
  } from '../actions/actions';

  
const initialState = {
    books: [],
    error: '',
    isFetching: false
  };

function reducer(state = initialState, action){
    console.log('reducer', action);
    switch (action.type) {
        case FETCH_BOOKS_START:
          return {
            ...state,
            isFetching: true,
            error: ''
          };
        case FETCH_BOOKS_SUCCESS:
          return {
            ...state,
            books: action.payload,
            isFetching: false,
            error: ''
          };
        case FETCH_BOOKS_FAIL:
          return {
            ...state,
            error: action.payload
          };
        default:
          return state;
      }
}

export default reducer;

