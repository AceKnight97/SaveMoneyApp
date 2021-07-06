import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {colors} from '../../Constant/color';
import grayinsightsvg from '../../Images/BottomApp/insights.svg';
import insightsvg from '../../Images//BottomApp/insightsAct.svg';
import grayjournalsvg from '../../Images//BottomApp/journal.svg';
import journalsvg from '../../Images//BottomApp/journalAct.svg';
import graymsgsvg from '../../Images//BottomApp/message.svg';
import msgsvg from '../../Images//BottomApp/messageAct.svg';
import reddot from '../../Images//BottomApp/reddot.svg';
import grayusersvg from '../../Images//BottomApp/user.svg';
import usersvg from '../../Images//BottomApp/userAct.svg';
import BottomAppName from '../../UI/bottomAppName';
import Insights from '../../Views/Insights';
import StackJournal from '../StackJournal';
import Message from '../../Views/Message';
import StackProfile from '../../Navigation/StackProfile';

let abc = 'Journal';

const BottomApp = createBottomTabNavigator(
  {
    Journal: {screen: StackJournal},
    Insights: {screen: Insights},
    Message: {screen: Message},
    Profile: {screen: StackProfile},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        if (routeName === 'Journal') {
          return (
            <BottomAppName
              isAnimation={abc === 'Journal'}
              focused={focused}
              active={journalsvg}
              notActive={grayjournalsvg}
              title="Journal"
            />
          );
        }
        if (routeName === 'Insights') {
          return (
            <BottomAppName
              isAnimation={abc === 'Insights'}
              focused={focused}
              active={insightsvg}
              notActive={grayinsightsvg}
              title="Insights"
            />
          );
        }
        if (routeName === 'Message') {
          return (
            <BottomAppName
              isAnimation={abc === 'Message'}
              focused={focused}
              active={msgsvg}
              notActive={graymsgsvg}
              title="Message"
              reddot={reddot}
            />
          );
        }
        if (routeName === 'Profile') {
          return (
            <BottomAppName
              isAnimation={abc === 'Profile'}
              focused={focused}
              active={usersvg}
              notActive={grayusersvg}
              title="Profile"
            />
          );
        }
      },
      tabBarOnPress: ({navigation}) => {
        abc = navigation.state.routeName;
        navigation.navigate(`${navigation.state.routeName}`);
      },
    }),
    tabBarOptions: {
      showLabel: false,
      activeBackgroundColor: 'white',
      // inactiveBackgroundColor : 'white',
      activeTintColor: '#00A3AD',
      inactiveTintColor: 'gray',
      style: {
        borderTopColor: colors.green,
        borderTopWidth: 1,
        height: 65, // 65
        paddingBottom: 10,
        paddingTop: 10,
      },
      labelStyle: {
        fontSize: 10,
        fontFamily: 'OpenSans-Bold',
      },
    },
  },
  {
    backBehavior: 'initialRoute',
  },
  {
    initialRouteName: 'Journal',
  },
);

const StackBottomApp = createStackNavigator(
  {
    BottomApp: {screen: BottomApp},
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
  {
    initialRouteName: 'BottomApp',
  },
);

export default StackBottomApp;
