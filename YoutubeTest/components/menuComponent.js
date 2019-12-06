import React from 'react';
import {StyleSheet, Text, View, BackHandler, Button, Alert} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import VideoContainer from '../containers/VideoContainer';
import {Icon,Container, Content} from 'native-base';
import BookTab from '../screens/tabs/BookTab';

class HomeScreen extends React.Component {
  render() {
    return(
      <VideoContainer/>
    );
  }
}

class FavouriteScreen extends React.Component {
  render() {
    return(
      <Container>
        <Content>
          <Text>
            This is Favourite Tab
          </Text>
        </Content>
      </Container>
    );
  }
}

class NotificationScreen extends React.Component{
  render() {
    return(
      <Container>
        <Content>
          <Text>
            This is Planet Tab
          </Text>
        </Content>
      </Container>
    );
  }
}

class Setting extends React.Component {
  showAlert1(){
    Alert.alert(
      'Sang ask you',
      'exit?',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => BackHandler.exitApp()},
      ],
      {cancelable: false},
    )
  }
  +
  render() {
    return(


      <Container>
        <Content>
          <Button title="exit?" onPress={this.showAlert1}>

          </Button>
        </Content>
      </Container>
    );
  }
}

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name='home' style={{color: tintColor}}></Icon>
        )
      }
    },
    Explore: {
      screen: BookTab,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name='heart' style={{color: tintColor}}></Icon>
        )
      }
    },
    Notifications: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name='globe' style={{color: tintColor}}></Icon>
        )
      }
    },
    Add: {
      screen: Setting,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name='settings' style={{color: tintColor}}></Icon>
        )
      }
    },

  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: 'white',
      },
      activeTintColor: 'red',
      inactiveTintColor: 'pink',
      initialRouteName: 'Home',
      // tabBarOptions: {
      //   activeTintColor: '#eb6e3d'
      // }
    }
  }
);

export default AppContainer = createAppContainer(bottomTabNavigator);
