import PropTypes from 'prop-types';
import React from 'react';
import {Text, View} from 'react-native';
import MessageStyle from './_message';
const {main} = MessageStyle;

const Message = (props) => {
  const [state, setState] = useMergeState({
    data: [],
  });
  const {style} = props;
  return (
    <View style={[main, style]}>
      <Text>Journal</Text>
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
