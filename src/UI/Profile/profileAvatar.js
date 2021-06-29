import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import GlobalStyles from '../../Styles';
import {screenW} from '../../Constant';

const wh = parseInt(screenW / 3, 10);

const styles = StyleSheet.create({
  mainView: {
    height: wh,
    width: wh,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 200,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: 'black',
    zIndex:10,
  },
});
const {} = GlobalStyles;
const {mainView} = styles;

class ProfileAvatar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {style} = this.props;
    return (
      <View style={[mainView, style]}>
        <Text style={{color: 'red', fontSize: 24}}>Avatar</Text>
      </View>
    );
  }
}

ProfileAvatar.defaultProps = {
  style: {},
};
ProfileAvatar.propTypes = {
  style: PropTypes.shape(),
};
export default ProfileAvatar;
