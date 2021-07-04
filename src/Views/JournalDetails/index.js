import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, {useMemo} from 'react';
import {View} from 'react-native';
import BottomAppHeader from '../../Components/Header/bottomAppHeader';
import AddMoneyModal from '../../Components/Modals/AddMoneyModal';
import CardList from '../../Components/UI/CardList';
import {useMergeState} from '../../Helper/customHooks';
import GlobalStyles from '../../Styles';
import NewButton from '../../Components/Buttons/NewButton';
import JournalDetailsStyle from './_journalDetails';
import {mutationLogs} from './helper';

const {footer_btns} = JournalDetailsStyle;
const {f1_wh_100} = GlobalStyles;

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

  const onChange = (key, value) => {
    setState({[key]: value});
  };

  const isDisplay = useMemo(() => state.current === DISPLAY, [state.current]);

  const isEdit = useMemo(() => state.current === EDIT, [state.current]);

  const {style, onClickBackToJournal} = props;
  console.log({current: state.current});
  const {
    cardItem,
    logs,
    isShowResetModal,
    isReviewing,
    isCompleted,
    loading,
  } = state;

  const onClickBack = () => {
    if (isReviewing) {
      setState({isReviewing: false, logs: [...logs]});
      return;
    }
    props.navigation.goBack();
  };

  const onClickReview = () => {
    setState({isReviewing: true});
  };

  const onPressCardItem = (cardItem = {}) => {
    console.log({cardItem});
    if (isReviewing || isDisplay) {
      return;
    }
    setState({cardItem});
  };

  const onClickCloseModal = () => {
    setState({cardItem: {}});
  };

  const onClickAddInfo = (info = {}) => {
    const item = _.find(logs, (x) => x.title === info.title);
    if (_.isEmpty(item)) {
      logs.push({...info});
    } else {
      _.assign(item, {...info});
    }
    setState({cardItem: {}, logs: [...logs]});
  };

  const onHandleReset = () => {
    setState({logs: [], isShowResetModal: false});
  };

  const toggleConfirmModal = () => {
    setState({isShowResetModal: !isShowResetModal});
  };

  const onClickComplete = async () => {
    setState({loading: true});
    const res = await mutationLogs({
      id: props.id,
      date: props.date,
      logs,
    });
    const obj = {loading: false};
    if (res) {
      _.assign(obj, {isCompleted: true});
    }
    setState(obj);
  };

  const onClickEdit = () => {
    setState({current: EDIT});
  };

  const onClickCancel = () => {
    setState({current: DISPLAY});
  };

  const renderFooters = () => (
    <View style={footer_btns}>
      <NewButton
        title={isEdit ? 'Cancel' : 'Back'}
        onClick={isEdit ? onClickCancel : onClickBack}
      />

      {!(isReviewing || isDisplay) && (
        <NewButton
          disabled={logs?.length === 0}
          type="danger"
          onPress={toggleConfirmModal}
          title="Reset"
        />
      )}

      <NewButton
        type="primary"
        title={isDisplay ? 'Edit' : isReviewing ? 'Complete' : 'Review'}
        onPress={
          isDisplay
            ? onClickEdit
            : isReviewing
            ? onClickComplete
            : onClickReview
        }
      />
    </View>
  );

  return (
    <>
      <View style={f1_wh_100}>
        <BottomAppHeader
          title={moment(date || undefined).format('ddd - DD/MM/YY')}
          currentTab="Journal_Details"
          logs={logs}
        />

        <CardList
          logs={logs}
          onPress={onPressCardItem}
          isReviewing={isReviewing || isDisplay}
        />

        {renderFooters()}
      </View>

      <AddMoneyModal
        cardItem={cardItem}
        onClickCancel={onClickCloseModal}
        onClickAdd={onClickAddInfo}
      />
    </>
  );
};
JournalDetails.defaultProps = {
  id: '',
  style: {},
  date: moment(),
  onClickBackToJournal: () => {},
  logs: [],
};
JournalDetails.propTypes = {
  id: PropTypes.string,
  style: PropTypes.shape(),
  date: PropTypes.shape(),
  onClickBackToJournal: PropTypes.func,
  logs: PropTypes.arrayOf(PropTypes.shape()),
};

export default JournalDetails;
