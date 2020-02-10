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


export default class Benefit extends Component {
  static navigationOptions = {
    title: 'Create Submission',
  };

  constructor(props) {
    super(props);
    this.state = {            
      benefit: [
        {
          value: '',
        },
      ],
      description: '',
      inputCount: 1,
      data: [],
    };
    this.inputRefs = {};

    this._onDeletebenefit = this._onDeletebenefit.bind(this);
  }

  onAddMorebenefit() {
    const newData = this.state.benefit;
    newData.push({value: ''});
    this.setState(prevState => ({
      benefit: newData,
    }));
  }

  _onChangeTextbenefit(placeholder, inputName) {
    const benefit = [...this.state.benefit];
    benefit[inputName].value = placeholder;
    this.setState({benefit: benefit});
  }

  _onDeletebenefit(index) {
    var array = [...this.state.benefit]; // make a separate copy of the array
    array.splice(index, 1);
    this.setState({benefit: array});
    console.log('----------------');
    console.log(this.state.benefit);
  }

  render() {
    return (      
        <View style={styles.imageContainer4}>
          {this.state.benefit.map((name, index) => (
            <View style={styles.benefitContainer} key={index}>
              {index != 0 && (
                <TouchableOpacity
                  style={styles.deleteIcon}
                  onPress={() => this._onDeletebenefit(index)}
                >
                  <MaterialIcons name="delete" size={30} color="red" />
                </TouchableOpacity>
              )}
              <TextInput
                style={styles.eventInput}
                multiline={true}
                maxLength={60}
                placeholder="Kontrak bermain selama satu tahun"
                name={index}
                value={this.state.benefit[index].value}
                onChangeText={placeholder => {
                  this._onChangeTextbenefit(placeholder, index);
                }}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={{color: 'grey'}}>Benefits {index + 1}</Text>
                <Text style={{color: 'grey'}}>
                  {this.state.benefit[index].value.length}/60
                </Text>
              </View>
            </View>
          ))}
          <TouchableOpacity
            onPress={this.onAddMorebenefit.bind(this)}
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
                Add More Benefits
              </Text>
            </View>
          </TouchableOpacity>
        </View> 
    );
  }
}

const styles = StyleSheet.create({
  eventInput: {
    height: 50,
    width: 350,
    fontSize: 20,
    borderBottomColor: '#e3e2de',
    borderBottomWidth: 3,
  },
  imageContainer4: {
    flex: 1,
    marginHorizontal: 3,
    backgroundColor: '#fff'
  },
  benefitContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },  
  deleteIcon: {
    alignItems: 'flex-end',
  },
});
