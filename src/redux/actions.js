import { GIFS_FETCH_REQUEST, SET_RESULTS, SET_ERROR } from './constants';

export const fetchGifs = query => {
    return {
        type: GIFS_FETCH_REQUEST,
        payload: query,
    }
}

export const setResults = results => {
    return {
        type: SET_RESULTS,
        payload: results,
    }
}

export const setError = error => {
    return {
        type: SET_ERROR,
        payload: error,
    }
}
