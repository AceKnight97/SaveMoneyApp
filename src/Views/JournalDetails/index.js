import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, {useMemo} from 'react';
import {View} from 'react-native';
import BottomAppHeader from '../../Components/Header/bottomAppHeader';
import AddMoneyModal from '../../Components/Modals/AddMoneyModal';
import ConfirmModal from '../../Components/Modals/ConfirmModal';
import CardList from '../../Components/UI/CardList';
import {useMergeState} from '../../Helper/customHooks';
import GlobalStyles from '../../Styles';
import NewButton from '../../Components/Buttons/NewButton';
import JournalDetailsStyle from './_journalDetails';
import {mutationLogs} from './helper';
import SuccessPage from '../../Components/UI/SuccessPage';

const {footer_btns} = JournalDetailsStyle;
const {f1_wh_100} = GlobalStyles;

const STATUS = {
  ADD: 'ADD',
  EDIT: 'EDIT',
  DISPLAY: 'DISPLAY',
};

const {ADD, EDIT, DISPLAY} = STATUS;

const JournalDetails = (props) => {
  const dailyInfo = props.navigation.getParam('dailyInfo');
  const paramsLogs = dailyInfo?.logs || [];
  const [state, setState] = useMergeState({
    logs: _.cloneDeep(paramsLogs),
    cardItem: {},

    isShowResetModal: false,
    isReviewing: false,
    current: paramsLogs.length === 0 ? ADD : DISPLAY,
    loading: false,

    isSuccess: false,
  });

  const isDisplay = useMemo(() => state.current === DISPLAY, [state.current]);

  const isEdit = useMemo(() => state.current === EDIT, [state.current]);

  const {
    cardItem,
    logs,
    isShowResetModal,
    isReviewing,
    isSuccess,
  } = state;

  const onPressGoBack = () => {
    props.navigation.navigate('Journal', state.isSuccess? {back: _.random(9999)}:{});
  };

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
    const {date, id} =dailyInfo||{};
    const res = await mutationLogs({
      id,
      date,
      logs,
    });
    const obj = {loading: false};
    if (res) {
      _.assign(obj, {isSuccess: true});
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
        onPress={isEdit ? onClickCancel : onClickBack}
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
        disabled={logs?.length === 0 || (isEdit && _.isEqual(paramsLogs, logs))}
        type="primary"
        title={isDisplay ? 'Edit' : isReviewing ? 'Complete' : 'Review'}
        onPress={
          isDisplay ?
            onClickEdit :
            isReviewing ?
            onClickComplete :
            onClickReview
        }
      />
    </View>
  );

  return (
    <>
      {
      isSuccess ? (
        <SuccessPage onClickBack={onPressGoBack} />):(
          <View style={f1_wh_100}>
            <BottomAppHeader
              title={dailyInfo.date}
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
        )
      }

      <AddMoneyModal
        cardItem={cardItem}
        onClickCancel={onClickCloseModal}
        onClickAdd={onClickAddInfo}
      />
      <ConfirmModal
        isVisible={isShowResetModal}
        onClickNo={toggleConfirmModal}
        onClickYes={onHandleReset}
        type="RESET_SPENDING"
      />
    </>
  );
};
JournalDetails.defaultProps = {
  style: {},
};
JournalDetails.propTypes = {
  style: PropTypes.shape(),
  navigation: PropTypes.shape().isRequired,
};

export default JournalDetails;
