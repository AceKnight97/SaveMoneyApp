import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View, ActivityIndicator, StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
  loadingContainer: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
});

const {loadingContainer } = styles

export default class LoadingIndicator extends Component {
  render() {
    const {
      isLoading, loadingColor, loadingSize, backgroundColor,
    } = this.props;

    if (isLoading) {
      return (
        <View style={[loadingContainer, { backgroundColor }]}>
          <ActivityIndicator size={loadingSize} color={loadingColor} />
        </View>
      );
    }
    return (
      null
    );
  }
}

LoadingIndicator.defaultProps = {
  isLoading: false,
  loadingColor: '#FFFFFF',
  backgroundColor: 'rgba(0,0,0,0.5)',
  loadingSize: 'large', // small, large
};
LoadingIndicator.propTypes = {
  isLoading: PropTypes.bool,
  loadingColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  loadingSize: PropTypes.string,
};
