import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,  
} from 'react-native';


export default class Description extends Component {

  constructor(props) {
    super(props);
    this.state = {      
      description: '',      
    };    
  }

  render() {
    return (      
        <View style={styles.imageContainer3}>
          <View style={styles.descriptionContainer}>
            <TextInput
              style={styles.inputBox}
              maxLength={300}
              multiline={true}
              placeholder="This Submission give you the best oppourtunites."
              value={this.state.description}
              onChangeText={description => this.setState({description})}
            ></TextInput>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text style={{color: 'grey'}}>
                Description of your Submission
              </Text>
              <Text style={{color: 'grey'}}>
                {this.state.description.length}/300
              </Text>
            </View>
          </View>
        </View>            
    );
  }
}

const styles = StyleSheet.create({
 
  
  inputBox: {
    height: 150,
    width: 350,
    fontSize: 14,
    textAlignVertical: 'top',
    borderRadius: 10,
    borderColor: '#e3e2de',
    borderWidth: 2,
    paddingTop: 10,
    paddingHorizontal: 5,
  },
  imageContainer3: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
    marginVertical: 4,
    padding: 20,
  },
  descriptionContainer: {
    paddingHorizontal: 30,
  },
});
