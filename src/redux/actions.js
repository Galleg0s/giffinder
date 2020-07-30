import { GIFS_FETCH_REQUEST, SET_RESULTS, SET_ERROR, SET_ACTIVE_ITEM_ID, SET_OFFSET, SET_QUERY } from './constants';

export const setQuery = (query) => {
    return {
        type: SET_QUERY,
        payload: query,
    }
}


export const fetchGifs = () => {
    return {
        type: GIFS_FETCH_REQUEST,
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

export const setActiveItemId = id => {
    return {
        type: SET_ACTIVE_ITEM_ID,
        payload: id,
    }
}

export const setOffset = offset => {
    return {
        type: SET_OFFSET,
        payload: offset,
    }
}
