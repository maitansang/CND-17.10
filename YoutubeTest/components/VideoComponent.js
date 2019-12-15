import React, {Component} from 'react';
import WebView from 'react-native-webview';

import { SearchBar } from 'react-native-elements';
import {
  Container,
  Header,
  Content,
  Card,
  Item,
  Input,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Title,
  DeckSwiper,
  CardSwiper,
} from 'native-base';
import {
  TouchableOpacity, View, Image, Platform, TextInput, FlatList, StyleSheet,
} from 'react-native';


export default class VideoComponent extends Component {
  constructor(props) {

    super(props);
    this.props.onFetchVideos();
    this.state = { isLoading: true, search: '' };
    this.arrayholder = [];
  }
  search = text => {
    console.log(text);
  };
  clear = () => {
    this.search.clear();
  };
  componentDidMount() {
    return fetch('http://5dc2dd9a1666f6001477f5ee.mockapi.io/videos/sang')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function() {
            this.arrayholder = responseJson;
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search:text,
    });
  }

  getUrl(url) {
    let separator = 'videos/';
    let newUrl = 'none';
    let index = url.indexOf(separator);
    if (index > 0) {
      let urlsplt = url.split(separator, 2);
      let id = urlsplt[1].split('/');
      newUrl = 'https://www.facebook.com/video/embed?video_id=' + id;
    }
    return newUrl;
  }

  myFooter = () => {

    return (


      <View style={{padding: 10}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#fff', alignItems: 'center', borderRadius: 20,
            padding: 10, borderWidth: 1, borderColor: 'gray', width: '100%',
          }}>
          <Text style={{color: 'gray', fontSize: 16}}>More result</Text>

        </TouchableOpacity>

      </View>
    );
  };

  onChangeText=(text)=>{
    this.setState({
      input:text
    })
  }
  render() {
    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#FFF',
      },
      mb: {
        marginBottom: 15,
      },
    });

    return (
      // var {filterVideo, list} = this.state;
      // if (filterVideo) {
      //   list = list.filter((i) => {
      //     return i.description.toLowerCase().indexOf(filterVideo.toLowerCase()) !== -1;
      //   });
      // }
      // return (
      //   <View style={{flex: 1}}>
      //     <SearchBar
      //       placeholder="Type Here..."
      //       value={filterVideo}
      //       onChangeText={this.onChange}
      //     />

      <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
        {/*<Header searchBar rounded>*/}
        {/*  <Item>*/}
        {/*    <Icon name="ios-search"/>*/}
        {/*    <Input placeholder="Search"/>*/}
        {/*    <Icon name="ios-people"/>*/}
        {/*  </Item>*/}
        {/*  <Button transparent>*/}
        {/*    <Text>Search</Text>*/}
        {/*  </Button>*/}
        {/*</Header>*/}

        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="Type Here..."
          value={this.state.search}
        />

        <FlatList

          data={this.props.videos}
          keyExtractor={(item) => item.name}
          renderItem={({item, index}) => <View>
            <Container style={styles.container}>
              <Content>
                <Card style={styles.mb}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{uri: `${item.avatar}`}}/>
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
                  <CardItem style={{paddingVertical: 0}}>
                    <Left>
                      <Button transparent>
                        <Icon active name="thumbs-up" color="pink"/>
                        <Text>{item.likes} likes</Text>
                      </Button>
                    </Left>
                    <Body>
                      <Button transparent>
                        <Icon active name="chatbubbles"/>
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

          </View>
          }
          ListFooterComponent={this.myFooter}
        />

      </View>);

  }


}
//
