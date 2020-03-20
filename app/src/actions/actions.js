//action types and actions creators
//fetch
import axios from 'axios';
export const FETCH_BOOKS_START = 'FETCH_BOOKS_START';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAIL = 'FETCH_BOOKS_FAIL';

export const getBooks = () => dispatch => {
  dispatch({ type: FETCH_BOOKS_START });
  axios
    .get('http://openlibrary.org/subjects/love.json?limit=10')
    .then(res =>
      dispatch({ type: FETCH_BOOKS_SUCCESS, payload: res.data.works })
    )
    .catch(err => dispatch({ type: FETCH_BOOKS_FAIL, payload: err }));
};


//res.data.results