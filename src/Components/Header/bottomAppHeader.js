import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import ButtonCT from '../../Components/Buttons/ButtonCT';
import {BOTTOM_APP_NAME} from '../../Constant';
import {getName} from '../../Helper';
import auth from '../../Helper/auth';
import {useMergeState} from '../../Helper/customHooks';
import DisplayMoney from '../UI/DisplayMoney';
import BottomAppHeaderStyle from './Style/_bottomAppHeader';

const {bah_wrapper, bah_title} = BottomAppHeaderStyle;

const {JOURNAL, PROFILE, JOURNAL_DETAILS} = BOTTOM_APP_NAME;

const BottomAppHeader = (props) => {
  const [state, setState] = useMergeState({
    gender: '',
    username: '',
    isVerified: false,
  });
  const {style, currentTab, income, logs, onPress} = props;

  const fetchGenderName = async () => {
    const {gender, username, isVerified} = await auth.getLoginData();
    setState({gender, username, isVerified});
  };

  useEffect(() => {
    fetchGenderName();
  }, []);

  const {gender, username, isVerified} = state;

  const renderRightContent = () => {
    switch (currentTab) {
      case JOURNAL:
        return <DisplayMoney income={income} />;
      case JOURNAL_DETAILS:
        return (
          <DisplayMoney
            logs={logs}
            isIcon
            moneyStyle={{
              fontSize: 18,
            }}
          />
        );
      case PROFILE:
        return isVerified? null: (
          <ButtonCT
            UserTextStyle={{
              marginRight: -24,
              color: 'red',
            }}
            type="NONE"
            title="Not verified yet"
            onPress={onPress}
          />
        );
      default:
        return null;
    }
  };


  return (
    <View style={[bah_wrapper, style]}>
      <Text style={bah_title} ellipsizeMode='tail'
        numberOfLines={1}
      >{`Hello ${getName(gender, username)}!`}</Text>

      {renderRightContent()}
    </View>
  );
};

BottomAppHeader.defaultProps = {
  style: {},
  currentTab: '',
  title: '',
  logs: [],
  income: 0,
  onPress: ()=>{},
};
BottomAppHeader.propTypes = {
  style: PropTypes.shape(),
  currentTab: PropTypes.string,
  title: PropTypes.string,
  logs: PropTypes.arrayOf(PropTypes.shape()),
  income: PropTypes.number,
  onPress: PropTypes.func,
};

export default BottomAppHeader;
