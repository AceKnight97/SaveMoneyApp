import {StyleSheet} from 'react-native';
import {colors} from '../../Constant/color';
const {green1} = colors;

const CompleteAddingStyles = StyleSheet.create({
  mainView: {
    flex: 1,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    // padding: 24,
    paddingHorizontal: 24,
    paddingTop:24
  },
  buttonsSty: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  header: {
    // height: '40%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  headerText: {
    fontSize: 36,
    color: green1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  body: {
    // height: '60%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 1
  },
  confirmQuestion: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 16,
    fontSize: 18,
  },
  showSessionStyle:{
    display: 'flex',
    flexDirection: 'column',
    marginTop: 12,
    padding: 0,
  }
});

export default CompleteAddingStyles;
