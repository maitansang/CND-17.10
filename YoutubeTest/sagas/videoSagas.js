import {FETCH_YOUTUBE,FETCH_SUCCEEDED} from '../actions/actionTypes';
import {put, takeLatest} from 'redux-saga/effects';
import {Api} from './Api';

function* fetchVideos() {
    try{
        const receivedVideos = yield  Api.getVideoFromApi();
        yield put ({type:FETCH_SUCCEEDED, receivedVideos: receivedVideos});
    }
    catch (e) {

    }
}

export function* watchFetchVideos() {
    yield takeLatest(FETCH_YOUTUBE, fetchVideos);
}
