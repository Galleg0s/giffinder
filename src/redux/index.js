import {GIFS_FETCH_REQUEST, GIFS_FETCH_SUCCESS, GIFS_FETCH_FAILURE, SET_RESULTS, SET_ERROR} from './constants'

const initialState = {
    query: '',
    isLoading: false,
    error: '',
    results: [],
    displayedItemsCount: 10,
    currentPage: 1,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESULTS:
            return {
                ...state,
                results: action.payload,
            }
        case SET_ERROR: 
            return {
                ...state,
                error: action.payload,
            }
        case GIFS_FETCH_REQUEST:
            return {
                ...state,
                query: action.payload,
                isLoading: true,
            }
        case GIFS_FETCH_SUCCESS:
            return {
                ...state,
                results: action.payload,
                isLoading: false,
            }
        case GIFS_FETCH_FAILURE: 
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            }
        default: 
            return state;    
    }
}

export default rootReducer;