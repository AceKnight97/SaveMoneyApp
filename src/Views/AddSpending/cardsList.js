import React, {Component, useEffect} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import GlobalStyles from '../../Styles';
import {screenW, LinearLib, CreateColors, ALL_FIELDS} from '../../Constant';

import DetailCard from './detailCard';
import {useMergeState} from '../../Helper/customHooks';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    height: '100%',
    width: screenW,
  },
});
const {rwrap} = GlobalStyles;
const {mainView} = styles;

const CardsList = (props) => {
  const [state, setState] = useMergeState({
    formatedData: [],
    searchText: '',
  });
  const {style, logs, onClick, isReviewing} = props;
  const {searchText, formatedData} = state;

  const getFormatedLogs = () => {
    const formatedData = [];
    _.forEach(ALL_FIELDS, (x) => {
      const item = _.find(logs, (y) => y.title === x);
      if (_.isEmpty(item)) {
        formatedData.push({
          title: x,
          money: 0,
          details: '',
          sessions: [],
        });
      } else {
        const {money, details, sessions} = item;
        formatedData.push({
          title: x,
          money,
          details,
          sessions,
        });
      }
    });
    return formatedData;
  };

  useEffect(() => {
    if (isReviewing) {
      setState({formatedData: [...props.logs]});
    } else {
      setState({formatedData: getFormatedLogs()});
    }
  }, [props.isReviewing]);

  useEffect(() => {
    if (isReviewing) {
      return;
    }
    setState({formatedData: getFormatedLogs()});
  }, [props.logs]);

  const onChange = (key, value) => {
    setState({[key]: value});
  };

  // const {getSession, data, searchText, isComplete, style} = props;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        mainView,
        // {
        //   paddingTop: isComplete ? 12 : 24
        // },
        style,
      ]}>
      <View
        style={[
          rwrap,
          // isComplete ? {} : {paddingBottom: 24, marginBottom: 24},
        ]}>
        {_.map(formatedData, (x, i) => (
          <DetailCard
            key={i}
            style={{}}
            data={x}
            wrapperSty={{
              marginLeft: i % 3 !== 0 ? 6 : 0,
              marginTop: i / 3 >= 1 ? 6 : 0,
            }}
            colors={CreateColors[i]}
            // onPress={() => getSession(x)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

CardsList.defaultProps = {
  getSession: () => {},
  data: [],
  searchText: '',
  isComplete: false,
  style: {},
};
CardsList.propTypes = {
  getSession: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.shape()),
  searchText: PropTypes.string,
  isComplete: PropTypes.bool,
  style: PropTypes.shape(),
};

export default CardsList;
