import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,  
  TouchableOpacity,
} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';

export default class SongRequirement extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      laguciptaan: [
        {
          value: '',
        },
      ], 
      inputCount: 1,
      data: [],
    };
    this.inputRefs = {};

    this._onDelete = this._onDelete.bind(this);    
  }

  onAddMore() {
    const newData = this.state.laguciptaan;
    newData.push({value: ''});
    this.setState(prevState => ({
      laguciptaan: newData,
    }));
  }

  _onChangeText(placeholder, inputName) {
    const laguciptaan = [...this.state.laguciptaan];
    laguciptaan[inputName].value = placeholder;
    this.setState({laguciptaan: laguciptaan});    
  }

  _onDelete(index) {
    var array = [...this.state.laguciptaan]; // make a separate copy of the array
    array.splice(index, 1);
    this.setState({laguciptaan: array});
    console.log('----------------');
    console.log(this.state.laguciptaan);
  } 

  render() {
    return (
        <View style={styles.imageContainer2}>
          {this.state.laguciptaan.map((name, index) => (
            <View style={styles.requirementContainer} key={index}>
              {index != 0 && (
                <TouchableOpacity
                  style={styles.deleteIcon}
                  onPress={() => this._onDelete(index)}
                >
                  <MaterialIcons name="delete" size={30} color="red" />
                </TouchableOpacity>
              )}
              <TextInput
                style={styles.eventInput}
                multiline={true}
                maxLength={60}
                placeholder="Memiliki lagu ciptaan sendiri"
                name={index}
                value={this.state.laguciptaan[index].value}
                onChangeText={placeholder => {
                  this._onChangeText(placeholder, index);
                }}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={{color: 'grey'}}>
                  Requirements {index + 1}
                </Text>
                <Text style={{color: 'grey'}}>
                  {this.state.laguciptaan[index].value.length}/60
                </Text>
              </View>
            </View>
          ))}
          <TouchableOpacity
            onPress={this.onAddMore.bind(this)}
            style={{borderColor: 'transparent'}}
          >
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: '#fff',
                paddingLeft: 30,
                paddingBottom: 30,
                paddingTop: 20,
              }}
            >
              <Ionicons
                name="md-add-circle-outline"
                size={30}
                color="#3982E4"
              />
              <Text style={{color: '#3982E4', paddingLeft: 5}}>
                Add More Requirement
              </Text>
            </View>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer2: {
    backgroundColor: '#fff',
    marginHorizontal: 3,
  },
  eventInput: {
    height: 50,
    width: 300,
    fontSize: 20,
    borderBottomColor: '#e3e2de',
    borderBottomWidth: 3,
  },
  requirementContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  deleteIcon: {
    alignItems: 'flex-end',
  },
});
