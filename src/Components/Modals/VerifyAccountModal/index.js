import PropTypes from 'prop-types';
import React, {useEffect, useRef} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import Modal from 'react-native-modal';
import {SvgXml} from 'react-native-svg';
import {useMergeState} from '../../../Helper/customHooks';
import confirmIc from '../../../Images/Components/Modals/confirmIcon.svg';
import GlobalStyles from '../../../Styles';
import {mutationVerifyAccount} from '../../../Views/Profile/helper';
import NewButton from '../../Buttons/NewButton';
import InputCT from '../../Inputs/InputCT';
import ModalStyles from '../_modals';
import VerifyAccountModalStyle from './_verifyAccountModal';

const {main, main_title, main_content, wraper} = VerifyAccountModalStyle;
const {mainViewMid, header_title, body_view} = ModalStyles;
const {f_1, m0, centerC1, mr16, ml24, f_r_just_end, frsb} = GlobalStyles;

const VerifyAccountModal = (props) => {
  const countRef = useRef(0);
  const [state, setState] = useMergeState({
    verificationCode: '',
    invalidCode: '',
    loading: false,

    count: 0,
  });

  const {
    verificationCode, invalidCode, loading, count,
  } = state;

  const {
    style,
    onClickCancel,
    isVisible,
  } = props;

  useEffect(() => {
    let countInterval;
    if (state.count!==0 && countRef.current!==0) {
      countInterval= setInterval(() => {
        countRef.current -= 1;
        setState({count: countRef.current});
      }, 1000);
    }
    return () => {
      clearInterval(countInterval);
    };
  }, [state.count]);

  const onClickResend = () => {
    countRef.current = 60;
    setState({count: countRef.current});
  };

  const onPressVerify = async () => {
    setState({loading: true});
    const res = await mutationVerifyAccount(verificationCode);
    let invalidCode = '';
    if (res) {
      onClickCancel();
    } else {
      invalidCode = 'Invalid code';
    }
    setState({loading: false, invalidCode});
  };

  const onChange = (key, value) => {
    setState({[key]: value, invalidCode: ''});
  };

  const renderMainView = () => (
    <View >
      <Text style={header_title}>Verify account</Text>

      <View style={main}>
        <View style={wraper}>
          <InputCT
            title="Verification code"
            name='verificationCode'
            onChange={onChange}
            value={verificationCode}
            placeholder="050897"
            returnKeyType="done"
            errMes={invalidCode}
            type='NUMBER'
            maxLength={6}
          />
        </View>

        <View style={frsb}>
          <NewButton
            style={{width: 136}}
            title={`Resend ${count!== 0 ? `in ${count}`:''}`}
            onPress={onClickResend}
            disabled={count!== 0 ||loading}
          />
          <NewButton
            title='Verify'
            style={{marginLeft: 24}}
            type='primary'
            onPress={onPressVerify}
            disabled={verificationCode.length !== 6}
            loading={loading}
          />
        </View>
      </View>
    </View>
  );
  return (
    <Modal
      onBackdropPress={onClickCancel}
      isVisible={isVisible}
      style={m0}
      backdropOpacity={0.25}>
      <TouchableWithoutFeedback style={f_1} onPress={onClickCancel}>
        <View style={centerC1}>
          <View style={f_1} />
          <View
            style={[
              mainViewMid,
              {
                height: 260,
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

VerifyAccountModal.defaultProps = {
  onClickCancel: () => {},
  isVisible: false,
  loading: false,
  icon: undefined,
  style: {},
};
VerifyAccountModal.propTypes = {
  onClickCancel: PropTypes.func,
  isVisible: PropTypes.bool,
  loading: PropTypes.bool,
  style: PropTypes.shape(),
};

export default VerifyAccountModal;
