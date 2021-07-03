import _ from 'lodash';
import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {useMergeState} from '../../../Helper/customHooks';
import InputCT from '../../Inputs/InputCT';
import CardListStyle from './_cardList';
import CardItem from '../CardItem';
import DetailCard from '../../../Views/AddSpending/detailCard';
import {ALL_FIELDS, CreateColors, screenH, screenW} from '../../../Constant';

const {main} = CardListStyle;

const CardList = (props) => {
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

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        {
          // flex: 1,
          // height: screenH - 72 - 64 - 99,
          width: screenW,
          padding: 24,
        },
        style,
      ]}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          // height: screenH - 72,
          marginBottom: 24,
        }}>
        <InputCT
          name="searchText"
          value={searchText}
          onChange={onChange}
          placeholder="Search..."
        />
        <View
          style={[
            {
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginVertical: 24,
            },
            // isComplete ? {} : {paddingBottom: 24, marginBottom: 24},
          ]}>
          {_.map(
            searchText
              ? _.filter(formatedData, (item) =>
                  item.title.toLowerCase()?.includes(searchText?.toLowerCase()),
                )
              : formatedData,
            (x, i) => (
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
  onClick: () => {},
  isReviewing: false,
};
CardList.propTypes = {
  style: PropTypes.shape(),
  logs: PropTypes.arrayOf(PropTypes.shape()),
  onClick: PropTypes.func,
  isReviewing: PropTypes.bool,
};

export default CardList;
