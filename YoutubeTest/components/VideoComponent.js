import React, {Component} from 'react';
import Button from 'react-native-button';
import Youtube from 'react-native-youtube';
import HTML from 'react-native-render-html';
import WebView from 'react-native-webview';
import {


    ScrollView, TouchableOpacity, Dimensions, Text, View, Image, Alert, Platform, TextInput, FlatList, default as Linking, StyleSheet
} from 'react-native';
import Video from 'react-native-video';

export default class VideoComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            page:1
        };
    }

    myFooter = () => {
        return(
            <View style={{padding:10}}>
                <TouchableOpacity
                    style={{backgroundColor:'#fff', alignItems:'center', borderRadius:20,
                    padding:10, borderWidth:1, borderColor:'gray', width:'100%'
                    }}>
                    <Text style={{color:'gray', fontSize:16}}>More result</Text>

                </TouchableOpacity>
            </View>
        )
    }

    render(){
        const {currentTime, duration, paused, overlay}= this.state;
        return(



            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <WebView
                    source={{uri: 'https://github.com/facebook/react-native'}}
                    // style={{marginTop: 20}}
                />

                {/*<ScrollView>*/}
                {/*    <View style={{height: 200, width: '100%'}}>*/}
                {/*        <WebView*/}
                {/*            scrollEnabled={true}*/}
                {/*            javaScriptEnabled={true}*/}
                {/*            domStorageEnabled={true}*/}
                {/*            source={{uri: 'https://www.youtube.com/embed/OSZD0K72Aic'}}*/}
                {/*        />*/}
                {/*    </View>*/}

                {/*    <View style={{height: 200, width: '100%'}}>*/}
                {/*        <WebView*/}
                {/*            scrollEnabled={true}*/}
                {/*            javaScriptEnabled={true}*/}
                {/*            domStorageEnabled={true}*/}
                {/*            source={{uri: 'https://www.youtube.com/embed/OSZD0K72Aic'}}*/}
                {/*        />*/}
                {/*    </View>*/}
                {/*    <View style={{height: 200, width: '100%'}}>*/}
                {/*        <WebView*/}
                {/*            scrollEnabled={true}*/}
                {/*            javaScriptEnabled={true}*/}
                {/*            domStorageEnabled={true}*/}
                {/*            source={{uri: 'https://www.youtube.com/embed/OSZD0K72Aic'}}*/}
                {/*        />*/}
                {/*    </View>*/}
                {/*    <View style={{height: 200, width: '100%'}}>*/}
                {/*        <WebView*/}
                {/*            scrollEnabled={true}*/}
                {/*            javaScriptEnabled={true}*/}
                {/*            domStorageEnabled={true}*/}
                {/*            source={{uri: 'https://www.youtube.com/embed/OSZD0K72Aic'}}*/}
                {/*        />*/}
                {/*    </View>*/}
                {/*    <View style={{height: 200, width: '100%'}}>*/}
                {/*        <WebView*/}
                {/*            scrollEnabled={true}*/}
                {/*            javaScriptEnabled={true}*/}
                {/*            domStorageEnabled={true}*/}
                {/*            source={{uri: 'https://www.facebook.com/video/embed?video_id=1167252116799086'}}*/}
                {/*        />*/}
                {/*    </View>*/}
                {/*    <View style={{height: 200, width: '100%'}}>*/}
                {/*        <WebView*/}
                {/*            scrollEnabled={true}*/}
                {/*            javaScriptEnabled={true}*/}
                {/*            domStorageEnabled={true}*/}
                {/*            source={{uri: 'https://www.facebook.com/video/embed?video_id=2021911594579013'}}*/}
                {/*        />*/}
                {/*    </View>*/}
                {/*</ScrollView>*/}
                <Text style={{ margin: 10, fontWeight: 'bold', color: 'forestgreen', fontSize: 20 }}>
                    Redux Saga tutorials - Videos of Youtube list
                </Text>

                <Text style={{ margin: 10, color: 'black', fontSize: 20 }}>
                    New video information
                </Text>
                <View style={{ height: 100, margin: 10 }}>
                    <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1 }}
                               onChangeText={(text) => this.setState({ movieName: text })}
                               value={this.state.movieName}
                               placeholder='Enter new video '
                    />
                    <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1, width: 120 }}
                               onChangeText={(text) => this.setState({ releaseYear: text })}
                               value={this.state.releaseYear}
                               placeholder='Enter some thing'
                               keyboardType='numeric'
                    />
                </View>
                <View style={{ height: 70, flexDirection: 'row' }}>
                    <Button
                        containerStyle={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                        style={{ fontSize: 18, color: 'white' }}
                        onPress={() => {
                            this.props.onFetchVideos();
                        }}>
                        Fetch videos
                    </Button>
                    <Button
                        containerStyle={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                        style={{ fontSize: 18, color: 'white' }}
                        onPress={() => {
                            // const {movieName, releaseYear} = this.state;
                            // if (!movieName.length || !releaseYear.length){
                            //     alert('You must enter movie name and release year');
                            //     return;
                            // }
                            // this.props.on({name: movieName, releaseYear: releaseYear});

                        }}>
                        Add Something ("Don't care!!!!")
                    </Button>


                </View>



                <FlatList
                    data={this.props.videos}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item, index }) => <Text style={{
                        // padding: 50,
                        // // fontWeight: 'bold',
                        // color: 'white',
                        backgroundColor: (index % 2 === 0) ? 'dodgerblue' : 'mediumseagreen'
                    }}>
                        {`${item.title},url=${item.url}`}
                        {/*<View style={{height: 300, width: '100%'}}>*/}
                        {/*    <WebView*/}
                        {/*        scrollEnabled={true}*/}
                        {/*        javaScriptEnabled={true}*/}
                        {/*        domStorageEnabled={true}*/}
                        {/*        source={{uri: `${item.url}`}}*/}
                        {/*    />*/}
                        {/*</View>*/}
                        {/*<WebView*/}
                        {/*    source={{uri: `${item.url}`}}*/}
                        {/*    style={{marginTop: 50}}*/}
                        {/*/>*/}



                    </Text>
                    }
                    ListFooterComponent={this.myFooter}
                />
            </View>);
    }
}
