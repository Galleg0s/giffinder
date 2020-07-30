import { SET_QUERY, GIFS_FETCH_REQUEST, GIFS_FETCH_SUCCESS, GIFS_FETCH_FAILURE, SET_RESULTS, SET_ERROR, SET_ACTIVE_ITEM_ID, SET_OFFSET } from './constants'

const initialState = {
    query: '',
    isLoading: false,
    error: '',
    results: [],
    displayedItemsCount: 10,
    currentPage: 1,
    activeItemId: null,
    offset: 0,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUERY:
            return {
                ...state,
                query: action.payload,
            }
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
        case SET_ACTIVE_ITEM_ID:
            return {
                ...state,
                activeItemId: action.payload,
            }
        case SET_OFFSET:
            return {
                ...state,
                offset: action.payload,
            }
        case GIFS_FETCH_REQUEST:
            return {
                ...state,
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