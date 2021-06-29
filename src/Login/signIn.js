import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text} from 'react-native';
import ButtonCT from '../Components/Buttons/buttonCT';
import {connect} from 'react-redux';
import InputCT from '../Components/Inputs/inputCT';
import gql from 'graphql-tag';
import emailIc from '../Images/Login/email.svg';
import emailActIc from '../Images/Login/emailAct.svg';
import pswIc from '../Images/Login/privacy.svg';
import pswActIc from '../Images/Login/privacyAct.svg';
import GlobalStyles from '../Styles';
import LoginFrame from './Layout/loginFrame';
import {loginRequest} from '../Redux/Actions/login';
import {useMergeState} from '../Helper/customHooks';
import {mutationSignIn} from './helper';

const {mt24, frsb, flexColumn} = GlobalStyles;

const styles = StyleSheet.create({
  signInMain: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  lowBody: {
    marginTop: 40,
    alignItems: 'center',
  },
});
const SignIn = (props) => {
  const [state, setState] = useMergeState({
    email: 'ace1@gmail.com',
    password: '12345678',
    emailErr: '',
    passwordErr: '',
  });

  useEffect(() => {
    if (props.login?.isSuccess) {
      console.log({
        login: props.login,
      });
      props.navigation.navigate('StackBottomApp');
    }
  }, [props.login]);

  const handleSignIn = async () => {
    setState({loading: true});
    const res = await mutationSignIn(email, password, props.loginRequest);
    setState(res);
  };

  const showFooter = () => {
    return (
      <View style={{paddingHorizontal: 24}}>
        <ButtonCT
          type="ROUND"
          style={{}}
          title="Sign up"
          onPress={() => props.navigation.navigate('SignUp')}
        />
      </View>
    );
  };

  const onChange = (key, value) => {
    setState({emailErr: '', passwordErr: '', [key]: value});
  };

  const {signInMain, lowBody} = styles;
  const {email, password} = state;

  return (
    <View style={signInMain}>
      <LoginFrame showFooter={showFooter}>
        <View style={flexColumn}>
          <InputCT
            title="Email"
            value={email}
            onChangeText={(email) => onChange('email', email)}
            placeholder="Email"
            icon={email ? emailActIc : emailIc}
            onSubmitEditing={() => {
              nextInput1.focus();
            }}
            returnKeyType="next"
            keyboardType="email-address"
          />

          <InputCT
            style={mt24}
            title="Password"
            value={password}
            onChangeText={(password) => onChange('password', password)}
            placeholder="Password"
            icon={password ? pswActIc : pswIc}
            isSecured
            onRef={(nextInput1) => {
              nextInput1 = nextInput1;
            }}
            returnKeyType="done"
          />
          <View style={[frsb, lowBody]}>
            <ButtonCT
              type="NONE"
              mainViewStyle={{marginLeft: -24}}
              title="Forgot password"
              onPress={() => props.navigation.navigate('ForgotPassword')}
            />
            <ButtonCT
              type="LINEAR"
              title="Sign in"
              // onPress={() => props.navigation.navigate('StackBottomApp')}
              onPress={handleSignIn}
            />
          </View>
        </View>
      </LoginFrame>
    </View>
  );
};

SignIn.defaultProps = {};
SignIn.propTypes = {
  loginRequest: PropTypes.func.isRequired,
  login: PropTypes.shape(),
};

const mapStateToProps = (state) => ({
  login: state.login,
});

const mapDispatchToProps = {
  loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
