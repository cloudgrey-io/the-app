/* global alert */

import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { testProps } from '../lib/utils';

const CLOUD_TYPES = [
  'Altocumulus',
  'Altostratus',
  'Cirrocumulus',
  'Cirrostratus',
  'Cirrus',
  'Cumulonimbus',
  'Cumulus Congestus',
  'Cumulus Mediocris',
  'Cumulus humilis',
  'Fog',
  'Nimbostratus',
  'Noctilucent',
  'Polar Stratospheric',
  'Stratocumulus',
  'Stratus',
];

const styles = StyleSheet.create({
  listHeader: {
    padding: 8,
    fontSize: 14,
    marginBottom: -20,
  },
});

export default class ListScreen extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.listHeader}>Check out these clouds</Text>
        <List>
          {CLOUD_TYPES.map(cloudType => (
            <ListItem
              key={cloudType}
              title={cloudType}
              onPress={() => alert(`You picked ${cloudType}`)}
              {...testProps(cloudType)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}
