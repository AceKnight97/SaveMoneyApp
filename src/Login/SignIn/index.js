import PropTypes from 'prop-types';
import React, {useEffect, useRef} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import ButtonCT from '../../Components/Buttons/ButtonCT';
import InputCT from '../../Components/Inputs/InputCT';
import {isValidEmail} from '../../Helper';
import {useMergeState} from '../../Helper/customHooks';
import emailIc from '../../Images/Login/email.svg';
import emailActIc from '../../Images/Login/emailAct.svg';
import pswIc from '../../Images/Login/privacy.svg';
import pswActIc from '../../Images/Login/privacyAct.svg';
import {loginRequest} from '../../Redux/Actions/login';
import GlobalStyles from '../../Styles';
import {mutationSignIn} from '../helper';
import LoginFrame from '../Layout/loginFrame';
import SignInStyle from './_signIn';


const {mt24, flexColumn} = GlobalStyles;

const {signInMain, lowBody} = SignInStyle;

const SignIn = (props) => {
  const nextInput1= useRef(undefined);
  const [state, setState] = useMergeState({
    email: '',
    password: '',
    emailErr: '',
    passwordErr: '',

    loading: false,
  });

  useEffect(() => {
    if (props.login?.isSuccess) {
      props.navigation.navigate('StackBottomApp');
    }
  }, [props.login]);

  useEffect(() => {
    const {email, password} = props.navigation.getParam('passingData') ||{};
    if (email &&password) {
      setState({email, password});
    }
  }, [props.navigation.getParam('passingData')]);

  const {email, password, loading,
    emailErr, passwordErr,
  } = state;

  const isDisabled = () => {
    if (!email?.trim() || !password?.trim() || password?.length< 6) {
      return true;
    }
    return false;
  };

  const handleSignIn = async () => {
    if (!isValidEmail(email)) {
      setState({emailErr: 'Invalid email format!'});
      return;
    }
    setState({loading: true});
    const res = await mutationSignIn(email, password, props.loginRequest);
    setState(res);
  };
  const onChange = (key, value) => {
    setState({[key]: value, emailErr: '', passwordErr: ''});
  };

  const navigateForgot = () => {
    props.navigation.navigate('ForgotPassword');
  };

  const navigateSignUp = () => {
    props.navigation.navigate('SignUp');// ForgotPassword
  };

  const showFooter = () => {
    return (
      <View style={{paddingHorizontal: 24}}>
        <ButtonCT
          disabled={loading}
          type="ROUND"
          title="Sign up"
          onPress={navigateSignUp}
        />
      </View>
    );
  };


  return (
    <View style={signInMain}>
      <LoginFrame showFooter={showFooter} >
        <View style={flexColumn}>
          <InputCT
            title="Email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Email"
            icon={email ? emailActIc : emailIc}
            onSubmitEditing={() => {
              nextInput1.current.focus();
            }}
            returnKeyType="next"
            keyboardType="email-address"
            errMes={emailErr}
          />

          <InputCT
            style={mt24}
            title="Password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
            icon={password ? pswActIc : pswIc}
            isSecured
            onRef={(input) => {
              nextInput1.current = input;
            }}
            returnKeyType="done"
            errMes={passwordErr}
          />
          <View style={lowBody}>
            <ButtonCT
              type="NONE"
              mainViewStyle={{marginLeft: -24}}
              title="Forgot password"
              onPress={navigateForgot}
            />
            <ButtonCT
              type="LINEAR"
              title="Sign in"
              disabled={isDisabled()}
              onPress={handleSignIn}
              loading={loading}
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
  navigation: PropTypes.shape().isRequired,
};

const mapStateToProps = (state) => ({
  login: state.login,
});

const mapDispatchToProps = {
  loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
