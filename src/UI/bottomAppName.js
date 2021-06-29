import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import _ from 'lodash';
import {EventRegister} from 'react-native-event-listeners';
import AnimatedCT from './animatedCT';
import {colors} from '../Constant/color';

const {gray1, green} = colors;
const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

class BottomAppName extends Component {
  constructor(props) {
    super(props);
    this.animate = React.createRef();
    this.state = {
      messages: [],
      isAnimation: props.isAnimation,
    };
  }

  componentDidMount() {
    this.listener = EventRegister.addEventListener(
      'UPDATE_ICON_MESSAGE',
      (messages) => {
        this.setState({messages});
      },
    );
  }

  componentWillUnmount() {
    EventRegister.removeEventListener(this.listener);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.isAnimation !== this.props.isAnimation &&
      this.props.isAnimation
    ) {
      this.animate.current.callAnimated();
    }
  }

  showTitle = () => {
    const {title, focused} = this.props;
    const titleSty = {
      fontSize: 12,
      fontFamily: focused ? 'OpenSans-Bold' : 'OpenSans-Regular',
      color: focused ? green : gray1,
      marginTop: 5,
    };
    return <Text style={titleSty}>{title}</Text>;
  };

  render() {
    const {
      title,
      reddot,
      active,
      notActive,
      focused,

      // focused,
    } = this.props;
    const {messages, isAnimation} = this.state;
    // console.log('focused: ', title, focused);
    return (
      <View style={styles.main}>
        <View style={{flexDirection: 'row'}}>
          <AnimatedCT ref={this.animate}>
            <SvgXml
              style={{opacity: focused ? 1 : 0.75}}
              xml={focused ? active : notActive}
            />
          </AnimatedCT>

          {title === 'Messages' ? (
            <SvgXml
              style={{position: 'absolute', right: 0}}
              xml={
                _.filter(messages, (x) => !x.isRead).length > 0 ? reddot : null
              }
            />
          ) : null}
        </View>

        {this.showTitle()}
      </View>
    );
  }
}

export default BottomAppName;
