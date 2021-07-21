import React, {Component} from 'react';
import {SvgXml} from 'react-native-svg';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import GlobalStyles from '../../Styles';
import {screenW} from '../../Constant';

const styles = StyleSheet.create({
  mainViewBot: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 24,
    backgroundColor: 'white',
    // borderWidth: 1,
    // height: '50%',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  mainViewMid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: 'white',
    width: screenW - 48,
    // height: screenW,
    borderRadius:12,
  },
});

const {mainViewBot, mainViewMid} = styles;
const {centerC1} = GlobalStyles;

class ModalCT extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showBottom = () => {
    const {children} = this.props;
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}} />
        <View style={[mainViewBot]}>{children}</View>
      </View>
    );
  };

  showMiddle = () => {
    const {children} = this.props;
    return (
      <View style={centerC1}>
        <View style={{flex: 1}} />
        <View style={[mainViewMid]}>{children}</View>
        <View style={{flex: 1}} />
      </View>
    );
  };

  render() {
    const {onBackdropPress, type, isVisible} = this.props;
    let view = this.showBottom();
    switch (type) {
      case 'MIDLE':
        view = this.showMiddle();
        break;
      default:
        break;
    }

    return (
      <Modal
        onBackdropPress={onBackdropPress}
        isVisible={isVisible}
        style={{margin: 0}}
        backdropOpacity={0.25}>
        <TouchableWithoutFeedback
          style={{ flex: 1 }} onPress={onBackdropPress}
          onPressIn={()=>{console.log('onPressIn')}}>
          {view}
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

ModalCT.defaultProps = {
  children: {},
  isVisible: false,
  onBackdropPress: ()=>{}
};
ModalCT.propTypes = {
  children: PropTypes.shape(),
  isVisible: PropTypes.bool,
  onBackdropPress: PropTypes.func,
};

export default ModalCT;
