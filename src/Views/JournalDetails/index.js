import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';
import AddMoneyModal from '../../Components/Modals/AddMoneyModal';
import { useMergeState } from '../../Helper/customHooks';
import GlobalStyles from '../../Styles';
import ViewsStyle from '../Style';

const {f1_wh_100} = GlobalStyles;
const { bottom_App_Body } = ViewsStyle;

const STATUS = {
  ADD: 'ADD',
  EDIT: 'EDIT',
  DISPLAY: 'DISPLAY',
};

const {
  ADD, EDIT, DISPLAY,
} = STATUS;

const JournalDetails = (props) => {
  const [state, setState] = useMergeState({
    logs: _.cloneDeep(props.logs),
    cardItem: {},

    isShowResetModal: false,
    isReviewing: false,
    isCompleted: false,
    current: props.logs?.length === 0 ? ADD : DISPLAY,
    loading: false,
  });
  const {style} = props;

  const {cardItem} = state;

  const onCloseAddMoneyModal = () => {};
  return (
    <>
      <View style={f1_wh_100}>
        <Text>Journal Details</Text>
      </View>
      <AddMoneyModal
        isVisible={!_.isEmpty(cardItem)}
        onRequestClose={onCloseAddMoneyModal}
      />
    </>
  );
};
JournalDetails.defaultProps = {
  style: {},
  logs:[],
};
JournalDetails.propTypes = {
  style: PropTypes.shape(),
  logs:PropTypes.arrayOf(PropTypes.shape()),
};

export default JournalDetails;
