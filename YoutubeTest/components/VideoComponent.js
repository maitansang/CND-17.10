import React, {Component} from 'react';
import WebView from 'react-native-webview';

import { SearchBar } from 'react-native-elements';
import {Container, Header, Content, Card, Item, Input,
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

    const newData = this.arrayholder.filter(function(item) {
     
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: newData,
      search:text,
    });
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


  render() {
    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#FFF',
      },
      
    });

    return (

      <View>

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
            <Container>
              <Content>
                <Card >
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