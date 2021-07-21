import PropTypes from 'prop-types';
import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import Modal from 'react-native-modal';
import {SvgXml} from 'react-native-svg';
import {useMergeState} from '../../../Helper/customHooks';
import confirmIc from '../../../Images/Components/Modals/confirmIcon.svg';
import GlobalStyles from '../../../Styles';
import NewButton from '../../Buttons/NewButton';
import ModalStyles from '../_modals';
import ConfirmModalStyle from './_confirmModal';

const {main, main_title, main_content, wraper} = ConfirmModalStyle;
const {mainViewMid, header_title, body_view} = ModalStyles;
const {f_1, m0, centerC1, mr16, ml24, f_r_just_end} = GlobalStyles;

const CONFIRM_MODAL_TYPES = {
  SEND: 'SEND_REPORT',
  RESET_SPENDING: 'RESET_SPENDING',
};
const {SEND, RESET_SPENDING} = CONFIRM_MODAL_TYPES;

const ConfirmModal = (props) => {
  const [state, setState] = useMergeState({
    data: [],
  });
  const {
    style,
    onClickNo,
    isVisible,
    onClickYes,
    loading,
    type,
    icon,
    isDanger,
  } = props;

  let title;
  let content;
  let leftBtnTitle;
  let rightBtnTitle;

  switch (type) {
    case SEND: {
      title = 'Send report';
      content = 'Send this notification report to MD?';
      leftBtnTitle = 'Cancel';
      rightBtnTitle = 'Send';
      break;
    }
    case RESET_SPENDING: {
      title = 'Reset spending information';
      content = 'Are you sure want to reset?';
      leftBtnTitle = 'Cancel';
      rightBtnTitle = 'Yes';
      break;
    }
    default:
      break;
  }

  const renderMainView = () => (
    <View >
      <Text style={header_title}>{title}</Text>

      <View style={main}>
        <View style={wraper}>
          <SvgXml xml={icon || confirmIc} />
          <Text style={main_content}>{content}</Text>
        </View>

        <View style={f_r_just_end}>
          <NewButton title={leftBtnTitle} onPress={onClickNo} />
          <NewButton
            title={rightBtnTitle}
            style={ml24}
            type={isDanger ? 'danger' : 'primary'}
            onPress={onClickYes}
          />
        </View>
      </View>
    </View>
  );
  return (
    <Modal
      onBackdropPress={onClickNo}
      isVisible={isVisible}
      style={m0}
      backdropOpacity={0.25}>
      <TouchableWithoutFeedback style={f_1} onPress={onClickNo}>
        <View style={centerC1}>
          <View style={f_1} />
          <View
            style={[
              mainViewMid,
              {
                height: 200,
              },
              style,
            ]}>
            {renderMainView()}
          </View>
          <View style={f_1} />
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

ConfirmModal.defaultProps = {
  onClickNo: () => {},
  onClickYes: () => {},
  isVisible: false,
  loading: false,
  icon: undefined,
};
ConfirmModal.propTypes = {
  onClickNo: PropTypes.func,
  onClickYes: PropTypes.func,
  isVisible: PropTypes.bool,
  loading: PropTypes.bool,
  icon: PropTypes.shape(),
};

export default ConfirmModal;
