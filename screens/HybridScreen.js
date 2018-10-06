/* global alert */

import React, { Component } from 'react';
import { View, WebView, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import baseStyles from '../styles/base';
import { testProps } from '../lib/utils';

export default class EchoScreen extends Component {

  constructor() {
    super();
    this.state = {
      url: null,
      urlInput: null,
    };
    this.input = null;
  }

  initialHtml() {
    return `
      <html>
        <body>
          <center><h1 style="font-size: 50px;">Please navigate to a webpage</h1></center>
        </body>
      </html>
    `;
  }

  render() {
    const {url, urlInput} = this.state;
    let source = {html: this.initialHtml()};
    if (url) {
      if (!/^https:\/\/appiumpro.com$/i.test(url)) {
        alert("Sorry, you are not allowed to visit that url");
      } else {
        source = {uri: url};
      }
    }
    return (
      <View style={styles.main}>
        <Input
          ref={(input) => {this.input = input;}}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="https://appiumpro.com"
          onChangeText={(url) => this.setState({urlInput: url, url: null})}
          {...testProps('urlInput')}
        />
        <Button
          text="Go" style={styles.formControl}
          onPress={() => this.setState({url: urlInput})}
          {...testProps('navigateBtn')}
        />
        <Button
          text="Clear" style={styles.formControl}
          onPress={() => this.input.clear()}
          {...testProps('clearBtn')}
        />
        <WebView
         style={styles.webview}
         source={source}
        />
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
  formControl: {
    margin: baseStyles.margin,
    width: '100%',
    height: 25,
  },
  webview: {
    height: 200,
    width: 400,
    marginTop: 25,
  }
});
