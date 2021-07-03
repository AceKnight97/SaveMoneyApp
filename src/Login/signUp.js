import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import LoginFrame from './Layout/loginFrame';
import GlobalStyles from '../Styles';
import InputCT from '../Components/Inputs/InputCT';
import ButtonCT from '../Components/Buttons/buttonCT';

const styles = StyleSheet.create({
  SignUpMain: {
    flex: 1,
  },
  lowBody: {
    marginTop: 40,
    alignItems: 'center',
  },
});
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      emailErr: '',
      passwordErr: '',
      confirmPasswordErr: '',
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
    this.setState({
      emailErr: '',
      passwordErr: '',
      confirmPasswordErr: '',
      [key]: value,
    });

  render() {
    const {mt24, frsb, mt12} = GlobalStyles;
    const {SignUpMain, lowBody} = styles;
    const {email, password, confirmPassword} = this.state;
    return (
      <View style={SignUpMain}>
        <LoginFrame style={{}} showFooter={this.showFooter}>
          <View style={{display: 'flex', flexDirection: 'column'}}>
            <InputCT
              value={email}
              onChangeText={(email) => this.onChangeState('email', email)}
              placeholder="Email"
              onSubmitEditing={() => {
                this.nextInput1.focus();
              }}
              returnKeyType="next"
              keyboardType="email-address"
            />

            <InputCT
              value={password}
              onChangeText={(password) =>
                this.onChangeState('password', password)
              }
              placeholder="Password"
              isSecured
              onRef={(nextInput1) => {
                this.nextInput1 = nextInput1;
              }}
              returnKeyType="next"
              onSubmitEditing={() => {
                this.nextInput2.focus();
              }}
            />

            <InputCT
              value={confirmPassword}
              onChangeText={(confirmPassword) =>
                this.onChangeState('confirmPassword', confirmPassword)
              }
              placeholder="Confirm password"
              isSecured
              onRef={(nextInput2) => {
                this.nextInput2 = nextInput2;
              }}
              returnKeyType="done"
            />
            <View style={[frsb, lowBody]}>
              <View />
              <ButtonCT
                type="LINEAR"
                // style={{ width: 100, }}
                title="Sign up"
                onPress={() => this.props.navigation.navigate('VerifyCode')}
              />
            </View>
          </View>
        </LoginFrame>
      </View>
    );
  }
}

SignUp.defaultProps = {};
SignUp.propTypes = {};

export default SignUp;
