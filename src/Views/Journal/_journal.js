import {StyleSheet} from 'react-native';

const JournalStyle = StyleSheet.create({
  journal_selected_day: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  journal_achievement: {
    marginTop: 56,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  journal_money_box: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#d9d9d9',
    padding: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '15%',
    marginTop: 16,
  },
  journal_income: {
    borderRadius: 100,
    position: 'absolute',
    bottom: -32,
    right: -28,
    width: 150,
    height: 150,
    paddingHorizontal: 22,
    paddingVertical: 44,
    backgroundColor: '#40d329',
  },
  journal_income_title: {
    paddingTop: 6,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default JournalStyle;
