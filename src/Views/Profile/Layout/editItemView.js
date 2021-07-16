import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
// import {SvgXml} from 'react-native-svg';
import TextInputMask from 'react-native-text-input-mask';
import {StyleSheet, Text, View} from 'react-native';
import GlobalStyles from '../../../Styles';
import {colors} from '../../../Constant/color';
import InputCT from '../../../Components/Inputs/InputCT';
// import {isTheSameObj} from '../../Ulti';
// import MultipleLines from '../../Components/Inputs/multipleLines';
// import IconButton from '../../Components/Buttons/IconButton';
import checkActIc from '../../../Images/Basic/checkAct.svg';
import downActIc from '../../../Images/Basic/downAct.svg';
import checkIc from '../../../Images/Basic/check.svg';
import downIc from '../../../Images/Basic/down.svg';

const {centerC1, cent, centerC} = GlobalStyles;
const {green, gray1} = colors;

const styles = StyleSheet.create({
  mainView: {},
  header: {
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: {
    marginTop: 24,
  },
});
const {mainView, header, body} = styles;

class EditItemView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  showHeader = () => {
    const {onCancelPress, onSavePress, title} = this.props;
    const activeIcons = [downActIc, checkActIc];
    // const deactIcons = [downIc, checkIc];
    const onPressArr = [onCancelPress, onSavePress];
    return (
      <View style={header}>
        <View >
          <Text>{title}</Text>
        </View>

        {/* <View style={{display: 'flex', flexDirection: 'row'}}>
          {_.map(onPressArr, (x, i) => (
            <IconButton
              icon={activeIcons[i]}
              style={{marginRight: i !== 1 ? 24 : 0}}
              onPress={() => x({title, value, details})}
            />
          ))}
        </View> */}
      </View>
    );
  };

  showBody = () => {
    const {isDob} = this.props;
    const {value} = this.state;
    return (
      <View style={body}>
        {isDob ? (
          <TextInputMask
            refInput={(ref) => (this.input = ref)}
            value={value}
            onChangeText={(formatted, extracted) => {
              console.log(formatted); // +1 (123) 456-78-90
              console.log(extracted); // 1234567890
              this.setState({value: formatted});
            }}
            mask={'[00]/[00]/[9900]'}
          />
        ) : (
          <InputCT
            value={value}
            onChangeText={(x) => this.setState({value: x})}
            placeholder="Enter text"
            maxLength={25}
          />
        )}
      </View>
    );
  };

  render() {
    return (
      <View style={mainView}>
        {this.showHeader()}
        {this.showBody()}
      </View>
    );
  }
}

EditItemView.defaultProps = {
  title: 'No title',
  isDob: false,
  onCancelPress: () => {},
  onSavePress: () => {},
};
EditItemView.propTypes = {
  title: PropTypes.string,
  isDob: PropTypes.bool,
  onCancelPress: PropTypes.func,
  onSavePress: PropTypes.func,
};

export default EditItemView;
