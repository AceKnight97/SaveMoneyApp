import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonCT from '../../Components/Buttons/buttonCT';
import { screenW } from '../../Constant';
import GlobalStyles from '../../Styles';
import LoginFrame from './loginFrame';


const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const {flexRowAligCent} = GlobalStyles;
const {mainView} = styles;
class TheFirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <LoginFrame style={{flex: 1, }}>
        <View style={mainView}>
          <ButtonCT
            type="BORDER"
            style={{width: screenW - 48}}
            title="START WITHOUT LOGIN"
            onPress={() => this.props.navigation.navigate('StackBottomApp')}
          />
        </View>
      </LoginFrame>
    );
  }
}

TheFirstPage.defaultProps = {};
TheFirstPage.propTypes = {};

export default TheFirstPage;
