/* global navigator, window */

import React, { Component } from 'react';
import B from 'bluebird';
import { Platform, View, Text, StyleSheet, PermissionsAndroid } from 'react-native';
import { testProps } from '../lib/utils';

async function requestLocationPermission() {
  if (Platform.OS === "android") {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Location Read Verification",
        message: "We need access to read geolocation data so we can show that data to you"
      }
    );
  } else {
    navigator.geolocation.requestAuthorization();
  }
}

export default class LocationScreen extends Component {

  constructor() {
    super();
    this.state = {lat: 0, long: 0, acc: 0};
    this.watchId = null;
  }

  onPositionUpdate({coords}) {
    this.setState({
      lat: coords.latitude,
      long: coords.longitude,
      acc: coords.accuracy,
    });
  }

  async componentDidMount() {
    try {
      await requestLocationPermission();

      if (Platform.OS === "android") {
        await B.delay(500); // wait a bit for android to know we can get position
      }

      const onSuccess = this.onPositionUpdate.bind(this);
      const onErr = (err) => {
        window.alert(err.message);
      };
      navigator.geolocation.getCurrentPosition(onSuccess, onErr);
      this.watchId = navigator.geolocation.watchPosition(onSuccess, onErr);
    } catch (err) {
      console.warn(err); // eslint-disable-line no-console
    }
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  render() {
    const {lat, long, acc} = this.state;
    return (
      <View style={styles.main}>
        <Text style={styles.message}>Latitude: {lat}</Text>
        <Text style={styles.message}>Longitude: {long}</Text>
        <Text style={styles.message}>Accuracy: {acc}</Text>
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
