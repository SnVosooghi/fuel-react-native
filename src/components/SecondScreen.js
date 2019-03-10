import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  ImageBackground,
  Text,
} from 'react-native';

import logoImg from '../images/NewLogo.png';
import bgSrc from '../images/Mywallpaper.png';
import arrowImg from '../images/left-arrow.png';
import aja from '../images/aja.png';
const SIZE = 40;

export default class SecondScreen extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };
    this._onPress=this._onPress.bind(this);
    this.growAnimated = new Animated.Value(0);
  }

  const
  _onPress() {
    if (this.state.isLoading) return;

    this.setState({isLoading: true});

    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
    }).start();


}
  render() {
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, SIZE],
    });

    return (
      <View style={styles.container}>
        <Image source={aja} style={{bottom:'30%'}}/>
        <TouchableOpacity
          onPress={()=>{
            this._onPress,
            setTimeout(() => {
            }, 500);
          }}
          style={styles.button}
          activeOpacity={1}>
          <Text style={styles.text} >Method A</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
        onPress={()=>{
          this._onPress,
          setTimeout(() =>  500);
        }}
          activeOpacity={1}>
          <Text style={styles.text} >Method B</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor:'black'
  },
  button: {
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'center',
    backgroundColor: '#F035E0',
    width : '70%',
    height: '9%',
    borderRadius: 20,
    zIndex: 100,
    margin: 15
  },
  image: {
    width: 24,
    height: 24,
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  }
});
