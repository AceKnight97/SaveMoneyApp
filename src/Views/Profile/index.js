import React from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Avatar from '../../Components/Avatar';
import ButtonCT from '../../Components/Buttons/buttonCT';
import BottomAppHeader from '../../Components/Header/bottomAppHeader';
import DisplayData from '../../Components/UI/DisplayData';
import { colors } from '../../Constant/color';
import { useMergeState } from '../../Helper/customHooks';
import { logoutRequest } from '../../Redux/Actions/login';
import GlobalStyles from '../../Styles';
import ViewsStyle from '../Style';
import { getAppInfo, getLogInfo, getUerInfo } from './helper';
import ProfileStyle from './_profile';
import _ from 'lodash';

const {f1_wh_100, mt16} = GlobalStyles;
const {bottom_App_Body} = ViewsStyle;
const {
  profile_wrapper,
  profile_header,
  profile_header_right,
  profile_change_info,
  profile_sign_out_btn,
} = ProfileStyle;
const {red2, red1} = colors;

const Profile = (props) => {
  const [state, setState] = useMergeState({
    modalInfo: {},
    patientData: _.cloneDeep(props.profile),
    loading: false,
  });

  const {
    patientData, modalInfo, loading
  } =state;

  const {style,} = props;

  const renderBody = () => (
    <View style={profile_wrapper}>
      <View style={profile_header}>
        <Avatar name="Ace"></Avatar>

        <View style={profile_header_right}>
          <ButtonCT
            type="NONE"
            style={profile_change_info}
            title="Change information"
          />

          <ButtonCT
            type="NONE"
            style={profile_sign_out_btn}
            UserTextStyle={{color: red1}}
            isDanger
            title="Sign out"
          />
        </View>
      </View>

      <DisplayData style={mt16} data={getUerInfo(patientData)} title="User Info:" />
      <DisplayData style={mt16} data={getLogInfo(patientData)} title="Log Info:" />
      <DisplayData style={mt16} data={getAppInfo(patientData)} title="App Info:" />
    </View>
  );
  return (
    <ScrollView style={f1_wh_100}>
      <BottomAppHeader currentTab="Profile" />

      <View style={bottom_App_Body}>{renderBody()}</View>
    </ScrollView>
  );
};
Profile.defaultProps = {
  className: '',
  profile: {},
  fetchUserData: () => {},
};
Profile.propTypes = {
  className: PropTypes.string,
  logoutRequest: PropTypes.func.isRequired,
  profile: PropTypes.shape(),
  fetchUserData: PropTypes.func,
};

const mapDispatchToProps = {
  logoutRequest,
};
export default connect(null, mapDispatchToProps)(Profile);
