import _ from 'lodash';
import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {ALL_FIELDS, CreateColors, getLinearColors} from '../../../Constant';
import {useMergeState} from '../../../Helper/customHooks';
import InputCT from '../../Inputs/InputCT';
import DetailCard from '../CardItem';
import CardListStyle from './_cardList';

const {main, wrapper, list_view} = CardListStyle;

const CardList = (props) => {
  const [state, setState] = useMergeState({
    formatedData: [],
    searchText: '',
  });
  const {style, logs, onPress, isReviewing} = props;
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
        });
      } else {
        const {money, details} = item;
        formatedData.push({
          title: x,
          money,
          details,
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

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={[main, style]}>
      <View style={wrapper}>
        <InputCT
          name="searchText"
          value={searchText}
          onChange={onChange}
          placeholder="Search..."
        />
        <View style={list_view}>
          {_.map(
            searchText
              ? _.filter(formatedData, (item) =>
                  item.title.toLowerCase()?.includes(searchText?.toLowerCase()),
                )
              : formatedData,
            (x, i) => (
              <DetailCard
                key={i}
                data={x}
                wrapperSty={{
                  marginLeft: i % 3 !== 0 ? 6 : 0,
                  marginTop: i / 3 >= 1 ? 6 : 0,
                }}
                colors={getLinearColors(i, x.title)}
                onPress={onPress}
              />
            ),
          )}
        </View>
      </View>
    </ScrollView>
  );
};
CardList.defaultProps = {
  style: {},
  logs: [],
  onPress: () => {},
  isReviewing: false,
};
CardList.propTypes = {
  style: PropTypes.shape(),
  logs: PropTypes.arrayOf(PropTypes.shape()),
  onPress: PropTypes.func,
  isReviewing: PropTypes.bool,
};

export default CardList;
