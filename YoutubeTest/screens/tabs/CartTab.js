import React, {Component} from 'react';
import {Container,Text,Content,Icon} from 'native-base';

export default class CartTab extends Component{
  static navigationOptions = {
    tabBarIcon: ({tintColor})=>{
      return<Icon name='cart' style={{color: tintColor}}></Icon>
    }
  }
  render(){
    return(<Container>
      <Content>
        <Text>
          This is Cart Tab
        </Text>

      </Content>

    </Container>)
  }
}
