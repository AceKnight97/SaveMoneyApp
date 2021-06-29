import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import {Image, Text, View} from 'react-native';
import BottomAppHeader from '../../Components/Header/bottomAppHeader';
import {screenW} from '../../Constant';
import {My365Quotes} from '../../Data';
import GlobalStyles from '../../Styles';
import ViewsStyle from '../Style';
import MessageStyle from './_message';

const IMG_ARRAY = [
  require('../../Images/Pages/Message/sun.jpg'),
  require('../../Images/Pages/Message/mon.jpg'),
  require('../../Images/Pages/Message/tue.jpg'),
  require('../../Images/Pages/Message/wed.jpg'),
  require('../../Images/Pages/Message/thu.jpg'),
  require('../../Images/Pages/Message/fri.jpg'),
  require('../../Images/Pages/Message/sat.jpg'),
];

const {f1_wh_100} = GlobalStyles;
const {bottom_App_Body} = ViewsStyle;
const {message_body, quote_text} = MessageStyle;

const LAST = moment().dayOfYear() - 10;
const NEXT = moment().dayOfYear() + 10;

const Message = (props) => {
  const customArr = [
    LAST < 0 ? 365 + LAST : LAST,
    moment().dayOfYear(),
    NEXT > 364 ? NEXT - 365 : NEXT,
  ];
  const {style} = props;
  const renderBody = () => (
    <View style={message_body}>
      <Image
        source={IMG_ARRAY[moment().weekday()]}
        style={{height: 250, width: screenW - 48}}
      />
      {_.map(customArr, (x, i) => (
        <Text key={i} style={quote_text}>
          {My365Quotes[x]}
        </Text>
      ))}
    </View>
  );
  return (
    <View style={f1_wh_100}>
      <BottomAppHeader />

      <View style={bottom_App_Body}>{renderBody()}</View>
    </View>
  );
};
Message.defaultProps = {
  style: {},
};
Message.propTypes = {
  style: PropTypes.shape(),
};

export default Message;
