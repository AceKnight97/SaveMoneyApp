import _ from 'lodash';
import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import {KeyboardAvoidingView, ScrollView, Text, View} from 'react-native';
import BottomAppHeader from '../../Components/Header/bottomAppHeader';
import DatePickerCT from '../../Components/Inputs/DatepickerCT';
import InputCT from '../../Components/Inputs/InputCT';
import Switcher from '../../Components/Switcher';
import {useMergeState} from '../../Helper/customHooks';
import GlobalStyles from '../../Styles';
import ViewsStyle from '../Style';
import FooterButtons70 from '../../Components/UI/FooterButtons70';
import ProfileChangeInfoStyle from './_profileChangeInfo';
import {MESSAGES} from '../../Constant/home';
import {mutationChangePassword, mutationUpdateUser} from './helper';

const {f1_wh_100, mt16, mt24, mt48} = GlobalStyles;
const {bottom_App_Body} = ViewsStyle;
const {main, wrapper} = ProfileChangeInfoStyle;

const ProfileChangeInfo = (props) => {
  const [state, setState] = useMergeState({
    activeTab: 'Info',
    address: '',
    dob: undefined,
    username: '',
    gender: '',
    phone: '',

    password: '',
    newPassword: '',
    confirmNewPassword: '',

    phoneErr: '',
    usernameErr: '',

    passwordErr: '',
    newPasswordErr: '',
    confirmNewPasswordErr: '',
    loading: false,
  });

  const {style, userInfo} = props;

  useEffect(() => {
    if (_.isEmpty(userInfo)) {
      setState({
        password: '',
        newPassword: '',
        confirmNewPassword: '',
        passwordErr: '',
        newPasswordErr: '',
        confirmNewPasswordErr: '',
      });
    } else {
      setState({
        address: userInfo.address || '',
        dob: userInfo.dob || undefined,
        email: userInfo.email || '',
        username: userInfo.username || '',
        gender: userInfo.gender || '',
        phone: userInfo.phone || '',
      });
    }
  }, [props.userInfo]);

  const {
    activeTab,
    address,
    dob,
    username,
    gender,
    phone,
    phoneErr,
    usernameErr,

    password,
    newPassword,
    confirmNewPassword,
    passwordErr,
    newPasswordErr,
    confirmNewPasswordErr,
    loading,
  } = state;

  const isChangePassword = activeTab === 'Password';

  const callUpdateProfile = async () => {
    setState({loading: true});
    const res = await mutationUpdateUser({
      username,
      address,
      dob,
      gender,
      phone,
    });
    setState({loading: false});
    if (res) {
      props.onClickSave();
    }
  };

  const callChangePassword = async () => {
    setState({loading: true});
    const res = await mutationChangePassword(password, newPassword);
    const obj = {loading: false};
    if (_.isEmpty(res)) {
      onClickCancel();
    } else {
      _.assign(obj, res);
    }
    setState(obj);
  };

  const onClickChange = () => {
    if (isChangePassword) {
      if (password.length < 6) {
        setState({passwordErr: MESSAGES.INCORRECT_PASSWORD});
        return;
      }
      if (newPassword.length < 6) {
        setState({newPasswordErr: MESSAGES.PASSWORD_SHORTEST_6});
        return;
      }
      if (confirmNewPassword !== newPassword) {
        setState({confirmNewPasswordErr: MESSAGES.PASSWORD_NOT_MATCHED});
        return;
      }
      callChangePassword();
    } else {
      if (!username.trim()) {
        setState({usernameErr: MESSAGES.CAN_NOT_EMPTY});
        return;
      }
      if (phone.length < 10) {
        setState({phoneErr: MESSAGES.INVALID_PHONE_FORMAT});
        return;
      }
      callUpdateProfile();
    }
  };

  const onChange = (key, value) => {
    setState({
      [key]: value,
      phoneErr: '',
      usernameErr: '',
      passwordErr: '',
      newPasswordErr: '',
      confirmNewPasswordErr: '',
    });
  };

  // const onSwitch = (e) => {
  //   setState({isChangePassword: e.target.value === SWITCH_DATA[1].value});
  // };

  const isDisabled = () => {
    if (isChangePassword) {
      return !password || !newPassword || !confirmNewPassword;
    }
    return (
      !address ||
      !dob ||
      !username ||
      !gender ||
      !phone ||
      _.isEqual(userInfo, {
        address,
        dob,
        username,
        gender,
        phone,
        email: userInfo.email,
      })
    );
  };

  const onClickCancel = () => {
    props.navigation.goBack();
  };

  const renderChangeInfo = () => (
    <>
      <InputCT
        style={mt48}
        name='username'
        title='Full name'
        disabled={loading}
        onChange={onChange}
        value={username}
        placeholder='Enter your name'
        errMes={usernameErr}
      />
      <InputCT
        style={mt24}
        name='gender'
        title='Gender'
        disabled={loading}
        onChange={onChange}
        value={gender}
        placeholder='Enter your gender'
      />
      <DatePickerCT
        style={mt24}
        name='dob'
        title='Date of birth'
        disabled={loading}
        onChange={onChange}
        value={dob}
        placeholder='Enter your birth date'
      />
      <InputCT
        style={mt24}
        name='address'
        title='Address'
        disabled={loading}
        onChange={onChange}
        value={address}
        placeholder='Enter your address'
      />
      <InputCT
        style={mt24}
        name='phone'
        title='Phone number'
        disabled={loading}
        onChange={onChange}
        value={phone}
        placeholder='081 - 954 - 1897'
        type='NUMBER'
        errMes={phoneErr}
      />
    </>
  );

  const renderChangePassowrd = () => (
    <>
      <InputCT
        style={mt48}
        name='password'
        title='Password'
        disabled={loading}
        onChange={onChange}
        value={password}
        placeholder='Enter your password'
        isSecured={true}
        errMes={passwordErr}
      />
      <InputCT
        style={mt24}
        name='newPassword'
        title='New password'
        disabled={loading}
        onChange={onChange}
        value={newPassword}
        placeholder='Enter your new password'
        isSecured={true}
        errMes={newPasswordErr}
      />
      <InputCT
        style={mt24}
        name='confirmNewPassword'
        title='Confirm new password'
        disabled={loading}
        onChange={onChange}
        value={confirmNewPassword}
        placeholder='Enter your new password again'
        isSecured={true}
        errMes={confirmNewPasswordErr}
      />
    </>
  );

  const renderBody = () => (
    <View style={[main, style]}>
      <View>
        <Switcher
          leftTitle="Info"
          rightTitle="Password"
          activeTab={activeTab}
          onChange={onChange}
        />

        {
        activeTab === 'Info' ? renderChangeInfo() :
          renderChangePassowrd()
        }
      </View>

      <FooterButtons70
        leftTitle="Cancel"
        rightTitle="Change"
        leftOnPress={onClickCancel}
        rightOnPress={onClickChange}
        disabled={isDisabled()}
      />

    </View>
  );
  return (
    <View style={f1_wh_100}>
      <BottomAppHeader />

      <KeyboardAvoidingView enabled>
        <ScrollView>
          <View style={wrapper}>{renderBody()}</View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
ProfileChangeInfo.defaultProps = {
  style: {},
  onClickSave: () => {},
  userInfo: {},
};
ProfileChangeInfo.propTypes = {
  style: PropTypes.shape(),
  onClickSave: PropTypes.func,
  userInfo: PropTypes.shape(),
  navigation: PropTypes.shape().isRequired,
};

export default ProfileChangeInfo;
