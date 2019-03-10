import React, {Component} from 'react';
import {ImageBackground, Text, View} from 'react-native'
import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import bgSrc from '../images/Mywallpaper.png';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
//import GoogleSign from './GoogleSign';
// import OAuthManager from 'react-native-oauth';
// const manager = new OAuthManager('firestackexample')
// manager.configure({
//   google: {
//     callback_url: `io.fullstack.FirestackExample:/oauth2redirect`,
//     client_id: '855718719287-sk2f73qcu3m1t045efmlci7b412k3md7.apps.googleusercontent.com',
//     client_secret: 'jCntud05N9iIiSXoN_x3Ylcu'
//   }
// });
// manager.authorize('google', {scopes: 'profile email'})
// .then(resp => console.log('Your users ID'))
// .catch(err => console.log('There was an error'));
export default class LoginScreen extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'black'}}>
        <Logo />
        <Form />
        <ButtonSubmit />
        <SignupSection />
      </View>
    );
  }
}
