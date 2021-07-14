import {StyleSheet} from 'react-native';
import {screenW} from '../../../Constant';


const LineChartCTStyle = StyleSheet.create({
  main: {
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 16,
  },
  container: {
    height: 220,
    backgroundColor: 'white',
    width: '100%',
  },
  chart: {
    flex: 1,
    width: screenW - 48,
  },
});

export default LineChartCTStyle;


