import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useMergeState} from '../../Helper/customHooks';
import ProfileChangeInfoStyle from './_profileChangeInfo';
import BottomAppHeader from '../../Components/Header/bottomAppHeader';
import GlobalStyles from '../../Styles';
import ViewsStyle from '../Style';
import Switcher from '../../Components/Switcher';
import InputCT from '../../Components/Inputs/InputCT';
import DatePickerCT from '../../Components/Inputs/DatepickerCT';
import _ from 'lodash';

const {f1_wh_100, mt16, mt24} = GlobalStyles;
const {bottom_App_Body} = ViewsStyle;
const {main} = ProfileChangeInfoStyle;

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

    currentPasswordErr: '',
    newPasswordErr: '',
    confirmNewPasswordErr: '',
    loading: false,
  });

  const {style, onClickCancel, userInfo} = props;

  useEffect(() => {
    if (_.isEmpty(userInfo)) {
      setState({
        password: '',
        newPassword: '',
        confirmNewPassword: '',
        currentPasswordErr: '',
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
    currentPasswordErr,
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
        setState({currentPasswordErr: MESSAGES.INCORRECT_PASSWORD});
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
      currentPasswordErr: '',
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

  const renderChangeInfo = () => (
    <View style={{}}>
      <InputCT
        style={mt24}
        name='username'
        title='Full name'
        disabled={loading}
        onChange={onChange}
        value={username}
        placeholder='Enter your name'
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
        value={gender}
        placeholder='Enter your birth date'
      />


    </View>
  );

  const renderChangePassowrd = () => (
    <View style={{}}>
      <Text>Change Pas</Text>
    </View>
  );

  const renderBody = () => (
    <View style={[main, style]}>
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
  );
  return (
    <View style={f1_wh_100}>
      <BottomAppHeader />

      <View style={bottom_App_Body}>{renderBody()}</View>
    </View>
  );
};
ProfileChangeInfo.defaultProps = {
  style: {},
  onClickCancel: () => {},
  onClickSave: () => {},
  userInfo: {},
};
ProfileChangeInfo.propTypes = {
  style: PropTypes.shape(),
  onClickCancel: PropTypes.func,
  onClickSave: PropTypes.func,
  userInfo: PropTypes.shape(),
};

export default ProfileChangeInfo;
