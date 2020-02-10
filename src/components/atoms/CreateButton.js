import React, {Component} from 'react';
import {Text,TouchableOpacity} from 'react-native';

export default class CreateButton extends Component {
  render() {
    return (
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#D5D5D5',
            height: 50,
            marginHorizontal: 3,
          }}
        >
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
            Create
          </Text>
        </TouchableOpacity>          
    );
  }
}


