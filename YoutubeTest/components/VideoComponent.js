import React, {Component} from 'react';
import WebView from 'react-native-webview';
import {Container, Header, Content, Card,Item,Input, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title,DeckSwiper,CardSwiper } from 'native-base';
import {
     TouchableOpacity, View, Image, Platform, TextInput, FlatList,StyleSheet
} from 'react-native';

export default class VideoComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            page:1
        };
    }

  getUrl(url) {
    let separator = "videos/";
    let newUrl ="none";
      let index = url.indexOf(separator);
      if (index > 0){
        let urlsplt = url.split(separator, 2);
        let id = urlsplt[1].split("/");
        newUrl = "https://www.facebook.com/video/embed?video_id=" + id;
      }
    return newUrl;
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
      const styles = StyleSheet.create({
        container: {
          backgroundColor: "#FFF"
        },
        mb: {
          marginBottom: 15
        }
      });

        return(



            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
              <Header searchBar rounded>
                <Item>
                  <Icon name="ios-search" />
                  <Input placeholder="Search" />
                  <Icon name="ios-people" />
                </Item>
                <Button transparent>
                  <Text>Search</Text>
                </Button>
              </Header>
                <View style={{ height: 100, margin: 10 }}>
                    {/*<TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1 }}*/}
                    {/*           onChangeText={(text) => this.setState({ movieName: text })}*/}
                    {/*           value={this.state.movieName}*/}
                    {/*           placeholder='Enter new video '*/}
                    {/*/>*/}
                    {/*<TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1, width: 120 }}*/}
                    {/*           onChangeText={(text) => this.setState({ releaseYear: text })}*/}
                    {/*           value={this.state.releaseYear}*/}
                    {/*           placeholder='Enter some thing'*/}
                    {/*           keyboardType='numeric'*/}
                    {/*/>*/}
                  {/*<Button  style={{color: '#87838B'}}*/}
                  {/*         onPress={() => {*/}
                  {/*           this.props.onFetchVideos();*/}
                  {/*         }}>*/}
                  {/*  <Icon name="logo-github" />*/}
                  {/*  <Text>1,926 stars</Text>*/}
                  {/*</Button>*/}
                  <Button rounded warning style={{tintcolor: 'black'}}
                          onPress={() => {
                            this.props.onFetchVideos();
                          }}>
                    <Text>FBI Warning</Text>
                  </Button>
                </View>

                {/*<View style={{ height: 70, flexDirection: 'row' }}>*/}
                {/*    <Button*/}
                {/*        */}
                {/*        onPress={() => {*/}
                {/*            this.props.onFetchVideos();*/}
                {/*        }}>*/}
                {/*        Fetch videos*/}
                {/*    </Button>*/}
                {/*</View>*/}



                <FlatList

                    data={this.props.videos}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item, index }) => <View>
                      <Container style={styles.container}>
                        <Content>
                          <Card style={styles.mb}>
                            <CardItem>
                              <Left>
                                <Thumbnail source={{uri: `${item.avatar}`}} />
                                <Body>
                                  <Text>{item.name}</Text>
                                  <Text note>{item.createdAt}</Text>
                                </Body>
                              </Left>
                            </CardItem>
                            <CardItem>
                            <View style={{height: 300, width: '100%'}}>

                              <Text>{item.title}</Text>
                              <WebView
                                javaScriptEnabled={true}
                                domStorageEnabled={true}
                                style={{backgroundColor: 'grey', width: '100%'}}

                                source={{uri: `${item.url}`}}
                              />
                            </View>
                            </CardItem>
                            <CardItem style={{ paddingVertical: 0 }}>
                              <Left>
                                <Button transparent>
                                  <Icon active name="thumbs-up" color="pink" />
                                  <Text>{item.likes} likes</Text>
                                </Button>
                              </Left>
                              <Body>
                                <Button transparent>
                                  <Icon active name="chatbubbles" />
                                  <Text>{item.comments} comments</Text>
                                </Button>
                              </Body>
                              <Right>
                                <Text>11h ago</Text>
                              </Right>
                            </CardItem>
                          </Card>
                        </Content>
                      </Container>
                    {/*  <View style={{height: 200, width: '100%'}}>*/}
                    {/*    <WebView*/}
                    {/*      scrollEnabled={true}*/}
                    {/*      javaScriptEnabled={true}*/}
                    {/*      domStorageEnabled={true}*/}
                    {/*      // source={{uri: this.getUrl(item.url)}}*/}
                    {/*      source={{uri:"https://www.youtube.com/watch?v=Glinma-h25M"}}*/}

                    {/*    />*/}
                    {/*    <View style={{flexDirection: 'row' }}>*/}
                    {/*      <TouchableOpacity>*/}
                    {/*        <AntDesign name={'like1'}*/}
                    {/*                   size={20}*/}
                    {/*                   style={{color: 'blue',flexDirection: 'row' }}>*/}
                    {/*          <Text>{`${item.likes}`}</Text>*/}
                    {/*        </AntDesign>*/}
                    {/*      </TouchableOpacity>*/}

                    {/*      <AntDesign name={'sharealt'}*/}
                    {/*                 size={20}*/}
                    {/*                 style={{color: 'blue',flexDirection: 'row' }}>*/}

                    {/*        <Text>{`${item.shares}`}</Text>*/}
                    {/*      </AntDesign>*/}
                    {/*    </View>*/}
                    {/*  </View>*/}
                    </View>
                    }

                    ListFooterComponent={this.myFooter}

                />

            </View>);

    }


}
//
