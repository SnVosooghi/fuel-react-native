import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import { Input , ThemeProvider, Button , Divider, SocialIcon, CheckBox} from 'react-native-elements';

import UserInput from './UserInput';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';

import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg from '../images/eye_black.png';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
    };
    this.showPass = this.showPass.bind(this);
  }

  showPass() {
    this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  }

  render() {
    return (
      <ThemeProvider >
        <Input
		  containerStyle={{paddingHorizontal : '15%',top:'20%'}}
          inputStyle={{borderColor: 'gray',color:'white'}}
          placeholderTextColor='white'
          secureTextEntry={this.state.showPass}
          placeholder="A"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
        />
        <Input
		  containerStyle={{paddingHorizontal : '15%',top:'20%'}}
          inputStyle={{borderColor: 'gray',color:'white'}}
          placeholderTextColor='white'
          secureTextEntry={this.state.showPass}
          placeholder="B"
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
        />
        <Input
		  containerStyle={{paddingHorizontal : '15%',top:'20%'}}
          inputStyle={{borderColor: 'gray',color:'white'}}
          placeholderTextColor='white'
          secureTextEntry={this.state.showPass}
          placeholder="A+B"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
        />
        <Input
		  containerStyle={{paddingHorizontal : '15%',top:'20%'}}
          inputStyle={{borderColor: 'gray',color:'white'}}
          placeholderTextColor='white'
          secureTextEntry={this.state.showPass}
          placeholder="A*B"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
        />
        <CheckBox
          containerStyle={{top:'20%',backgroundColor:'black',width:'70%',marginLeft:'15%'}}
          title='Some conditions'
          checked={this.state.checked}
          onPress={() => this.setState({checked: !this.state.checked})}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={1}>
          {this.state.isLoading ? (
            <Image source={spinner} style={styles.image} />
          ) : (
            <Text style={styles.text}>Calculate</Text>
          )}
        </TouchableOpacity>
      </ThemeProvider>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  containerStyle:
    {
      paddingLeft : '40%' ,
      alignSelf:'center',
  },
  btnEye: {
    position: 'absolute',
    width : '75%',
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
  button: {
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'center',
    backgroundColor: '#F035E0',
    top:'20%',
    width : '75%',
    height: '8%',
    borderRadius: 20,
    zIndex: 100,
  },
});
