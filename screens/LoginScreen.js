/* global alert */

import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import baseStyles from '../styles/base';
import { testProps, USER_KEY, login } from '../lib/utils';
import { Navigation } from 'react-native-navigation';

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
    this.login = this.login.bind(this);
  }

  async componentDidMount() {
    // if we're already logged in, just go to the secret area already
    if (await AsyncStorage.getItem(USER_KEY)) {
      Navigation.push(this.props.componentId, {
        component: {
          name: 'io.cloudgrey.SecretScreen',
        }
      });
    }
  }

  async login() {
    if (await login(this.state.username, this.state.password)) {
      this.setState({username: "", password: ""});
      Navigation.push(this.props.componentId, {
        component: {
          name: 'io.cloudgrey.SecretScreen',
        }
      });
      return;
    }

    alert("Invalid login credentials, please try again");
  }

  render() {
    const {username, password} = this.state;
    return <View style={styles.loginView}>
      <Text h2>Login</Text>
      <Input placeholder="Username" style={styles.formEl}
        onChangeText={(username) => this.setState({username})}
        autoCapitalize="none"
        value={username}
        {...testProps('username')}
      />
      <Input placeholder="Password" style={styles.formEl}
        onChangeText={(password) => this.setState({password})}
        autoCapitalize="none"
        secureTextEntry={true}
        value={password}
        {...testProps('password')}
      />
      <Button title="Login" style={styles.button}
        onPress={this.login}
        {...testProps('loginBtn')}
      />
    </View>;
  }
}

const styles = StyleSheet.create({
  loginView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: baseStyles.margin * 5,
  },
  formEl: {
    height: 50,
    marginTop: baseStyles.margin * 2,
    width: "100%",
  },
  button: {
    marginTop: baseStyles.margin * 2,
    width: "auto",
  }
});
