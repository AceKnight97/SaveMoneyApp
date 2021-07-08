import _ from 'lodash';
import React from 'react';
import {
  processColor, StyleSheet,
  Text, View,
} from 'react-native';
import {LineChart} from 'react-native-charts-wrapper';
import {screenW} from '../../../Constant';


// https://react-native-explorer.firebaseapp.com/package/react-native-charts-wrapper#example-code

class LineChartCT extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        dataSets: [
          {
            values: _.map(_.range(1, 10), (x)=>_.random(10)),
            label: '',
            config: {
              lineWidth: 1.5,
              drawCircles: false,
              drawCubicIntensity: 0.3,
              drawCubic: true,
              drawHighlightIndicators: false,
              color: 'red',
              drawFilled: true,
              fillColor: 'red',
              fillAlpha: 90,
            },
          },
        ],
      },

      marker: {
        enabled: true,
        digits: 2,
        backgroundTint: processColor('teal'),
        markerColor: processColor('#F0C0FF8C'),
        textColor: processColor('white'),
      },
      xAxis: {
        granularityEnabled: true,
        granularity: 1,
      },
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {/* <Button
          onPress={this.onPressLearnMore.bind(this)}
          title="Press to load more"
        /> */}

        <View style={{height: 80}}>
          <Text> selected entry</Text>
          <Text> {this.state.selectedEntry}</Text>
        </View>

        <View style={styles.container}>
          <LineChart
            style={styles.chart}
            data={this.state.data}
            chartDescription={{text: ''}}
            legend={this.state.legend}
            marker={this.state.marker}
            xAxis={this.state.xAxis}
            yAxis={this.state.yAxis}
            drawGridBackground={false}
            borderColor={processColor('teal')}
            borderWidth={1}
            drawBorders
            autoScaleMinMaxEnabled={false}
            touchEnabled
            dragEnabled
            scaleEnabled
            scaleXEnabled
            scaleYEnabled
            pinchZoom
            doubleTapToZoomEnabled
            highlightPerTapEnabled
            highlightPerDragEnabled={false}
            dragDecelerationEnabled
            dragDecelerationFrictionCoef={0.99}
            keepPositionOnRotation={false}
            // onSelect={this.handleSelect.bind(this)}
            // onChange={(event) => console.log(event.nativeEvent)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 220,
    backgroundColor: '#F5FCFF',
    width: '100%',
    // backgroundColor: 'red',
  },
  chart: {
    flex: 1,
    width: screenW - 48,
    // backgroundColor: 'red',
  },
});

export default LineChartCT;
