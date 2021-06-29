import {Datepicker} from '@ui-kitten/components';
import moment from 'moment';
import React, {useRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import ButtonCT from '../../Components/Buttons/buttonCT';
import BottomAppHeader from '../../Components/Header/bottomAppHeader';
import DisplayMoney from '../../Components/UI/DisplayMoney';
import {useMergeState} from '../../Helper/customHooks';
import moneyIc from '../../Images/Components/MoneyBox/money.svg';
import GlobalStyles from '../../Styles';
import ViewsStyle from '../Style';
import JournalStyle from './_journal';
import AddIncomeModal from '../../Components/Modals/AddIncomeModal'
import { TODAY } from '../../Constant';


const {f1_wh_100, mt16} = GlobalStyles;
const {bottom_App_Body} = ViewsStyle;
const {
  journal_selected_day,
  journal_achievement,
  journal_money_box,
  journal_income,
  journal_income_title,
} = JournalStyle;

const Journal = (props) => {
  const dateRef = useRef(undefined);
  const [state, setState] = useMergeState({
    selectedDate: new Date(),
    dailyInfo: {
      id: '',
      date: new Date(),
      logs: [],
      income: 0,
      notes: '',
    },

    loading: false,
    isOpenIncomeModal: false,
    isShowJournalDetails: false,
  });

  const {
    selectedDate,
    dailyInfo,
    isOpenIncomeModal,
    isShowJournalDetails,
    loading,
  } = state;

  const {logs, income, notes, date} = dailyInfo;

  const onSelectDate = (selectedDate) => {
    setState({selectedDate});
  };

  const onCloseAddMoneyModal = () => {
  }

  const onPressDetail = () => {
    props.navigation.navigate('JournalDetails', {date});
  };

  const toggleIncomeModal = () => {
    setState({isOpenIncomeModal: !isOpenIncomeModal})
  };

  const renderBody = () => (
    <View style={{width: '100%'}}>
      <Text style={journal_selected_day}>
        {selectedDate
          ? moment(selectedDate).format('dddd - DD, MMMM, YYYY')
          : 'Select a date'}
      </Text>

      <Datepicker
        style={mt16}
        onSelect={onSelectDate}
        date={selectedDate}
        max={TODAY}
      />

      <Text style={journal_achievement}>Achievement</Text>

      <View style={journal_money_box}>
        <View style={{height: 124, width: 124}}>
          <SvgXml xml={moneyIc} />
        </View>

        <DisplayMoney style={{marginVertical: 16}} />

        <ButtonCT
          style={{width: '100%'}}
          UserTextStyle={{fontWeight: 'bold', fontSize: 16}}
          type="LINEAR"
          title={logs.length !== 0 ? 'Edit spending' : 'Add spending'}
          onPress={onPressDetail}
        />
      </View>
    </View>
  );

  return (
    <>
    <View style={f1_wh_100}>
      <BottomAppHeader currentTab="Journal" />

      <View style={bottom_App_Body}>{renderBody()}</View>

      <TouchableOpacity style={journal_income} onPress={toggleIncomeModal}>
        <Text style={journal_income_title}>Income</Text>
      </TouchableOpacity>
      </View>

      <AddIncomeModal
        isVisible={isOpenIncomeModal}
        onRequestClose={toggleIncomeModal}
      />
      </>
  );
};

Journal.defaultProps = {};
Journal.propTypes = {};

export default Journal;
