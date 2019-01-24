import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Linking } from 'react-native';
import { ListItem } from 'react-native-elements';
import { testProps, login } from '../lib/utils';
import { Navigation } from 'react-native-navigation';

let viewList = [
  {
    name: "Echo Box",
    desc: "Write something and save to local memory",
    screen: "Echo",
  },
  {
    name: "Login Screen",
    desc: "A fake login screen for testing",
    screen: "Login",
  },
  {
    name: "Clipboard Demo",
    desc: "Mess around with the clipboard",
    screen: "Clipboard",
  },
  {
    name: "Webview Demo",
    desc: "Explore the possibilities of hybrid apps",
    screen: "Hybrid",
  },
  {
    name: "List Demo",
    desc: "Scroll through a list of stuff",
    screen: "List",
  },
  {
    name: "Photo Demo",
    desc: "Some photos with no distinguishing IDs",
    screen: "Photo",
  },
  {
    name: "Geolocation Demo",
    desc: "Use the camera and the photo library",
    screen: "Location",
  }
];

if (Platform.OS === 'android') {
  viewList.push({
    name: "Verify Phone Number",
    desc: "A fake SMS auto-verification screen",
    screen: "VerifySMS",
  });
}

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.handleOpenUrl = this.handleOpenUrl.bind(this);
  }

  async componentDidMount() {
    if (Platform.OS === "Android") {
      const url = await Linking.getInitialURL();
      this.handleOpenUrl({url});
    } else {
      Linking.addEventListener('url', this.handleOpenUrl);
    }
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenUrl);
  }

  async handleOpenUrl(event) {
    const {url} = event;
    const route = url.replace(/.*?:\/\//g, '');
    const [handler, ...parts] = route.split('/');
    if (handler === "login") {
      const loggedIn = await login(parts[0], parts[1]);
      if (loggedIn) {
        Navigation.push(this.props.componentId, {
          component: {
            name: 'io.cloudgrey.SecretScreen',
          }
        });
      } else {
        Navigation.push(this.props.componentId, {
          component: {
            name: 'io.cloudgrey.SecretScreen',
          }
        });
      }
    }
  }

  render() {
    return (
      <View>
        <Text style={styles.listHeader}>Choose An Awesome View</Text>
        <View>
          {viewList.map((l, i) => (
            <ListItem
              key={i}
              title={l.name}
              subtitle={l.desc}
              onPress={() => Navigation.push(this.props.componentId, {
                component: {
                  name: `io.cloudgrey.${l.screen}Screen`,
                }
              })}
              {...testProps(l.name)}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listHeader: {
    padding: 8,
    fontSize: 14
  },
});
