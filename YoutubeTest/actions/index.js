import {FETCH_YOUTUBE, FETCH_SUCCEEDED} from './actionTypes';

export const fetchVideoAction = () =>{
    return{
        type: FETCH_YOUTUBE,
    }
}

export const fetchSuccessAction = (receivedVideos) =>{
    return{
        type: FETCH_SUCCEEDED,
        receivedVideos
    }
}
