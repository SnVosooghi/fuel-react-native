import React, {Component} from 'react';
import {StyleSheet,
View,
Image,
TouchableOpacity,
Animated,
Easing,
ImageBackground,
Text} from 'react-native'
import PropTypes from 'prop-types';
import Logo from './Logo';
import RegisterForm from './RegisterForm';
import bgSrc from '../images/Mywallpaper.png';
import ButtonRegister from './ButtonRegister';

export default class takeOff extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };

    this._onPress = this._onPress.bind(this);
    this.growAnimated = new Animated.Value(0);
  }

  _onPress() {
    if (this.state.isLoading) return;

    this.setState({isLoading: true});

    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      Actions.loginScreen();
    }, 500);
  }
  render() {
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 40],
    });
    return (

      <View style={{flex:1,backgroundColor:'black'}}>
        <Text style={{fontWeight: 'bold', fontSize:20,alignSelf:'center',top:'10%'}}>
          Create New Account
        </Text>
      <RegisterForm/>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  image: {
    width: 24,
    height: 24,
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  }
});
