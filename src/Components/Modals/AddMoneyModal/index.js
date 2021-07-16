import _ from 'lodash';
import PropTypes from 'prop-types';
import React, {useMemo, useEffect} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import Modal from 'react-native-modal';
import {useMergeState} from '../../../Helper/customHooks';
import GlobalStyles from '../../../Styles';
import InputCT from '../../Inputs/InputCT';
import ModalStyles from '../_modals';
import AddMoneyModalStyle from './_addMoneyModal';
import FooterButtons70 from '../../UI/FooterButtons70';

const {main} = AddMoneyModalStyle;
const {header_title, mainViewMid, body_view} = ModalStyles;
const {centerC1, mb16, mt16, mb24, f_1} = GlobalStyles;

const AddMoneyModal = (props) => {
  const [state, setState] = useMergeState({
    money: undefined,
    details: undefined,
    otherTitle: '',
  });
  const {onClickCancel, style, cardItem} = props;

  useEffect(() => {
    if (_.isEmpty(cardItem)) {
      setState({money: undefined, details: undefined, otherTitle: ''});
    } else {
      setState({money: cardItem.money || '', details: cardItem.details});
    }
  }, [props.cardItem]);

  const {money, details, otherTitle} = state;

  const onClickAdd = () => {
    props.onClickAdd({title: otherTitle || cardItem.title, money, details});
  };

  const onChange = (key, value) => {
    setState({[key]: value});
  };

  const renderBody = () => (
    <View
      style={[
        body_view,
        cardItem.title === 'Others' ?
          {
            height: 500 - 58,
          } :
          {},
      ]}>
      <View>
        {cardItem.title === 'Others' && (
          <InputCT
            name="otherTitle"
            style={mb16}
            title="Title (optinal)"
            onChange={onChange}
            value={otherTitle}
            placeholder="Enter your title"
          />
        )}
        <InputCT
          name="money"
          title="Money"
          onChange={onChange}
          value={money}
          placeholder="Enter your spending"
          type="NUMBER"
          maxLength={8}
          // thousandSeparator
        />

        <InputCT
          style={mt16}
          name="details"
          title="Details"
          onChange={onChange}
          value={details}
          placeholder="Enter your details"
          type="TEXT_AREA"
          maxLength={250}
        />
      </View>

      <FooterButtons70
        leftTitle="Cancel"
        rightTitle="Add"
        leftOnPress={onClickCancel}
        rightOnPress={onClickAdd}
        disabled={!money}
      />
    </View>
  );

  const renderMainView = () => (
    <View style={main}>
      <Text style={header_title}>{cardItem.title}</Text>
      {renderBody()}
    </View>
  );

  return (
    <Modal
      onRequestClose={onClickCancel}
      isVisible={!_.isEmpty(cardItem)}
      style={{margin: 0}}
      backdropOpacity={0.25}>
      <TouchableWithoutFeedback style={f_1} onPress={onClickCancel}>
        <View style={centerC1}>
          <View style={f_1} />
          <View
            style={[
              mainViewMid,
              cardItem.title === 'Others' ?
                {
                  height: 500,
                } :
                {},,
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

AddMoneyModal.defaultProps = {
  onClickCancel: () => {},
  onClickAdd: () => {},
  cardItem: {},
};
AddMoneyModal.propTypes = {
  onClickCancel: PropTypes.func,
  onClickAdd: PropTypes.func,
  cardItem: PropTypes.shape(),
};

export default AddMoneyModal;
