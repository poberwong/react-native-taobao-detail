import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Dimensions,
  Text,
  View
} from 'react-native';

const { height } = Dimensions.get('window')
export default class Example extends Component {
  static state = {
    previewMargin: height
  }

  scrollPreview = () => {

  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <ScrollView
          onScroll={this.scrollPreview}
          style={{height, marginTop: 0}}>
          <View style={styles.rec} />
          <View style={styles.rec} />
          <View style={styles.rec} />
          <View style={styles.rec} />
          <View style={styles.rec} />
          <View style={styles.rec} />
          <View style={styles.rec} />
          <View style={styles.rec} />
          <View style={styles.rec} />
          <View style={styles.rec} />
          <Text style={styles.previewFooter}>继续滑动，查看图文详情</Text>
        </ScrollView>
        <ScrollView
          onScroll={this.scrollDetail}
          style={{height}}>
          <View style={styles.rec1} />
          <View style={styles.rec1} />
          <View style={styles.rec1} />
          <View style={styles.rec1} />
          <View style={styles.rec1} />
          <View style={styles.rec1} />
          <View style={styles.rec1} />
          <View style={styles.rec1} />
          <View style={styles.rec1} />
          <View style={styles.rec1} />
          <View style={styles.rec1} />
          <View style={styles.rec1} />
          <View style={styles.rec1} />
          <View style={styles.rec1} />
        </ScrollView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  },
  rec: {
    height: 80,
    backgroundColor: 'red'
  },
  rec1: {
    height: 80,
    backgroundColor: 'green'
  },
  item: {
    flexGrow: 1,
    height: 80,
    backgroundColor: 'black'
  },
  previewFooter: {
    fontSize: 12,
    paddingVertical: 16,
    textAlign: 'center'
  }
});
