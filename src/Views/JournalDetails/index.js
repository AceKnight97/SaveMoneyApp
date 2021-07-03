import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import {ScrollView, View} from 'react-native';
import BottomAppHeader from '../../Components/Header/bottomAppHeader';
import CardList from '../../Components/UI/CardList';
// import CardList from '../AddSpending/cardsList';
import {useMergeState} from '../../Helper/customHooks';
import GlobalStyles from '../../Styles';
import ViewsStyle from '../Style';
import JournalDetailsStyle from './_journalDetails';

const {f1_wh_100} = GlobalStyles;
const {bottom_App_Body} = ViewsStyle;
const {main} = JournalDetailsStyle;

const STATUS = {
  ADD: 'ADD',
  EDIT: 'EDIT',
  DISPLAY: 'DISPLAY',
};

const {ADD, EDIT, DISPLAY} = STATUS;

const JournalDetails = (props) => {
  const date = props.navigation.getParam('date');
  const [state, setState] = useMergeState({
    logs: _.cloneDeep(props.navigation.getParam('logs')) || [],
    cardItem: {},

    isShowResetModal: false,
    isReviewing: false,
    isCompleted: false,
    current: props.logs?.length === 0 ? ADD : DISPLAY,
    loading: false,
  });
  console.log({date});
  const {style} = props;

  const {cardItem, logs} = state;

  const onChange = (key, value) => {
    setState({[key]: value});
  };
  return (
    <View style={f1_wh_100}>
      <BottomAppHeader
        title={moment(date || undefined).format('ddd - DD/MM/YY')}
        currentTab="Journal_Details"
        logs={logs}
      />

      <CardList
        style={
          {
            // marginTop: 24,
            // justifyContent: 'center',
            // backgroundColor: 'green',
          }
        }
      />
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        <View style={main}>
          <CardList />
        </View>
      </ScrollView> */}

      {/* <KeyboardAvoidingView enabled>
        <ScrollView>
          <View style={wrapper}>
            
          </View>
        </ScrollView>
      </KeyboardAvoidingView> */}
    </View>
  );
};
JournalDetails.defaultProps = {
  style: {},
  logs: [],
};
JournalDetails.propTypes = {
  style: PropTypes.shape(),
  logs: PropTypes.arrayOf(PropTypes.shape()),
};

export default JournalDetails;
