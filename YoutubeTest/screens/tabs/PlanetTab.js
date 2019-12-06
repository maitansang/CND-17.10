import React, {Component} from 'react';
import {Container,Text,Content,Icon} from 'native-base';

export default class PlanetTab extends Component{
  static navigationOptions = {
    tabBarIcon: ({tintColor})=>{
      return<Icon name='md-home' style={{color: tintColor}}></Icon>
    }
  }
  render(){
    return(<Container>
      <Content>
        <Text>
          This is Planet Tab
        </Text>
      </Content>
    </Container>)
  }
}
