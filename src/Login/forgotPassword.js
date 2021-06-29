import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import LoginFrame from './Layout/loginFrame';
import GlobalStyles from '../Styles';
import InputCT from '../Components/Inputs/inputCT';
import ButtonCT from '../Components/Buttons/buttonCT'

import emailIc from '../Images/Login/email.svg';
import emailActIc from '../Images/Login/emailAct.svg';

const styles = StyleSheet.create({
  veriFyCodeMain: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
  lowBody: {
    marginTop: 40,
    alignItems: 'center'
  }
});
class ForgotPassword extends Component {
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
    const { flexRowAligCent } = GlobalStyles;
    return (
      <View style={{ paddingHorizontal: 24 }}>
        <ButtonCT
          type='ROUND'
          style={{}}
          title='Back to sign in'
          onPress={() => this.props.navigation.navigate('SignIn')}
        />
      </View>
    )
  }

  onChangeState = (key, value) => this.setState({ emailErr: '', passwordErr: '', [key]: value })

  render() {
    const { mt24, frsb } = GlobalStyles;
    const { veriFyCodeMain, lowBody } = styles;
    const { email, password } = this.state;
    return (
      <View style={veriFyCodeMain}>
        <LoginFrame
          style={{}}
          showFooter={this.showFooter}
        >
          <View style={{ display: 'flex', flexDirection: 'column' }}>
            <InputCT
              title="Email"
              value={email}
              onChangeText={(email) => this.onChangeState('email', email)}
              placeholder="Enter your email"
              icon={email ? emailActIc : emailIc}
              returnKeyType="done"
            />

            <View style={[frsb, lowBody]}>
              <View />
              <ButtonCT
                type='LINEAR'
                // style={{ width: 100, }}
                title='Send code'
                onPress={() => this.props.navigation.navigate('VerifyCode')}
              />
            </View>

          </View>
        </LoginFrame>
      </View>
    );
  }
}

ForgotPassword.defaultProps = {};
ForgotPassword.propTypes = {};

export default ForgotPassword;
