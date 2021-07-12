import {StyleSheet} from 'react-native';
import {colors} from '../../../Constant/color';

const {
  gray1,
}=colors;

const MonthlySummaryStyle = StyleSheet.create({
  main: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  monthly_summary_part: {
    width: '47.5%',
  },
  monthly_summary_content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
  },
  monthly_summary_title: {
    fontWeight: 'bold',
    marginBottom: 6,
  },
});

export default MonthlySummaryStyle;
