import _ from 'lodash';
import PropTypes from 'prop-types';
import React, {useEffect, useRef} from 'react';
import {Text, View} from 'react-native';
import ButtonCT from '../../Components/Buttons/ButtonCT';
import InputCT from '../../Components/Inputs/InputCT';
import SuccessPage from '../../Components/UI/SuccessPage';
import {colors} from '../../Constant/color';
import {MESSAGES} from '../../Constant/home';
import {useMergeState} from '../../Helper/customHooks';
import GlobalStyles from '../../Styles';
import {mutationForgotPassword, mutationResetPassword} from '../helper';
import LoginFrame from '../Layout/loginFrame';
import VerifyCodeStyle from './_verifyCode';
import bankIc from '../../Images/Components/bank.svg';

const {
  main, lowBody,
} = VerifyCodeStyle;

const {
  mt16,
} = GlobalStyles;

const {
  PASSWORD_SHORTEST_6, PASSWORD_NOT_MATCHED, INVALID_CODE,
}= MESSAGES;

const VerifyCode = (props) => {
  const nextInput1= useRef(undefined);
  const nextInput2= useRef(undefined);
  const countRef = useRef(60);
  const [state, setState] = useMergeState({
    verificationCode: '',
    invalidCode: '',
    loading: false,
    email: props.navigation.getParam('email'),

    newPassword: '',
    confirmNewPassword: '',

    newPasswordErr: '',
    confirmNewPasswordErr: '',

    count: 60,
    isSuccess: false,
  });

  const {
    verificationCode, invalidCode, loading, count, email,

    newPassword, confirmNewPassword,
    newPasswordErr, confirmNewPasswordErr,
    isSuccess,
  } = state;

  const onChange = (key, value) => {
    setState({[key]: value, newPasswordErr: '', confirmNewPasswordErr: '', invalidCode: ''});
  };

  const onPressGoBack = () => {
    props.navigation.navigate('SignIn', {
      passingData: {
        email, password: newPassword,
      }});
  };

  useEffect(() => {
    if (!state.email) {
      props.navigation.navigate('ForgotPassword');
      return null;
    }
  }, []);

  useEffect(() => {
    let hanleCount;
    if (state.count !== 0 && countRef.current !== 0) {
      hanleCount = setInterval(() => {
        countRef.current -= 1;
        setState({count: countRef.current});
      }, 1000);
    }

    return () => {
      clearInterval(hanleCount);
    };
  }, [state.count]);

  const onPressBack = () => {
    props.navigation.navigate('SignIn');
  };

  const callResetPasswordAPI = async () => {
    setState({loading: true});
    const obj = {loading: false};
    const res = await mutationResetPassword(verificationCode, newPassword);
    if (_.isEmpty(res)) {
      _.assign(obj, {isSuccess: true});
    } else {
      _.assign(obj, res);
    }
    setState(obj);
  };

  const onPressVerify = () => {
    if (verificationCode?.length<6) {
      setState({invalidCode: INVALID_CODE});
      return;
    }
    if (newPassword.length < 6) {
      setState({newPasswordErr: PASSWORD_SHORTEST_6});
      return;
    }
    if (confirmNewPassword !== newPassword) {
      setState({confirmNewPasswordErr: PASSWORD_NOT_MATCHED});
      return;
    }
    callResetPasswordAPI();
  };

  const onPressResend = async () => {
    setState({loading: true});
    const obj = {loading: false};
    const res = await mutationForgotPassword(state.email);
    if (_.isEmpty(res)) {
      _.assign(obj, res);
    } else {
      countRef.count = 60;
      _.assign(obj, {count: 60});
    }
    setState(obj);
  };

  const showFooter = () => (
    <View style={{paddingHorizontal: 24}}>
      <ButtonCT
        type="ROUND"
        title="Back to sign in"
        onPress={onPressBack}
      />
    </View>
  );

  return (
    <>
      {
        isSuccess ? (
          <SuccessPage onClickBack={onPressGoBack} icon={bankIc} />) : (
          <View style={main}>
            <LoginFrame showFooter={showFooter}>
              <View >
                <Text style={{color: colors.blue1, marginBottom: 24}}>
                  {`The code is sent to your email: ${email}`}
                </Text>

                <InputCT
                  title="Verification code"
                  name='verificationCode'
                  onChange={onChange}
                  value={verificationCode}
                  placeholder="050897"
                  errMes={invalidCode}
                  type='NUMBER'
                  maxLength={6}
                  onSubmitEditing={() => {
                    nextInput1.current.focus();
                  }}
                  returnKeyType="next"
                />

                <InputCT
                  style={mt16}
                  name='newPassword'
                  title='New password'
                  disabled={loading}
                  onChange={onChange}
                  value={newPassword}
                  placeholder='Enter your new password'
                  isSecured
                  errMes={newPasswordErr}
                  onRef={(input) => {
                    nextInput1.current = input;
                  }}
                  onSubmitEditing={() => {
                    nextInput2.current.focus();
                  }}
                  returnKeyType="next"
                />
                <InputCT
                  style={mt16}
                  name='confirmNewPassword'
                  title='Confirm new password'
                  disabled={loading}
                  onChange={onChange}
                  value={confirmNewPassword}
                  placeholder='Enter your new password again'
                  isSecured
                  errMes={confirmNewPasswordErr}
                  onRef={(input) => {
                    nextInput2.current = input;
                  }}
                  returnKeyType="done"
                />

                <View style={lowBody}>
                  <ButtonCT
                    disabled={count !== 0}
                    type="NONE"
                    mainViewStyle={{marginLeft: -24}}
                    title={`Resend${count !== 0 ? ` in ${count}` : ''}`}
                    onPress={onPressResend}
                  />
                  <ButtonCT
                    disabled={!verificationCode.trim() || !newPassword.trim() || !confirmNewPassword.trim()}
                    type="LINEAR"
                    title="Verify"
                    onPress={onPressVerify}
                    loading={loading}
                  />
                </View>
              </View>
            </LoginFrame>
          </View>
        )
      }
    </>
  );
};

VerifyCode.defaultProps = {};
VerifyCode.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

export default VerifyCode;
