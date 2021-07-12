import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {Text, View} from 'react-native';
import GlobalStyles from '../../../Styles';
import DisplayDataStyle from './_displayData';

const {
  dd_wrapper,
  dd_main,
  dd_title,
  dd_item,
  dd_content,
  left_0,
  right_0,
} = DisplayDataStyle;
const {
  strip,
}=GlobalStyles;

const DisplayData = (props) => {
  const {style, title, widthType} = props;

  let contentStyleLeft;
  let contentStyleRight;
  switch (widthType) {
    case 0:
      contentStyleLeft = left_0;
      contentStyleRight = right_0;
      break;
    default:
      break;
  }

  const renderContent = (content = '', isRight = false) => (
    <Text style={[dd_content, isRight ? contentStyleRight : contentStyleLeft]}>
      {content}
    </Text>
  );

  const renderRight = (x = {}) => {
    const {data, type} = x;
    switch (type) {
      case 'ARRAY':
        return _.map(data || [], (y, index) => (
          <Text style={[dd_content, contentStyleRight]} key={index}>
            {y}
          </Text>
        ));
      default:
        return renderContent(data, true);
    }
  };

  return (
    <View style={[dd_wrapper, style]}>
      {title ? <Text style={dd_title}>{title}</Text> : null}

      <View style={dd_main}>
        {_.map(props.data, (x, index) => (
          <View key={index} style={[dd_item, index%2===0?strip:undefined]}>
            {renderContent(x.title)}
            {renderRight(x)}
          </View>
        ))}
      </View>
    </View>
  );
};
DisplayData.defaultProps = {
  style: {},
  title: '',
  widthType: 0,
  data: [],
};
DisplayData.propTypes = {
  title: PropTypes.string,
  style: PropTypes.shape(),
  widthType: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.shape()),
};

export default DisplayData;
