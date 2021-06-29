import React, { Component, Children } from 'react';
import {  View, StyleSheet, } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
});
class AnimatedCT extends Component {
  constructor(props) {
    super(props);
    this.handleViewRef = (ref) => { this.view = ref; };
    this.state = {
    };
  }

  callAnimated = () => {
    const { animationType, duration } = this.props;
    switch (animationType) {
      case 'BOUNCE':
        this.view.bounce(duration);
        break;
      default:
        this.view.swing(duration);
        break;
    }
  }

  render() {
    const { style } = this.props;

    return (
      <Animatable.View
        ref={this.handleViewRef}
        style={[{ backgroundColor: 'transparent' }, style]}
      >
        {this.props.children}
      </Animatable.View>
    );
  }
}

AnimatedCT.defaultProps = {
  style: {},
  animationType: 'SWING',
  duration: 800,
};
AnimatedCT.propTypes = {
  // children: PropTypes.
  style: PropTypes.shape(),
  animationType: PropTypes.string,
  duration: PropTypes.number,
};

export default AnimatedCT;
