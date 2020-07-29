
import { call, put, takeLatest, takeEvery, select } from 'redux-saga/effects';
import {GIFS_FETCH_REQUEST, GIFS_FETCH_SUCCESS, GIFS_FETCH_FAILURE} from './constants';
import {getQuery, getDisplayedItemsCount} from './selectors';

let visibleImagesCounter = 0;
const IMAGES_ON_PAGE = 2;

function* fetchGif(action) {
    try {
        let query = yield select(getQuery)
        const displayedItemsCount = yield select(getDisplayedItemsCount);

        let response = yield fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=eHaT0hr1fJ39LqiMgJSLJ95MUFddwA0F&limit=${displayedItemsCount}&offset=${visibleImagesCounter}`);
        let { data } = yield response.json();
        
        visibleImagesCounter += IMAGES_ON_PAGE;

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