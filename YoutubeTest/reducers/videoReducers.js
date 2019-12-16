import {FETCH_SUCCEEDED, FETCH_YOUTUBE} from '../actions/actionTypes';

const videoReducers = (videos = [], action) => {
    switch (action.type) {
        case FETCH_SUCCEEDED:
            console.log (`videos in reducers:`);
            return action.receivedVideos;

            default:
            return videos;
    }
}
export default videoReducers;
