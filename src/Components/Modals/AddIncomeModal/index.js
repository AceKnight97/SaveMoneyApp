import PropTypes from 'prop-types';
import {Datepicker} from '@ui-kitten/components';
import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Modal from 'react-native-modal';
import { useMergeState } from '../../../Helper/customHooks';
import GlobalStyles from '../../../Styles';
import ModalStyles from '../_modals';
import ModalHeader from '../ModalHeader';
import moment from 'moment';
import { TODAY } from '../../../Constant';

const {
  mainViewBot,
  mainViewMid,
} = ModalStyles;
const {
  p24
} = GlobalStyles;

const {centerC1} = GlobalStyles;

const AddIncomeModal = (props) => {
  const [state, setState] = useMergeState({
    selectedDate: TODAY,
  });

  const { onRequestClose, type, isVisible, style } = props;

  const { selectedDate } = state;

  const onSelectDate = (selectedDate) => {
    setState({selectedDate});
  };

  const filter = inputValue => rmaInfoList.filter(option => {
    const caiMuonBietLaGi = option.value.valueOf(state.searchType);
    console.log({
      searchType: state.searchType,
      caiMuonBietLaGi,
    })
    return caiMuonBietLaGi.toLowerCase().includes(inputValue.toLowerCase())
  });

  
  const renderBody = () => (
    <View style={p24}>
      <Datepicker
        onSelect={onSelectDate}
        date={selectedDate}
        max={TODAY}
        style={{zIndex: 99999999999}}
      />
      

    </View>
  )

  return (
    <Modal
      onRequestClose={onRequestClose}
      isVisible={isVisible}
      style={{margin: 0}}
      backdropOpacity={0.25}>
      <TouchableWithoutFeedback style={{flex: 1}} onPress={onRequestClose}>
          <View style={centerC1}>
          <View style={{ flex: 1 }} />
          
          <View style={mainViewMid}>
            <ModalHeader title='Add your income' />

            {renderBody()}
          </View>

            <View style={{flex: 1}} />
          </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

AddIncomeModal.defaultProps = {
  isVisible: false,
  onRequestClose: () => {},
};
AddIncomeModal.propTypes = {
  isVisible: PropTypes.bool,
  onRequestClose: PropTypes.func,
};

export default AddIncomeModal;
