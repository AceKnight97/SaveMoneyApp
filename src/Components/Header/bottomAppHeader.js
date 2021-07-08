import PropTypes from 'prop-types';
import React from 'react';
import {Text, View} from 'react-native';
import ButtonCT from '../../Components/Buttons/ButtonCT';
import {BOTTOM_APP_NAME} from '../../Constant';
import DisplayMoney from '../UI/DisplayMoney';
import BottomAppHeaderStyle from './Style/_bottomAppHeader';

const {bah_wrapper, bah_title} = BottomAppHeaderStyle;

const {JOURNAL, PROFILE, JOURNAL_DETAILS} = BOTTOM_APP_NAME;

const BottomAppHeader = (props) => {
  const {style, currentTab, income, title, logs} = props;

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
        return (
          <ButtonCT
            UserTextStyle={{
              marginRight: -24,
              color: 'red',
            }}
            type="NONE"
            title="Not verified yet"
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={[bah_wrapper, style]}>
      <View>
        <Text style={bah_title}>{title || `Hello Mr. Ace!`}</Text>
      </View>

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
};
BottomAppHeader.propTypes = {
  style: PropTypes.shape(),
  currentTab: PropTypes.string,
  title: PropTypes.string,
  logs: PropTypes.arrayOf(PropTypes.shape()),
  income: PropTypes.number,
};

export default BottomAppHeader;
