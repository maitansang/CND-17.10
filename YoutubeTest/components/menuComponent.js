import React from 'react';
import {StyleSheet, Text, View, BackHandler, Button, Alert,Image,TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import VideoContainer from '../containers/VideoContainer';
import {Icon,Container, Content} from 'native-base';
import BookTab from '../screens/tabs/BookTab';
import { createStackNavigator } from 'react-navigation-stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Favourite from '../screens/tabs/Favourite';
import BasketTab from '../screens/tabs/BasketTab';

export default class menuComponent extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
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
      screen: BasketTab,
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
      screen: BookTab,
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
const AppNavigator = createAppContainer(createStackNavigator({
  BottomTabNavigator: bottomTabNavigator
},{
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:"#121212",
      borderBottomWidth: 0
    },
    headerLeft:<Image
      source={{uri:'https://raw.githubusercontent.com/Chandankkrr/react-native-youtube-ui/master/assets/images/yt_logo_rgb_dark.png'}}
      style={{height:22,width:98,marginLeft:10,}}
    />,
    headerRight:(
      <View style={{ flexDirection: 'row', marginRight: 10 }}>
        <TouchableOpacity style={{ paddingHorizontal: 15 }}>
          <Text><Feather name='cast' size={25} color={'#fff'}>
          </Feather>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingHorizontal: 15 }}>
          <Text><MaterialIcons  name='videocam' size={25} color={'#fff'}>
          </MaterialIcons>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingHorizontal: 15 }}>
          <Text><FontAwesome5  name='search' size={25} color={'#fff'}>
          </FontAwesome5>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingHorizontal: 15 }}>
          <Text><MaterialCommunityIcons  name='account-circle' size={25} color={'#fff'}>
          </MaterialCommunityIcons>
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}));
