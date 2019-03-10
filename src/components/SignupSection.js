import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, View, Text} from 'react-native';
import { Input , ThemeProvider, Button , Divider, SocialIcon} from 'react-native-elements';
export default class SignupSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Forgot Password?</Text>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    //position:'absolute',
    //top:'90%',
    alignSelf:'auto',
    paddingLeft:'17%',
    height:'20%',
  },
  text: {
    color: 'black',
    backgroundColor: 'transparent',
  },
});
