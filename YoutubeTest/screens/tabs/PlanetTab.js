import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon } from 'native-base';
import {FlatList, View} from 'react-native';

export default class PlanetTab extends Component{
  constructor(props){

    super(props);
    this.props.onFetchVideos();
    this.state = {
    };
  }
  render() {
    return (
      <View >
        <FlatList
          data={this.props.videos}
          keyExtractor={(item) => item.name}
          renderItem={({ item, index }) =><View>
            <List>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={{ uri: `${item.avatar}` }} />
                </Left>
                <Body>
                  <Text>Sankhadeep</Text>
                  <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>
          </View>}
        />
      </View>
    );
  }
}
