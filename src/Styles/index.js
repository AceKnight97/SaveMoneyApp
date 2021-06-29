import {StyleSheet} from 'react-native';
import flexBox from './Base/flexBox';
import shadowStyle from './Base/shadow';
import spacingStyle from './Base/spacing';

const GlobalStyles = StyleSheet.create({
  ...flexBox,
  ...spacingStyle,
  ...shadowStyle, 
});

export default GlobalStyles;