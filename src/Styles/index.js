import {StyleSheet} from 'react-native';
import flexBox from './Base/flexBox';
import reuseStyle from './Base/reuse';
import shadowStyle from './Base/shadow';
import spacingStyle from './Base/spacing';

const GlobalStyles = StyleSheet.create({
  ...flexBox,
  ...spacingStyle,
  ...shadowStyle,
  ...reuseStyle,
});

export default GlobalStyles;
