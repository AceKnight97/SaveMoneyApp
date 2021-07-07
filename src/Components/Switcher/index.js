import PropTypes from 'prop-types';
import React from 'react';
import {Text, View} from 'react-native';
import {useMergeState} from '../../Helper/customHooks';
import NewButton from '../Buttons/NewButton';
import SwitcherStyle from './_switcher';
const {main} = SwitcherStyle;

const Switcher = (props) => {
  const [state, setState] = useMergeState({
    data: [],
  });
  const {style, leftTitle, rightTitle, onChange, activeTab} = props;

  const onPressLeft = () => {
    onChange('activeTab', leftTitle);
  };
  const onPressRight = () => {
    onChange('activeTab', rightTitle);
  };

  return (
    <View style={[main, style]}>
      <NewButton
        type={activeTab === leftTitle ? 'primary' : 'text'}
        style={{width: 120}}
        // style={profile_change_info}
        title={leftTitle}
        onPress={onPressLeft}
      />

      <NewButton
        type={activeTab === rightTitle ? 'primary' : 'text'}
        style={{width: 120, marginLeft: 24}}
        title={rightTitle}
        onPress={onPressRight}
      />
    </View>
  );
};
Switcher.defaultProps = {
  style: {},
  leftTitle: '',
  rightTitle: '',
  onChange: () => {},
  activeTab: '',
};
Switcher.propTypes = {
  style: PropTypes.shape(),
  leftTitle: PropTypes.string,
  rightTitle: PropTypes.string,
  onChange: PropTypes.func,
  activeTab: PropTypes.string,
};

export default Switcher;
