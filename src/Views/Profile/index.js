import React, {useEffect} from 'react';
import {ScrollView, View, } from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Avatar from '../../Components/Avatar';
import NewButton from '../../Components/Buttons/NewButton';
import BottomAppHeader from '../../Components/Header/bottomAppHeader';
import DisplayData from '../../Components/UI/DisplayData';
import {colors} from '../../Constant/color';
import {useMergeState} from '../../Helper/customHooks';
import {logoutRequest} from '../../Redux/Actions/login';
import GlobalStyles from '../../Styles';
import ViewsStyle from '../Style';
import {getAppInfo, getLogInfo, getUerInfo, queryUserData} from './helper';
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
    patientData:{},
    loading: false,
  });

  const logOut = () => {
    props.logoutRequest();
    props.navigation.navigate('SignInStack');
  }

  const fetchUserData = async () => {
    setState({ loading: true });
    const patientData = await queryUserData();
    if (_.isEmpty(patientData)) {
      logOut();
    }
    setState({ loading: false, patientData });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const {patientData, modalInfo, loading} = state;

  const {style} = props;

  const onPressChangeInfo = () => {
    props.navigation.navigate('ProfileChangeInfo', {data: patientData});
  };

  const renderBody = () => (
    <View style={profile_wrapper}>
      <View style={profile_header}>
        <Avatar name="Ace"></Avatar>

        <View style={profile_header_right}>
          <NewButton
            type="primary"
            style={{width: 186}}
            // style={profile_change_info}
            title="Change information"
            onPress={onPressChangeInfo}
          />

          <NewButton
            type="danger"
            style={{width: 186}}
            // style={profile_sign_out_btn}
            UserTextStyle={{color: red1}}
            title="Sign out"
            onPress={logOut}
          />
        </View>
      </View>

      <DisplayData
        style={mt16}
        data={getUerInfo(patientData)}
        title="User Info:"
      />
      <DisplayData
        style={mt16}
        data={getLogInfo(patientData)}
        title="Log Info:"
      />
      <DisplayData
        style={mt16}
        data={getAppInfo(patientData)}
        title="App Info:"
      />
    </View>
  );
  return (
    <ScrollView style={f1_wh_100} showsVerticalScrollIndicator={false}>
      <BottomAppHeader currentTab="Profile" />

      <View style={bottom_App_Body}>{renderBody()}</View>
    </ScrollView>
  );
};
Profile.defaultProps = {
  className: '',
  fetchUserData: () => {},
};
Profile.propTypes = {
  className: PropTypes.string,
  logoutRequest: PropTypes.func.isRequired,
  fetchUserData: PropTypes.func,
};

const mapDispatchToProps = {
  logoutRequest,
};
export default connect(null, mapDispatchToProps)(Profile);
