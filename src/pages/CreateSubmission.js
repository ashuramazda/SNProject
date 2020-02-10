import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,  
  KeyboardAvoidingView  
} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import DateStart from '../components/molecules/DateStart';
import SongRequirement from '../components/molecules/SongRequirement';
import Benefit from '../components/molecules/Benefit';
import CreateButton from '../components/atoms/CreateButton';
import Description from '../components/molecules/Description';

export default class Home extends Component {

  static navigationOptions = {
    title: 'Create Submission',
  }

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      location: '',       
      inputCount: 1,
      data: [],
    };
    this.inputRefs = {}; 
  } 

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View style={{flex: 1, backgroundColor: 'grey'}}>
            <View style={styles.submissionContainer}>
              <View style={styles.logoImage}>
                <View style={styles.logoCamera}>
                  <MaterialIcons name="add-a-photo" size={30} color="grey" />
                </View>
              </View>
              <View style={styles.addImageContainer}>
                <MaterialIcons name="add-a-photo" size={30} color="white" />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  multiline={true}
                  maxLength={40}
                  placeholder="Submission Title"
                  value={this.state.title}
                  onChangeText={title => this.setState({title})}
                />
                <Text style={{color: 'grey'}}>
                  {this.state.title.length}/40
                </Text>
              </View>
              <DateStart />
              <View style={styles.eventContainer}>
                <TextInput
                  style={styles.eventInput}
                  multiline={true}
                  maxLength={40}
                  placeholder="Studio, Cafe, or another cool place"
                  value={this.state.location}
                  onChangeText={location => this.setState({location})}
                />
                <Text style={{color: 'grey'}}>Location Of Event</Text>
              </View>
            </View>
            <SongRequirement />            
            <Description />
            <Benefit />
            <CreateButton />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  submissionContainer: {
    height: 550,
    backgroundColor: 'white',
    marginHorizontal: 3,
    marginBottom: 4,
  },
  logoImage: {
    height: 150,
    backgroundColor: '#D8D8D8',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  logoCamera: {
    padding: 10,
    right: 20,
    bottom: 20,
  },
  inputContainer: {
    justifyContent: 'center',
    paddingLeft: 30,
    paddingBottom: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  eventContainer: {
    justifyContent: 'center',
    paddingLeft: 30,
    marginBottom: 20,
    backgroundColor: '#fff',
  },  
  textInput: {
    height: 50,
    width: 300,
    fontSize: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 3,
  },
  eventInput: {
    height: 50,
    width: 300,
    fontSize: 20,
    borderBottomColor: '#e3e2de',
    borderBottomWidth: 3,
  }, 
  addImageStyle: {
    height: 70,
    width: 100,
    backgroundColor: '#fff',
  },
  addImageContainer: {
    width: 130,
    height: 120,
    left: 30,
    bottom: 40,
    borderRadius: 5,
    backgroundColor: '#8F8F8F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer2: {
    backgroundColor: '#fff',
    marginHorizontal: 3,
  },
  requirementContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  inputWrapper: {
    backgroundColor: 'yellow',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  input: {
    height: 55,
    paddingLeft: 15,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  deleteIcon: {
    alignItems: 'flex-end',
  },
});

