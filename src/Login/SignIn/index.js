import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import ButtonCT from '../../Components/Buttons/ButtonCT';
import InputCT from '../../Components/Inputs/InputCT';
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


const {mt24, frsb, flexColumn} = GlobalStyles;

const {signInMain, lowBody} = SignInStyle;

const SignIn = (props) => {
  const [state, setState] = useMergeState({
    email: 'ace1@gmail.com',
    password: '12345678',
    emailErr: '',
    passwordErr: '',

    loading: false,
  });

  useEffect(() => {
    if (props.login?.isSuccess) {
      props.navigation.navigate('StackBottomApp');
    }
  }, [props.login]);

  const handleSignIn = async () => {
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

  const {email, password, loading} = state;

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


  return (
    <View style={signInMain}>
      <LoginFrame showFooter={showFooter}>
        <View style={flexColumn}>
          <InputCT
            title="Email"
            name="email"
            value={email}
            onChange={onChange}
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
            name="password"
            value={password}
            onChange={onChange}
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
              onPress={navigateForgot}
            />
            <ButtonCT
              type="LINEAR"
              title="Sign in"
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
