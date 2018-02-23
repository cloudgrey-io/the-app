import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import baseStyles from '../styles/base';
import { testProps, getLoginUser, logout } from '../lib/utils';

export default class SecretScreen extends Component {
  constructor() {
    super();
    this.state = {
      user: ""
    };
    this.logout = this.logout.bind(this);
  }

  async componentWillMount() {
    const user = await getLoginUser();
    if (!user) {
      this.props.navigator.push({screen: 'io.cloudgrey.LoginScreen'});
    }

    this.setState({
      user
    });
  }

  async logout() {
    const {navigator} = this.props;
    await logout();
    navigator.push({screen: 'io.cloudgrey.LoginScreen'});
  }

  render() {
    const {user} = this.state;
    return <View style={styles.view}>
      <Text h2>Secret Area</Text>
      <Text style={styles.message}>You are logged in as <Text style={styles.username}>{user}</Text></Text>
      <Button text="Logout" style={styles.button}
        onPress={this.logout} />
    </View>;
  }
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: baseStyles.margin * 5,
  },
  message: {
    marginTop: baseStyles.margin * 2,
    marginBottom: baseStyles.margin * 2,
  },
  username: {
    fontWeight: 'bold',
  }
});
