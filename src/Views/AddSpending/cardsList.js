import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {StyleSheet, Text, View, ScrollView, RefreshControl} from 'react-native';
import GlobalStyles from '../../Styles';
import {screenW, LinearLib, CreateColors} from '../../Constant';

import DetailCard from './detailCard';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    height: '100%',
    width: screenW,
   
  },
});
const {rwrap} = GlobalStyles;
const {mainView} = styles;

class CardsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {};

  render() {
    const {getSession, data, searchText, isComplete, style} = this.props;
    const displayedData =  searchText
      ? _.filter(data, (x) =>
          x?.title
            ?.toLocaleLowerCase()
            .includes(searchText?.toLocaleLowerCase()),
        )
      : data;
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={[mainView, {paddingTop:isComplete?12:24 },style]}>
        <View style={[rwrap, isComplete?{}:{paddingBottom:24, marginBottom:24}]}>
          {_.map(displayedData, (x, i) => (
            <DetailCard
              key={i}
              style={{}}
              data={x}
              wrapperSty={{
                marginLeft: i % 3 !== 0 ? 6 : 0,
                marginTop: i / 3 >= 1 ? 6 : 0,
              }}
              colors={CreateColors[i]}
              onPress={() => getSession(x)}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}

CardsList.defaultProps = {
  getSession: () => {},
  data: [],
  searchText: '',
  isComplete: false,
  style: {}
};
CardsList.propTypes = {
  getSession: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.shape()),
  searchText: PropTypes.string,
  isComplete: PropTypes.bool,
  style: PropTypes.shape(),
};

export default CardsList;
