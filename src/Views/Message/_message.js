import {StyleSheet} from 'react-native';

const MessageStyle = StyleSheet.create({
  message_body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
    flex: 1,
  },
  quote_text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MessageStyle;
