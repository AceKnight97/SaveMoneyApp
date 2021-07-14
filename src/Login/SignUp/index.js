import _ from 'lodash';
import PropTypes from 'prop-types';
import React, {useRef} from 'react';
import {View} from 'react-native';
import ButtonCT from '../../Components/Buttons/ButtonCT';
import InputCT from '../../Components/Inputs/InputCT';
import SuccessPage from '../../Components/UI/SuccessPage';
import {MESSAGES} from '../../Constant/home';
import {isValidEmail} from '../../Helper';
import {useMergeState} from '../../Helper/customHooks';
import cupIc from '../../Images/Components/cup.svg';
import GlobalStyles from '../../Styles';
import {mutationSignUp} from '../helper';
import LoginFrame from '../Layout/loginFrame';
import SignUpStyle from './_signUp';

const {main, lowBody}=SignUpStyle;
const {mt16} = GlobalStyles;

const SignUp = (props) => {
  const nextInput1= useRef(undefined);
  const nextInput2= useRef(undefined);
  const nextInput3= useRef(undefined);
  const [state, setState] = useMergeState({
    email: 'asdasd@asdasd.com',
    password: 'asdasdasdasd',
    confirmPassword: 'asdasdasdasd',
    username: 'asdasdasdasd asdasdasdasd',

    emailErr: '',
    passwordErr: '',
    confirmPasswordErr: '',
    usernameErr: '',

    loading: false,
    isSuccess: false,
  });

  const {
    email, password, confirmPassword, username,
    emailErr, passwordErr, confirmPasswordErr, usernameErr,
    isSuccess,
    loading,
  } = state;

  const onPressBackToSignIn = () => props.navigation.navigate('SignIn', {
    signUpData: {
      email, password,
    },
  });

  const isDisabled = () => {
    if (!email?.trim() ||
      !password?.trim() ||
      !confirmPassword?.trim()
    ) {
      return true;
    }
    return false;
  };

  const onChange = (key, value) =>
    setState({
      [key]: value,
      emailErr: '',
      passwordErr: '',
      confirmPasswordErr: '',
    });


  const callSignUpAPI = async () => {
    setState({loading: true});
    const res = await mutationSignUp(email, password, username);
    const obj = {loading: false};
    if (res) {
      _.assign(obj, {isSuccess: true});
    }
    setState(obj);
  };

  const onPressSignUp = () => {
    if (!isValidEmail(email)) {
      setState({emailErr: MESSAGES.EMAIL_WRONG_FORMAT});
      return;
    }
    if (!password || password.length < 6) {
      setState({passwordErr: MESSAGES.PASSWORD_SHORTEST_6});
      return;
    }
    if (confirmPassword !== password) {
      setState({confirmPasswordErr: MESSAGES.PASSWORD_NOT_MATCHED});
      return;
    }
    if (!username.trim()) {
      setState({usernameErr: MESSAGES.CAN_NOT_EMPTY});
      return;
    }
    callSignUpAPI();
  };

  const showFooter = () => (
    <View style={{paddingHorizontal: 24}}>
      <ButtonCT
        type="ROUND"

        title="Back to sign in"
        onPress={onPressBackToSignIn}
      />
    </View>
  );

  return (
    isSuccess ? (
      <SuccessPage
        icon={cupIc}
        onClickBack={onPressBackToSignIn} />
    ) :
      <View style={main}>
        <LoginFrame showFooter={showFooter}>
          <View >
            <InputCT
              title="Email"
              name='email'
              onChange={onChange}
              value={email}
              placeholder="Email"
              onSubmitEditing={() => {
                nextInput1.current.focus();
              }}
              returnKeyType="next"
              keyboardType="email-address"
              errMes={emailErr}
            />

            <InputCT
              title="Password"
              name='password'
              onChange={onChange}
              value={password}
              style={mt16}
              placeholder="Password"
              isSecured
              onRef={(input) => {
                nextInput1.current = input;
              }}
              returnKeyType="next"
              onSubmitEditing={() => {
                nextInput2.current.focus();
              }}
              errMes={passwordErr}
            />

            <InputCT
              title="Confirm password"
              name='confirmPassword'
              onChange={onChange}
              value={confirmPassword}
              style={mt16}
              onRef={(input) => {
                nextInput2.current = input;
              }}
              placeholder="Confirm password"
              isSecured
              returnKeyType="next"
              onSubmitEditing={() => {
                nextInput3.current.focus();
              }}
              errMes={confirmPasswordErr}
            />

            <InputCT
              title="Full name"
              name='username'
              onChange={onChange}
              value={username}
              style={mt16}
              onRef={(input) => {
                nextInput3.current = input;
              }}
              placeholder="Truong Thanh Triet"
              returnKeyType="done"
              errMes={usernameErr}
            />

            <View style={lowBody}>
              <ButtonCT
                loading={loading}
                type="LINEAR"
                title="Sign up"
                disabled={isDisabled()}
                onPress={onPressSignUp}
              />
            </View>
          </View>
        </LoginFrame>
      </View>
  );
};

SignUp.defaultProps = {};
SignUp.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

export default SignUp;
