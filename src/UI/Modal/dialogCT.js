import React, {Component} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
// import Modal from 'react-native-modal';
import {EventRegister} from 'react-native-event-listeners';
import {LISTENER_DISCONNECT, LISTENER_LOADING} from '../../Constant';

import LoadingIndicator from '../UI/loadingIndicator';
// import ModalNotification from '../UI/modalNotification';

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
});
class DiablogCT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isDisconnect: false,
    };
  }

  componentDidMount = () => {
    this.listenerModal = EventRegister.addEventListener(
      LISTENER_DISCONNECT,
      () => {
        this.setState({isDisconnect: true, isLoading: false});
      },
    );
    this.listenerLoading = EventRegister.addEventListener(
      LISTENER_LOADING,
      (flag) => {
        this.setState({isLoading: flag});
      },
    );
  };

  componentWillUnmount = () => {
    if (this.listenerModal) {
      EventRegister.removeEventListener(this.listenerModal);
    }
  };

  onCloseConnectPopup = () => {
    this.setState({isDisconnect: false});
  };

  onCloseLoading = () => {
    this.setState({isLoading: false});
  };

  render() {
    const {isLoading, isDisconnect} = this.state;
    if (!isLoading && !isDisconnect) {
      return null;
    }
    return (
      <View style={styles.main}>
        <StatusBar backgroundColor="rgba(0,0,0,0.5)" barStyle="light-content" />
        <LoadingIndicator isLoading={isLoading} />
      </View>
    );
  }
}
DiablogCT.defaultProps = {};
DiablogCT.propTypes = {};
export default DiablogCT;

// isDisconnect ? (
//   <ModalNotification
//     title="Connection error"
//     dis="Could not connect to server. Please check your Internet connection."
//     but1="Okay"
//     onpress1={this.onCloseConnectPopup}
//   />
