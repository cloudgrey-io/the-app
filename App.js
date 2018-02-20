/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Header,
  List,
  ListItem,
} from 'react-native-elements';

const viewList = [
  {name: "Echo Box", desc: "Write something and save to local memory"},
];

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Header backgroundColor="#000" centerComponent={{text: "The App", style: styles.header}}/>
        <Text style={styles.listHeader}>Choose An Awesome View</Text>
        <List>
          {viewList.map((l, i) => (
            <ListItem key={i} title={l.name} subtitle={l.desc} />
          ))}
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    color: '#fff'
  },
  listHeader: {
    padding: 8,
    fontSize: 16,
    marginBottom: -20,
  },
});
