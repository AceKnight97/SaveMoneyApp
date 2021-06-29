import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Modal from 'react-native-modal';
import { useMergeState } from '../../../Helper/customHooks';
import GlobalStyles from '../../../Styles';
import ModalStyles from '../_modals';

const {
  mainViewBot,
  mainViewMid,
} = ModalStyles;

const {centerC1} = GlobalStyles;

const AddMoneyModal = (props) => {
  const [state, setState] = useMergeState({
    data: [],
  });
  const { onRequestClose, type, isVisible, style } = props;
  
  const renderMainView = () => (
    <View>
      <Text>AddMoneyModal</Text>
    </View>
  )

  return (
    <Modal
      onRequestClose={onRequestClose}
      isVisible={isVisible}
      style={{margin: 0}}
      backdropOpacity={0.25}>
      <TouchableWithoutFeedback style={{flex: 1}} onPress={onRequestClose}>
        {type === 'MIDLE' ? (
          <View style={centerC1}>
            <View style={{flex: 1}} />
            <View style={[mainViewMid]}>{renderMainView()}</View>
            <View style={{flex: 1}} />
          </View>
        ) : (
          <View style={{flex: 1}}>
            <View style={{flex: 1}} />
            <View style={[mainViewBot]}>{renderMainView()}</View>
          </View>
        )}
      </TouchableWithoutFeedback>
    </Modal>
  );
};

AddMoneyModal.defaultProps = {
  isVisible: false,
  onRequestClose: () => {},
};
AddMoneyModal.propTypes = {
  isVisible: PropTypes.bool,
  onRequestClose: PropTypes.func,
};

export default AddMoneyModal;
