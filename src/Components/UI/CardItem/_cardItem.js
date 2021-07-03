import {StyleSheet} from 'react-native';

const CardItemStyle = StyleSheet.create({
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32%',
    height: 150,
    marginTop: 6,
    borderRadius: 8,
    backgroundColor: 'red',
  },
  title_style: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 2,
  },
  money_style: {
    color: 'gold',
    fontSize: 16,
    paddingTop: 2,
  },
});
export default CardItemStyle;
