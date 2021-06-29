import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {SvgXml} from 'react-native-svg';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import GlobalStyles from '../../Styles';
import {colors} from '../../Constant/color';
import {isTheSameObj} from '../../Ulti';
import InputCT from '../../Components/Inputs/inputCT';
import MultipleLines from '../../Components/Inputs/multipleLines';
import IconButton from '../../Components/Buttons/iconButton';
import checkActIc from '../../Images/Basic/checkAct.svg';
import trashActIc from '../../Images/Basic/trashAct.svg';
import downActIc from '../../Images/Basic/downAct.svg';
import checkIc from '../../Images/Basic/check.svg';
import trashIc from '../../Images/Basic/trash.svg';
import downIc from '../../Images/Basic/down.svg';

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

class AddDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      money: 0,
      details: '',
      onDetailFocus: false,
    };
  }

  componentDidMount = () => {
    this.updateState();
  };

  updateState = () => {
    const {money, details, title} = this.props.currentSession;
    this.setState({money, details, title});
  };

  componentDidUpdate = (preProps) => {
    if (!isTheSameObj(preProps.currentSession, this.props.currentSession))
      this.updateState();
  };

  showHeader = () => {
    const {onDeletePress, onCancelPress, onSavePress} = this.props;
    const {title, money, details} = this.state;
    const activeIcons = [trashActIc, downActIc, checkActIc];
    const deactIcons = [trashIc, downIc, checkIc];
    const onPressArr = [onDeletePress, onCancelPress, onSavePress];
    return (
      <View style={header}>
        <View style={{}}>
          <Text>{title}</Text>
        </View>

        <View style={{display: 'flex', flexDirection: 'row'}}>
          {_.map(onPressArr, (x, i) => (
            <IconButton
              icon={activeIcons[i]}
              style={{marginRight: i !== 2 ? 24 : 0}}
              onPress={() => x({title, money, details})}
            />
          ))}
        </View>
      </View>
    );
  };

  onChangeState = (key, value) => this.setState({[key]: value});

  showBody = () => {
    const { money, details } = this.state;
    return (
      <View style={body}>
        <InputCT
          value={money}
          onChangeText={(money) => this.onChangeState('money', money)}
          placeholder="Money you spent"
          type="number"
          keyboardType="number-pad"
          maxLength={10}
        />
        <MultipleLines
          style={{marginTop: 24}}
          inputStyle={{}}
          value={details}
          onChangeText={(details) => this.onChangeState('details', details)}
          placeholder="Note details"
          maxLength={200}
          multiline
        />
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

AddDetail.defaultProps = {
  currentSession: {},
  onCancelPress: () => {},
  onDeletePress: () => {},
  onSavePress: () => {},
};
AddDetail.propTypes = {
  currentSession: PropTypes.shape(),
  onCancelPress: PropTypes.func,
  onDeletePress: PropTypes.func,
  onSavePress: PropTypes.func,
};

export default AddDetail;
