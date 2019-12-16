import {call, all, fork} from 'redux-saga/effects';
import {watchFetchVideos} from './videoSagas';
export default function* rootSaga(){
    yield all ([
        watchFetchVideos()
    ]);
}
