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
} from 'react-native';
import { Input , ThemeProvider, Button , Divider, SocialIcon} from 'react-native-elements';

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
		      containerStyle={{paddingHorizontal : '15%'}}
          inputStyle={{borderColor: 'gray',color:'white'}}
          placeholderTextColor='white'
          placeholder="A-B"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
        />
        <Input
		      containerStyle={{paddingHorizontal : '15%'}}
          inputStyle={{borderColor: 'gray',color:'white'}}
          placeholderTextColor='white'
          secureTextEntry={this.state.showPass}
          placeholder="A+B"
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
        />
      </ThemeProvider>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  containerStyle:
    {
      justifyContent : 'center',
      paddingLeft : '40%' ,
      position:'absolute',
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
});
