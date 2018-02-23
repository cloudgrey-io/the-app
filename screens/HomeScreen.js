import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { List, ListItem, } from 'react-native-elements';
import { testProps } from '../lib/utils';

const viewList = [
  {
    name: "Echo Box",
    desc: "Write something and save to local memory",
    screen: "Echo",
  },
  {
    name: "Login Screen",
    desc: "A fake login screen for testing",
    screen: "Login",
  }
];

type Props = {};
export default class HomeScreen extends Component<Props> {
  render() {
    const {navigator} = this.props;
    return (
      <View>
        <Text style={styles.listHeader}>Choose An Awesome View</Text>
        <List>
          {viewList.map((l, i) => (
            <ListItem
              key={i}
              title={l.name}
              subtitle={l.desc}
              onPress={() => navigator.push({screen: `io.cloudgrey.${l.screen}Screen`})}
              {...testProps(l.name)}
            />
          ))}
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listHeader: {
    padding: 8,
    fontSize: 14,
    marginBottom: -20,
  },
});
