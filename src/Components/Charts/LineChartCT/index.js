import _ from 'lodash';
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  processColor, Text, View,
} from 'react-native';
import {LineChart} from 'react-native-charts-wrapper';
import {useMergeState} from '../../../Helper/customHooks';
import LineChartCTStyle from './_lineChartCT';

const {
  title, container, chart,
} = LineChartCTStyle;

const green = 'forestgreen';
const red = 'orangered';
const yellow = 'orange';

// https://react-native-explorer.firebaseapp.com/package/react-native-charts-wrapper#example-code

const LineChartCT = (props)=> {
  const [state, setState] = useMergeState({

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
  });

  return (
    <View>
      <Text style={title}>Monthly Money Comparation</Text>

      <View style={container}>
        <LineChart
          style={chart}
          data={{
            dataSets: [
              {
                values: props.thisMonthData,
                label: 'This month',
                config: {
                  lineWidth: 1.5,
                  drawCircles: false,
                  drawCubicIntensity: 0.3,
                  drawCubic: true,
                  drawHighlightIndicators: false,
                  color: processColor(green),
                  fillColor: processColor(green),
                  fillAlpha: 90,
                },
              },
              {
                values: props.otherMonthData,
                label: 'Last month',
                config: {
                  lineWidth: 1.5,
                  drawCircles: false,
                  drawCubicIntensity: 0.3,
                  drawCubic: true,
                  drawHighlightIndicators: false,
                  color: processColor(yellow),
                  fillColor: processColor(yellow),
                  fillAlpha: 90,
                },
              },
            ],
          }}
          chartDescription={{text: ''}}
          legend={{
            // enabled: false,
          }}
          marker={{

            enabled: true,
            digits: 2,
            backgroundTint: processColor('teal'),
            markerColor: processColor('#F0C0FF8C'),
            textColor: processColor('white'),
          }}
          xAxis={{
            position: 'BOTTOM',
            textSize: 8,
            drawLabels: true,
            drawAxisLines: true,
            drawGridLines: true,
          }}
          yAxis={{
            left: {
              drawGridLines: true,
            },
            right: {
              enabled: false,
            },
          }}
          drawGridBackground={false}
          borderColor={processColor('teal')}
          borderWidth={1}
          // drawBorders
          // autoScaleMinMaxEnabled={false}
          // touchEnabled
          // dragEnabled
          // scaleEnabled
          // scaleXEnabled
          // scaleYEnabled
          // pinchZoom
          // doubleTapToZoomEnabled
          // highlightPerTapEnabled
          // highlightPerDragEnabled={false}
          // dragDecelerationEnabled
          // dragDecelerationFrictionCoef={0.99}
          // keepPositionOnRotation={false}
          // onSelect={handleSelect.bind(this)}
          // onChange={(event) => console.log(event.nativeEvent)}
        />
      </View>
    </View>
  );
};


LineChartCT.defaultProps = {
  thisMonthData: [],
  otherMonthData: [],
};
LineChartCT.propTypes = {
  thisMonthData: PropTypes.arrayOf(
      PropTypes.number,
  ),
  otherMonthData: PropTypes.arrayOf(
      PropTypes.number,
  ),
};

export default LineChartCT;
