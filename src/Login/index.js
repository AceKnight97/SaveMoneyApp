import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import _ from 'lodash';
import { useMergeState } from '../Helper/customHooks';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems:'center'
  },
});
const { mainView } = styles;

const MyCompo = (props) => {
  const [state, setState] = useMergeState({
    data: [],
  });
  const { style } = props;
  return (
    <View style={[mainView,style]}>
       <Text style={{color: 'red'}}>Journal</Text>
      </View>
  );
};
MyCompo.defaultProps = {
  className: '',
};
MyCompo.propTypes = {
  className: PropTypes.string,
};

export default MyCompo;