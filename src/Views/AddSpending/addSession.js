import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';
import {StyleSheet, Text, View} from 'react-native';
import GlobalStyles from '../../Styles';
import SearchBar from '../../Components/Inputs/searchBar';
import ModalCT from '../../UI/Modal/modalCT';
import AddDetail from '../../UI/AddSpending/addDetail';
import CardsList from './cardsList';
import {CardListData} from '../../Constant';
import {filterArrObject, getSessionData} from '../../Ulti';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    // marginBottom: 12,
  },
});

const {} = GlobalStyles;
const {mainView} = styles;
// const paramData = this.props.navigation.getParam('data');
// const update = this.props.navigation.getParam('update');

class AddSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSession: {},
      data: [],
      searchText: '',
    };
  }

  componentDidMount = () => {
    const paramData = this.props.navigation.getParam('data'); // from Add Spending use ONCE
    console.log('paramData: ', paramData);
    const data = getSessionData(paramData);
    _.forEach(data, (x) => {
      if(x.money)    console.log('getSessionData(paramData): ', x)
    })
    this.setState({data});
  };

  getSession = (currentSession) => this.setState({currentSession});

  onChange = (key, value) => this.setState({[key]: value});

  onCancelPress = () => this.setState({currentSession: {}});

  onDeletePress = (item) => {
    const {data} = this.state;
    const foundItem = _.find(data, (x) => x.title === item.title);
    if (foundItem) _.assign(foundItem, {money: 0, details: ''});
    this.setState({data, currentSession: {}});

    // UPDATE TO PARENT WHEN SAVE OR DELETE
    const update = this.props.navigation.getParam('update');
    if (update) update(data);
  };

  onSavePress = (item) => {
    const {data} = this.state;
    const alreadyIn = _.find(data, (x) => x.title === item.title);
    _.assign(alreadyIn, {...item});
    this.setState({data, currentSession: {}});

    // UPDATE TO PARENT WHEN SAVE OR DELETE
    const update = this.props.navigation.getParam('update');
    if (update) update(filterArrObject(data));
  };

  onClosePress = () => this.props.navigation.goBack();

  render() {
    const {currentSession, searchText, data} = this.state;
    // console.log('data: ', data);
    return (
      <View style={mainView}>
        <SearchBar
          callAPI={(x) => this.setState({searchText: x})}
          onClosePress={this.onClosePress}
        />
        <View style={{flex: 1, width: '100%', height: '100%'}}>
          <CardsList
            style={{paddingHorizontal: 24}}
            data={data}
            getSession={this.getSession}
            searchText={searchText}
          />
        </View>
        <ModalCT type="BOTTOM" isVisible={!_.isEmpty(currentSession)}>
          {/* // onRequestClose={this.onCancelPress} */}
          <AddDetail
            currentSession={currentSession}
            onCancelPress={this.onCancelPress}
            onDeletePress={this.onDeletePress}
            onSavePress={this.onSavePress}
          />
        </ModalCT>
      </View>
    );
  }
}

AddSession.defaultProps = {};
AddSession.propTypes = {};

export default AddSession;
