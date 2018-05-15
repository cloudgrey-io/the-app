import React, { Component } from 'react';
import { PermissionsAndroid, View, StyleSheet, Text } from 'react-native';
import { testProps } from '../lib/utils';
import SMSListener from 'react-native-android-sms-listener';

const CODE = "123456";

async function requestReadSmsPermission() {
  await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_SMS,
    {
      title: "SMS Read Verification",
      message: "We need access to read SMS to verify your authorization"
    }
  );
}
export default class VerifySMSScreen extends Component {

  constructor() {
    super();
    this.state = {verified: false};
    this.smsListener = {};
  }

  componentDidMount() {
    requestReadSmsPermission().catch(console.warn); // eslint-disable-line no-console
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
        {verified && <Text style={styles.message} {...testProps('verified')}>You&apos;ve been verified!</Text>}
        {!verified && <Text style={styles.message} {...testProps('waiting')}>Waiting to receive a verification text message with the correct code. (HINT: it&apos;s {CODE})</Text>}
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
