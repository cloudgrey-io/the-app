/* global alert */

import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, Alert } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { testProps } from '../lib/utils';

const CLOUD_TYPES = {
  'Altocumulus': 'mid-level stratocumuliform limited-convective',
  'Altostratus': 'mid-level stratiform non-convective',
  'Cirrocumulus': 'high-level stratocumuliform limited-convective',
  'Cirrostratus': 'high-level stratiform non-convective',
  'Cirrus': 'high-level cirriform mostly non-convective',
  'Cumulonimbus': 'towering vertical cumulonimbiform strong-convective',
  'Cumulus Congestus': 'towering vertical cumuliform free-convective',
  'Cumulus Mediocris': 'vertical/multi-level cumuliform free-convective',
  'Cumulus humilis': 'low-level cumuliform free-convective',
  'Fog': 'surface-level stratiform non-convective',
  'Nimbostratus': 'vertical/multi-level stratiform non-convective',
  'Noctilucent': 'extreme-level cirriform mostly non-convective',
  'Polar Stratospheric': 'very high-level cirriform mostly non-convective',
  'Stratocumulus': 'low-level stratocumuliform limited-convective',
  'Stratus': 'low-level stratiform non-convective',
};

const styles = StyleSheet.create({
  listHeader: {
    padding: 8,
    fontSize: 14,
    marginBottom: -20,
  },
});

export default class ListScreen extends Component {

  showPickedAlert (cloudType) {
    const onLearnMore = () => {
      Alert.alert(
        cloudType,
        `This is a ${CLOUD_TYPES[cloudType]} cloud`
      );
    };
    Alert.alert(
      'Your Cloud Selection',
      `Congratulations! You expressed interest in the ${cloudType} cloud`,
      [
        {text: `Learn more about ${cloudType}`, onPress: onLearnMore},
        {text: 'Cancel', style: 'cancel'},
        {text: 'OK'},
      ],
      {cancelable: false}
    );
  }

  render() {
    return (
      <ScrollView>
        <Text style={styles.listHeader}>Check out these clouds</Text>
        <List>
          {Object.keys(CLOUD_TYPES).map(cloudType => (
            <ListItem
              key={cloudType}
              title={cloudType}
              onPress={() => this.showPickedAlert(cloudType)}
              {...testProps(cloudType)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}
