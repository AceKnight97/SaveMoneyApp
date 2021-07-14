import PropTypes from 'prop-types';
import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SvgXml} from 'react-native-svg';
import goldIc from '../../../Images/Components/gold.svg';
import GlobalStyles from '../../../Styles';
import NewButton from '../../Buttons/NewButton';
import SuccessPageStyle from './_successPage';

const {main, successTitle, goBackBtn} = SuccessPageStyle;
const {centerC1, f1_wh_100} = GlobalStyles;

const SuccessPage = (props) => {
  const {style, onClickBack, icon} = props;

  return (
    <View style={f1_wh_100}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0, 0.74]}
        colors={['#63d471', '#233329']}
        style={[centerC1, style]}
      >
        <SvgXml xml={icon || goldIc} width='250' height='250' />
        <Text
          style={successTitle}
        >{`Success & Thanks!`}</Text>

        <NewButton
          title='Go back'
          style={goBackBtn}
          type={'primary'}
          onPress={onClickBack}
        />
      </LinearGradient>
    </View>
  );
};

SuccessPage.defaultProps = {
  onClickBack: ()=>{},
  style: {},
  icon: undefined,
};
SuccessPage.propTypes = {
  onClickBack: PropTypes.func,
  style: PropTypes.shape(),
  icon: PropTypes.oneOfType([
    PropTypes.shape(),
    PropTypes.string,
  ]),
};

export default SuccessPage;
