
import { put, takeLatest, select } from 'redux-saga/effects';
import {GIFS_FETCH_REQUEST, GIFS_FETCH_SUCCESS, GIFS_FETCH_FAILURE} from './constants';
import {getQuery, getDisplayedItemsCount, getOffset} from './selectors';

function* fetchGif(action) {
    debugger;
    try {
        const query = yield select(getQuery);
        const offset = yield select(getOffset);
        const displayedItemsCount = yield select(getDisplayedItemsCount);

        const response = yield fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=eHaT0hr1fJ39LqiMgJSLJ95MUFddwA0F&limit=${displayedItemsCount}&offset=${offset}`);
        const { data } = yield response.json();
        
        // visibleImagesCounter += IMAGES_ON_PAGE;

        if (data.length > 0) {
            yield put({type: GIFS_FETCH_SUCCESS, payload: data })
        } else {
            yield put({type: GIFS_FETCH_FAILURE, payload: 'Gifs not found!'});
        }      
    } catch (e) {
        yield put({type: GIFS_FETCH_FAILURE, payload: e.message});
    }
}

function* rootSaga() {
    yield takeLatest(GIFS_FETCH_REQUEST, fetchGif);
}

export default rootSaga;