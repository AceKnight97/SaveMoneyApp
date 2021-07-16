import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {getProfile, isNoProfile, setProfile} from '../../../Ulti';
import ModalCT from '../../../UI/Modal/modalCT';
import GlobalStyles from '../../../Styles';
import InputRowCT from '../../../Components/Inputs/inputRowCT';
import MultipleLines from '../../../Components/Inputs/multipleLines';
import InputButton from '../../../Components/Buttons/inputButton';
import EditItemView from './editItemView';

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingTop: 48,
  },
  dobSty: {
    marginBottom: 0,
    justifyContent: 'center',
    marginRight: 4,
  },
  editFooter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'transparent',
    marginBottom: 24,
  },
});
const {mt24} = GlobalStyles;
const {mainView, dobSty, editFooter} = styles;

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      dob: '',
      sex: '',
      email: '',
      reason: '',
      cur: '',
    };
  }

  componentDidMount = () => {
    const {profileInfo} = this.props;
    const {user, dob, sex, email, reason} = profileInfo;
    this.setState({user, dob, sex, email, reason});
  };

  onChange = (key, value) => this.setState({[key]: value});

  showModal = () => {
    const onRequestClose = () => this.setState({cur: ''});
    const {cur} = this.state;
    if (cur === 'Date of birth')
      return (
        <ModalCT isVisible={!!cur} onRequestClose={onRequestClose}>
          <EditItemView
            isDob
            title={cur}
            onSavePress={(x) => this.setState({dob: x})}
            onCancelPress={onRequestClose}
          />
        </ModalCT>
      );
    const keyVal = cur.toLocaleLowerCase();
    return (
      <ModalCT isVisible={!!cur} onRequestClose={onRequestClose}>
        <EditItemView
          title={cur}
          onSavePress={(x) => this.setState({[keyVal]: x})}
          onCancelPress={onRequestClose}
        />
      </ModalCT>
    );
  };

  render() {
    const {user, dob, sex, email, reason} = this.state;
    const {onPressBack} = this.props;
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={mainView}>
            <InputRowCT
              title="User"
              value={user}
              onChangeText={(x) => this.onChange('user', x)}
              placeholder="Mr. Your Name"
              onPress={() => this.setState({cur: 'User'})}
            />

            <InputButton
              titleSty={dobSty}
              style={{...mt24, display: 'flex', flexDirection: 'row'}}
              title="Date of birth:"
              value={dob}
              placeholder="05/08/1997"
              onPress={() => this.setState({cur: 'Date of birth'})}
            />

            <InputRowCT
              style={mt24}
              title="Sex"
              value={sex}
              onChangeText={(x) => this.onChange('sex', x)}
              placeholder="Feel free to write down your sex!"
              onPress={() => this.setState({cur: 'Sex'})}
            />

            <InputRowCT
              style={mt24}
              title="Email"
              value={email}
              onChangeText={(x) => this.onChange('email', x)}
              placeholder="tttriet1997@gmail.com"
              keyboardType="email-address"
              onPress={() => this.setState({cur: 'Email'})}
            />

            <MultipleLines
              style={mt24}
              title="Reason you use this app?"
              input
              value={reason}
              onChangeText={(x) => this.onChange('reason', x)}
              placeholder="I want to save money for my better future!"
              maxLength={250}
              multiline
            />
          </View>
        </ScrollView>

        {/* <View style={editFooter}>
          <ButtonCT
            type="NONE"
            mainViewStyle={{marginLeft: -24}}
            title="Cancel"
            onPress={onPressBack}
          />
          <ButtonCT
            type="LINEAR"
            title="Save"
            onPress={() => {
              setProfile({user, dob, sex, email, reason});
              onPressBack();
            }}
          />
        </View> */}

        {this.showModal()}
      </View>
    );
  }
}

EditProfile.defaultProps = {
  profileInfo: {},
  onPressBack: () => {},
};
EditProfile.propTypes = {
  profileInfo: PropTypes.shape(),
  onPressBack: PropTypes.func,
};
export default EditProfile;
