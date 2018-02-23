import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import baseStyles from '../styles/base';
import { testProps } from '../lib/utils';

const VALID_LOGINS = [
  ["alice", "mypassword"],
  ["bob", "totallysecure"],
];

export const USER_KEY = "@TheApp:LoggedInUser";

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
    this.login = this.login.bind(this);
  }

  async componentWillMount() {
    const {navigator} = this.props;
    // if we're already logged in, just go to the secret area already
    if (await AsyncStorage.getItem(USER_KEY)) {
      navigator.push({screen: 'io.cloudgrey.SecretScreen'});
    }
  }

  async login() {
    const {navigator} = this.props;
    const isValid = VALID_LOGINS.filter(l => {
      return l[0] === this.state.username &&
             l[1] === this.state.password;
    }).length === 1;

    if (isValid) {
      await AsyncStorage.setItem(USER_KEY, this.state.username);
      navigator.push({screen: 'io.cloudgrey.SecretScreen'});
      this.setState({username: "", password: ""});
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
      />
      <Input placeholder="Password" style={styles.formEl}
        onChangeText={(password) => this.setState({password})}
        autoCapitalize="none"
        secureTextEntry={true}
        value={password}
      />
      <Button text="Login" style={styles.button}
        onPress={this.login} />
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
    marginTop: baseStyles.margin * 2,
    width: "100%",
  },
  button: {
    marginTop: baseStyles.margin * 2,
    width: "auto",
  }
});
