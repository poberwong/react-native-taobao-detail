/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import DetailPage from './DetailPage'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DetailPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('Example', () => Example);
