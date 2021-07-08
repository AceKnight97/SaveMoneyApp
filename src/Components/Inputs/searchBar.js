import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {SvgXml} from 'react-native-svg';

import GlobalStyles from '../../Styles';
import {colors} from '../../Constant/color';
import {screenW} from '../../Constant';

import ButtonCT from '../Buttons/ButtonCT';

import closeIc from '../../../src/Images/Basic/close.svg';

const {green00, green, field, gray1, black1} = colors;

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomColor: green,
    borderBottomWidth: 1,
  },
  inputSty: {
    flex: 1,
    height: 40,

    margin: 0,
    marginRight: 12,

    paddingVertical: 0,
    paddingHorizontal: 16,

    borderRadius: 4,
    borderWidth: 1,
  },
  buttonSty: {
    height: 40,
    width: 40,
    marginRight: -16,
    // borderRadius: 4,
    // backgroundColor: green00,
  },
});
const {flexRowAligCent} = GlobalStyles;
const {mainView, inputSty, buttonSty} = styles;
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  searchUpdated(term) {
    console.log('term: ', term);
    if (this.timeOutCallAPI) clearTimeout(this.timeOutCallAPI);
    this.timeOutCallAPI = setTimeout(() => this.props.callAPI(term), 500);
  }

  render() {
    const {searchText} = this.state;
    const {placeholder, onClosePress} = this.props;
    return (
      <View style={mainView}>
        <TextInput
          style={[
            inputSty,
            searchText ? {borderColor: green} : {borderColor: black1},
          ]}
          onChangeText={(x) => {
            this.setState({searchText: x});
            this.searchUpdated(x);
          }}
          value={searchText}
          placeholder={placeholder || 'Search'}
        />

        <TouchableOpacity style={[buttonSty]} onPress={onClosePress}>
          <SvgXml
            xml={closeIc}
            width="40"
            height="40"
            // style={{borderWidth: 1}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

SearchBar.defaultProps = {
  placeholder: '',
  callAPI: () => {},
  onClosePress: () => {},
};
SearchBar.propTypes = {
  placeholder: PropTypes.string,
  callAPI: PropTypes.func,
  onClosePress: PropTypes.func,
};

export default SearchBar;
