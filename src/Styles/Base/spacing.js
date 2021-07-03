import {StyleSheet} from 'react-native';

const margin = StyleSheet.create({
  mt12: {
    marginTop: 12,
  },
  mt16: {
    marginTop: 16,
  },
  mt24: {
    marginTop: 24,
  },
  mt36: {
    marginTop: 36,
  },
  mt48: {
    marginTop: 48,
  },

  mr12: {
    marginRight: 12,
  },
  mr16: {
    marginRight: 16,
  },
  mr24: {
    marginRight: 24,
  },
});

const padding = StyleSheet.create({
  p24: {
    padding: 24,
  },
  pt12: {
    paddingTop: 12,
  },
  pt16: {
    paddingTop: 24,
  },
  pt24: {
    paddingTop: 24,
  },
});

const spacingStyle = StyleSheet.create({
  ...margin,
  ...padding,
});

export default spacingStyle;
