import moment from 'moment';
import _ from 'lodash';
import {Dimensions} from 'react-native';
import {LinearLib, sortedRaw} from '../Data';

export const ModelImageActions = {
  SET_IMAGE: 'SET_IMAGE',
  UPDATE_IMAGE: 'UPDATE_IMAGE',
  DELETE_IMAGE: 'DELETE_IMAGE',
  DELETE_ALL_IMAGE: 'DELETE_ALL_IMAGE',
};

export const screenW = Math.round(Dimensions.get('window').width);
export const screenH = Math.round(Dimensions.get('window').height);

export function getLinearColors() {
  const objArr = Object.keys(LinearLib);
  const len = objArr.length;
  const key = objArr[Math.floor(Math.random() * len + 1)];
  return LinearLib[key];
}

export const CardListData = _.map(sortedRaw, (x, i) => ({
  // icon: x.toLocaleLowerCase(), // WILL BE KEPT ?
  // colors: getLinearColors(), // ALWAYS CHANGED
  // msg: '', // ALWAYS CHANGED
  // KEEP 3 FIELDS
  title: x,
  money: 0,
  details: '',
}));

export const CreateColors = _.map(sortedRaw, (x) => getLinearColors());

export const temptest =
  'Bills,Business,Checkups,Course,Decorations,Devices,Drinks,Educations,Entertainments,Friends,Furniture,Games,Hospital,Meals,Medicine,Meeting,Music,Others,Party,Pet,Petrol,Phone,Present,School,Selfcare,Shopping,Stuff,Ticket,Tools,Travel,Unexpected,Vehicle,Wasted';

export const Today = moment().startOf('days').toISOString();
export const Sessions = ['MORNING', 'AFTERNOON', 'NIGHT'];

// Wasted,Medicine,Vehicle
// Devices,Travel,Checkups
// Tools,Ticket,Hospital
// Present,Course,School
// Bills,Meals,Unexpected
// Educations,Drinks,Shopping
// Entertainments,Friends,Stuff
// Games,Party,Selfcare
// Music,Meeting,Pet
// Decorations,Petrol,Others
// Furniture,Phone,

export const LISTENER_DISCONNECT = 'LISTENER_DISCONNECT';
export const LISTENER_LOADING = 'LISTENER_LOADING';

export const dummyText =
  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).';

const LOCATIONS = 'http://172.93.167.177:3000/';

export const SavePathActions = {
  SET_PATH: 'SET_PATH',
  GET_PATH: 'GET_PATH',
  DELETE_PATH: 'DELETE_PATH',
  DELETE_DETAIL_PATH: 'DELETE_DETAIL_PATH',
  DELETE_REPORT_DETAIL_PATH: 'DELETE_REPORT_DETAIL_PATH',
  ACTIVE_NEW_TAB: 'activeNewTab',
  ACTIVE_REPORT_TAB: 'activeReportTab',
  TAB_NAME: 'tabName',
};

export const NOTIFICATION_CENTER_REQUEST = {
  LOAD_MORE: 'LOAD_MORE',
  LOAD_DEFAULT: 'LOAD_DEFAULT',
  LOAD_SOCKET: 'LOAD_SOCKET',
};
export const SEARCH_MEDICATION_URL = 'https://api-js.drugbank.com/v1/us';

export const DATE_FORMAT = 'DD/MM/YYYY';

export const ALL_ROUTES = {
  MAIN_PAGE: '/main-page',
  HOME: '/home',
  JOURNAL_DETAILS: '/journal-details',
};

export const MAIN_PAGE_DATA = {
  JOURNAL_TAB: 'JOURNAL_TAB',
  INSIGHT_TAB: 'INSIGHT_TAB',
  MESSAGE_TAB: 'MESSAGE_TAB',
  PROFILE_TAB: 'PROFILE_TAB',
};

export const BOTTOM_APP_NAME = {
  JOURNAL: 'Journal',
  INSIGHT: 'Insight',
  MESSAGE: 'Message',
  PROFILE: 'Profile',
  JOURNAL_DETAILS: 'Journal_Details',
};

export const ALL_FIELDS = [
  'Bills',
  'Business',
  'Checkups',
  'Course',
  'Decorations',
  'Devices',
  'Drinks',
  'Educations',
  'Entertainments',
  'Friends',
  'Furniture',
  'Games',
  'Hospital',
  'Meals',
  'Medicine',
  'Meeting',
  'Music',
  'Others',
  'Party',
  'Pet',
  'Petrol',
  'Phone',
  'Present',
  'School',
  'Selfcare',
  'Shopping',
  'Stuff',
  'Ticket',
  'Tools',
  'Travel',
  'Unexpected',
  'Vehicle',
  'Wasted',
];

export const DISPLAY_DATA_2 = {
  ATTACHMENT: 'ATTACHMENT',
  DATE: 'DATE',
  FREQUENCY: 'FREQUENCY',
  ARRAY: 'ARRAY',
  PERCENT: 'PERCENT',
};

export const TODAY = new Date();
