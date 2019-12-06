

// const urlGetVideos = 'http://164.132.226.137:9999/youtuber/feeds/searchByCommunityName?name=football4';
const urlGetVideos = 'http://5dc2dd9a1666f6001477f5ee.mockapi.io/videos/sang';

function* getVideoFromApi(){
    const json = yield fetch(urlGetVideos,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    }).then(json => json.json());
    console.log(json);
    // this.setState({
    //     data:this.state.json.concat(data),
    //     page:this.state.page + 1
    // })
    // const videos = yield (json);
    return json;
}

export  const Api={
    getVideoFromApi, urlGetVideos,
};
