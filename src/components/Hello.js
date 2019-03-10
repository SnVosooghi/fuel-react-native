import React, {Component} from 'react';
import {ImageBackground} from 'react-native'
import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import bgSrc from '../images/Mywallpaper.png';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
export default class Hello extends Component {
  render() {
    return (
      <ImageBackground style={{width: '100%', height: '100%'}} source={bgSrc}>
        <Logo />
        <Button />
        <Button />
      </ImageBackground>
    );
  }
}
