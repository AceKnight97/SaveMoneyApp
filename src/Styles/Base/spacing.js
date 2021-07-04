import {StyleSheet} from 'react-native';

const margin = StyleSheet.create({
  m0: {
    margin: 0,
  },
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
  mr48: {
    marginRight: 48,
  },

  mb12: {
    marginBottom: 12,
  },
  mb16: {
    marginBottom: 16,
  },
  mb24: {
    marginBottom: 24,
  },
  mb48: {
    marginBottom: 48,
  },

  ml12: {
    marginLeft: 12,
  },
  ml16: {
    marginLeft: 16,
  },
  ml24: {
    marginLeft: 24,
  },
  ml48: {
    marginLeft: 48,
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
