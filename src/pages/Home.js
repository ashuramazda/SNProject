import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default class Home extends Component { 
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>Welcom to SoundFren App</Text>        
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('CreateSubmission')}
          >
            <Text style={styles.signupTextbutton}>Create Subbmission</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTextbutton: {
    color: '#030966',
    fontSize: 16,
    fontWeight: '700',
    paddingLeft: 5,
  },
});
