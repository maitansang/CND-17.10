import {} from 'react-native';
import VideoComponent from '../components/VideoComponent';
import {connect} from 'react-redux';
import {fetchSuccessAction} from '../actions';
import {fetchVideoAction} from '../actions';
import PlanetTab from '../screens/tabs/PlanetTab';

const mapStateToProps = (state) => {
    // console.log(`this is on container parse: ${JSON.stringify(state)}`)
    return{
        videos: state.videoReducers
    };
};
const mapDispatchToProps = (dispatch) => {
    return{
        onFetchVideos: ()=>{
            dispatch(fetchVideoAction());
        },
    };
};
const VideoContainer = connect(mapStateToProps,mapDispatchToProps)(VideoComponent, PlanetTab);
export default VideoContainer;
