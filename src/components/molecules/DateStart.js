import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,  
  TouchableWithoutFeedback, 
} from 'react-native';

import DateTimePicker from 'react-native-modal-datetime-picker';


export default class Date extends Component { 

  constructor(props) {
    super(props);
    this.state = {      
      isDatetimePickerVisible: false,
      selecteddate: '',
      isDatetimePickerVisible2: false,
      selecteddate2: '',      
    };    
  }

  _showDateTimePicker = () => this.setState({isDateTimePickerVisible: true});

  _hideDateTimePicker = () => this.setState({isDateTimePickerVisible: false});

  _handleDatePicked = pickeddate => {
    day = pickeddate.getDate();
    month = pickeddate.getMonth();
    year = pickeddate.getFullYear();
    console.log('A date has been picked: ' + day + '-' + month + '-' + year);
    exdate = day + '-' + month + '-' + year;
    this.setState({selecteddate: day + '-' + month + '-' + year});
    this._hideDateTimePicker();
  };

  onFocus = () => {
    this._handleDatePicked();
  };

  _showDateTimePicker2 = () => this.setState({isDateTimePickerVisible2: true});

  _hideDateTimePicker2 = () => this.setState({isDateTimePickerVisible2: false});

  _handleDatePicked2 = pickeddateend => {
    dayend = pickeddateend.getDate();
    month = pickeddateend.getMonth();
    year = pickeddateend.getFullYear();
    console.log('A date has been picked: ' + dayend + '-' + month + '-' + year);
    exdate = dayend + '-' + month + '-' + year;
    this.setState({selecteddate2: dayend + '-' + month + '-' + year});
    this._hideDateTimePicker2();
  };

  onFocus2 = () => {
    this._handleDatePicked2();
  };

  render() {
    return (      
      <View style={styles.dateContainer}>
        <View style={{backgroundColor: '#fff'}}>
          <TouchableWithoutFeedback>
            <TextInput
              style={styles.dateInput}
              placeholder="Start Date"
              onFocus={() => this._showDateTimePicker()}
              value={this.state.selecteddate}
            />
          </TouchableWithoutFeedback>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
            mode={'date'}
            datePickerModeAndroid={'spinner'}
          />
          <Text style={{color: 'grey'}}>Date Of Submission</Text>
        </View>
        <View>
          <TouchableWithoutFeedback>
            <TextInput
              style={styles.dateInput}
              placeholder="End Date"
              onFocus={() => this._showDateTimePicker2()}
              value={this.state.selecteddate2}
            />
          </TouchableWithoutFeedback>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible2}
            onConfirm={this._handleDatePicked2}
            onCancel={this._hideDateTimePicker2}
            mode={'date'}
            datePickerModeAndroid={'spinner'}
          />
          <Text style={{color: 'grey'}}>Deadline</Text>
        </View>
      </View>              
    );
  }
}

const styles = StyleSheet.create({ 
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingHorizontal: 30,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  dateInput: {
    width: 120,
    borderBottomColor: '#e3e2de',
    borderBottomWidth: 3,
    fontSize: 20,
    color: 'grey',
    backgroundColor: '#fff',
  },  
});
