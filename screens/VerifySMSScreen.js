import React, { Component } from 'react';
import { PermissionsAndroid, View, StyleSheet, Text, AsyncStorage } from 'react-native';
import { Input, Button } from 'react-native-elements';
import baseStyles from '../styles/base';
import { testProps } from '../lib/utils';
import SMSListener from 'react-native-android-sms-listener';

const CODE = "123456";

async function requestReadSmsPermission() {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_SMS,
    {
      title: "SMS Read Verification",
      message: "We need access to read SMS to verify your authorization"
    }
  );
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    console.log("sms read permissions granted", granted);
  } else {
    console.log("sms read permissions denied", denied);
  }
}
export default class VerifySMSScreen extends Component {

  constructor() {
    super();
    this.state = {verified: false};
    this.smsListener = {};
  }

  componentDidMount() {
    requestReadSmsPermission().catch(console.warn);
    this.smsListener = SMSListener.addListener(message => {
      if (new RegExp(CODE).test(message.body)) {
        this.setState({verified: true});
      }
    });
  }

  componentWillUnmount() {
    if (this.smsListener.remove) {
      this.smsListener.remove();
      this.smsListener = {};
    }
  }

  render() {
    const {verified} = this.state;
    return (
      <View style={styles.main}>
        {verified && <Text style={styles.message}>You've been verified!</Text>}
        {!verified && <Text style={styles.message}>Waiting to receive a verification text message with the correct code. (HINT: it's {CODE})</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  message: {
    padding: 20
  }
});
