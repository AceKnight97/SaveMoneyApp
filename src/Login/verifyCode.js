import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import LoginFrame from './Layout/loginFrame';
import GlobalStyles from '../Styles';
import {colors} from '../Constant/color';

import InputCT from '../Components/Inputs/InputCT';
import ButtonCT from '../Components/Buttons/buttonCT';

const styles = StyleSheet.create({
  veriFyCodeMain: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  lowBody: {
    marginTop: 40,
    alignItems: 'center',
  },
});
class VerifyCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailErr: '',
      passwordErr: '',
    };
  }

  showFooter = () => {
    const {flexRowAligCent} = GlobalStyles;
    return (
      <View style={{paddingHorizontal: 24}}>
        <ButtonCT
          type="ROUND"
          style={{}}
          title="Back to sign in"
          onPress={() => this.props.navigation.navigate('SignIn')}
        />
      </View>
    );
  };

  onChangeState = (key, value) =>
    this.setState({emailErr: '', passwordErr: '', [key]: value});

  render() {
    const {mt24, frsb} = GlobalStyles;
    const {veriFyCodeMain, lowBody} = styles;
    const {email, password} = this.state;
    return (
      <View style={veriFyCodeMain}>
        <LoginFrame style={{}} showFooter={this.showFooter}>
          <View style={{display: 'flex', flexDirection: 'column'}}>
            <View style={{marginBottom: 24}}>
              <Text style={{color: colors.blue1}}>
                The code is sent to your email.
              </Text>
            </View>

            <InputCT
              title="Verify code"
              value={email}
              onChangeText={(email) => this.onChangeState('email', email)}
              placeholder="Enter your code"
              returnKeyType="done"
            />

            <View style={[frsb, lowBody]}>
              <ButtonCT
                type="NONE"
                mainViewStyle={{marginLeft: -24}}
                title="Resend code"
              />
              <ButtonCT
                type="LINEAR"
                // style={{ width: 100, }}
                title="Verify"
                onPress={() => this.props.navigation.navigate('DoneLogin')}
              />
            </View>
          </View>
        </LoginFrame>
      </View>
    );
  }
}

VerifyCode.defaultProps = {};
VerifyCode.propTypes = {};

export default VerifyCode;
