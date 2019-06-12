import React, { Component } from 'react';
import { View, WebView, StyleSheet } from 'react-native';

export default class Hybrid2Screen extends Component {

  initialHtml(webviewName) {
    return `
      <html>
        <body>
          <center><h2 style="font-size: 50px;">This is webview '${webviewName}'</h2></center>
        </body>
      </html>
    `;
  }

  render() {
    let source1 = {html: this.initialHtml(1)};
    let source2 = {html: this.initialHtml(2)};
    return (
      <View style={styles.main}>
        <WebView
         style={styles.webview}
         source={source1}
        />
        <WebView
         style={styles.webview}
         source={source2}
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
    width: '100%',
  },
  webview: {
    width: 300,
    marginTop: 25,
  }
});
