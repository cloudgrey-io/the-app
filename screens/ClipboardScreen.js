import React, { Component } from 'react';
import { Clipboard, View, StyleSheet, Text, AsyncStorage } from 'react-native';
import { Input, Button } from 'react-native-elements';
import baseStyles from '../styles/base';
import { testProps } from '../lib/utils';

export default class ClipboardScreen extends Component {


  constructor() {
    super();
    this.state = {clipboardText: null, curText: null};
  }

  async componentDidMount() {
    await this.refresh();
  }

  async refresh() {
    this.setState({clipboardText: await Clipboard.getString()});
  }

  async setText() {
    await Clipboard.setString(this.state.curText);
  }


  render() {
    const {clipboardText} = this.state;
    return (
      <View style={styles.main}>
        <View style={{...baseStyles.flexCenter}}>
          <Text style={styles.echoHeader}>Here's the clipboard text:</Text>
          <Text style={styles.savedEcho} testId="clipboardText" accessibilityLabel={clipboardText}>{clipboardText}</Text>
          <Button {...testProps('refreshClipboardText')} text="Refresh Clipboard Text"
            onPress={this.refresh.bind(this)}
          />
        </View>
        <View style={styles.form}>
          <Input
            placeholder="Enter text"
            style={styles.formControl}
            onChangeText={(text) => this.setState({curText: text})}
            {...testProps('messageInput')}
          />
          <Button
            text="Set Clipboard Text" style={styles.formControl}
            onPress={this.setText.bind(this)}
            {...testProps('setClipboardText')}
          />
        </View>
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
  echoHeader: {
    fontSize: baseStyles.fontSizeMed,
    margin: baseStyles.margin,
  },
  savedEcho: {
    margin: baseStyles.margin,
    color: '#999',
    fontSize: baseStyles.fontSizeBig,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 40,
  },
  formControl: {
    margin: baseStyles.margin,
    height: 25,
    width: '100%',
  },
});
