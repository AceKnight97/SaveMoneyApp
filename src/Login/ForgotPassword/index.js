import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';
import ButtonCT from '../../Components/Buttons/ButtonCT';
import InputCT from '../../Components/Inputs/InputCT';
import {isValidEmail} from '../../Helper';
import {useMergeState} from '../../Helper/customHooks';
import emailIc from '../../Images/Login/email.svg';
import emailActIc from '../../Images/Login/emailAct.svg';
import {mutationForgotPassword} from '../helper';
import LoginFrame from '../Layout/loginFrame';
import ForgotPasswordStyle from './_forgotPassword';


const {
  veriFyCodeMain, lowBody,
} = ForgotPasswordStyle;


const ForgotPassword = (props) => {
  // const countdownRef =useRef(0);

  const [state, setState] = useMergeState({
    email: '',
    emailErr: '',
  });

  const {email, emailErr, loading} = state;

  const onChange = (key, value) => {
    setState({[key]: value, emailErr: ''});
  };

  const callForgotPasswordAPI = async () => {
    setState({loading: true});
    const obj = {loading: false};
    const res = await mutationForgotPassword(email);
    if (_.isEmpty(res)) {
      props.navigation.navigate('VerifyCode', {email});
    } else {
      _.assign(obj, res);
    }
    setState(obj);
  };

  const onPressSendCode = () => {
    if (!email.trim() || !isValidEmail(email)) {
      setState({emailErr: 'Invalid email'});
      return;
    }
    callForgotPasswordAPI();
  };

  const onPressBack = () => {
    props.navigation.navigate('SignIn');
  };

  const showFooter = () =>(
    <View style={{paddingHorizontal: 24}}>
      <ButtonCT
        type="ROUND"
        title="Back to sign in"
        onPress={onPressBack}
      />
    </View>
  );

  return (
    <View style={veriFyCodeMain}>
      <LoginFrame showFooter={showFooter}>
        <View >
          <InputCT
            title="Email"
            name='email'
            value={email}
            onChange={onChange}
            placeholder="Enter your email"
            icon={email ? emailActIc : emailIc}
            returnKeyType="done"
            errMes={emailErr}
            keyboardType="email-address"
          />

          <View style={lowBody}>
            <ButtonCT
              disabled={!email}
              type="LINEAR"
              title="Send code"
              onPress={onPressSendCode}
              loading={loading}
            />
          </View>
        </View>
      </LoginFrame>
    </View>
  );
};

ForgotPassword.defaultProps = {};
ForgotPassword.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

export default ForgotPassword;
