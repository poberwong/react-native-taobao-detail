import React, { Component } from 'react';
import NativeMethodsMixin from 'NativeMethodsMixin'
import {
  AppRegistry,
  StyleSheet,
  PanResponder,
  ScrollView,
  Dimensions,
  RefreshControl,
  Animated,
  Text,
  View
} from 'react-native';

const { height: screenHeight } = Dimensions.get('window')
export default class Example extends Component {
  state = {
    scrollY: new Animated.Value(0),
    previewMargin: new Animated.Value(0),
    refreshTitle: '下拉，返回宝贝详情'
  }

  componentWillMount () {
    this._previewResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: this._onPreviewResponderRelease
    })

    this._detailResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: this._onDetailResponderRelease
    })
  }

  _onPreviewResponderRelease = (evt, gestureState) => {
    const { overDistance } = this.state
    if (overDistance > 40) {
      this.animatePreview(-screenHeight)
    }
  }

  _onDetailResponderRelease = (evt, gestureState) => {
    const { overDistance } = this.state
    if (overDistance < -60) {
      this.animatePreview(0)
    }
  }

  scrollPreview = (event) => {
    const scrollDistance = event.nativeEvent.contentOffset.y
    if (scrollDistance - (this.state.previewHeight - screenHeight) > 0) {
      this.setState({
        overDistance: scrollDistance - (this.state.previewHeight - screenHeight)
      })
    }
  }

  scrollDetail = (event) => {
    const scrollDistance = event.nativeEvent.contentOffset.y
    if (event.nativeEvent.contentOffset.y < 0) {
      this.setState({
        refreshTitle:
          event.nativeEvent.contentOffset.y < -60 ? '释放，返回宝贝详情' : '下拉，返回宝贝详情',
        overDistance: scrollDistance
      })
    }
  }

  animatePreview = (toValue) => {
    Animated.timing(
      this.state.previewMargin,
      {
        toValue,
        duration: 400
      }
    ).start()
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.ScrollView
          {...this._previewResponder.panHandlers}
          onContentSizeChange={(width, height) => {
            this.setState({previewHeight: height})
          }}
          style={{height: screenHeight, marginTop: this.state.previewMargin}}
          scrollEventThrottle={60}
          onScroll={this.scrollPreview}>
          <View style={styles.rec} />
          <View style={styles.rec} />
          <View style={styles.rec} />
          <View style={styles.rec} />
          <View style={styles.rec} />
          <Text style={styles.previewFooter}>继续滑动，查看图文详情</Text>
        </Animated.ScrollView>
        <Animated.ScrollView
          scrollEventThrottle={60}
          {...this._detailResponder.panHandlers}
          onScroll={this.scrollDetail}
          style={{height: screenHeight}}>
          <Text style={[styles.previewFooter, {marginTop: -50}]}>{this.state.refreshTitle}</Text>
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
        </Animated.ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  },
  rec: {
    height: 180,
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
