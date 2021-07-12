import {StyleSheet} from 'react-native';
import {screenW} from '../../../Constant';


const LineChartCTStyle = StyleSheet.create({
  main: {
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 16,
  },
  container: {
    height: 220,
    backgroundColor: '#F5FCFF',
    width: '100%',
  },
  chart: {
    flex: 1,
    width: screenW - 48,
  },
});

export default LineChartCTStyle;

// <LineChart
//  ref={​​​​​​​​chartRef}
//  style={​​​​​​​​styles.chartContainer}
//  data={​​​​​​​​cData}
//  chartDescription={​​​​​​​​{​​​​​​​​text: ''}​​​​​​​​}
//  legend={​​​​​​​​{​​​​​​​​enabled: false}​​​​​​​​}
//  marker={​​​​​​​​{
//  enabled: true,
//  digits: 0,
//  markerColor: processColor(theme.coalLightest),
//  textColor: processColor(theme.redBase),
//  textColor2: processColor(theme.black),
//  textSize: 12,
//  markerType: 'bioh',
//  }​​​​​​​​}
//  xAxis={​​​​​​​​{
//  enabled: true,
//  drawAxisLines: true,
//  drawGridLines: false,
//  drawLabels: true,
//  position: 'BOTTOM',
//  textSize: 8,
//  fontFamily: FontRoboto.SemiBold,
//  yOffset: 10,
//  axisLineWidth: 1,
//  axisLineColor: 0,
//  valueFormatter: 'date',
//  timeUnit: 'SECONDS',
//  valueFormatterPattern: 'hha',
//  textColor: processColor(theme.coalDark),
//  axisMaximum: moment().endOf('day').valueOf() / 1000,
//  }​​​​​​​​}
//  yAxis={​​​​​​​​{
//  left: {
//  enabled: true,
//  drawAxisLines: false,
//  drawLabels: true,
//  axisLineColor: 0,
//  textColor: processColor(theme.coalDarker),
//  textSize: 8,
//  fontFamily: FontRoboto.SemiBold,
//  drawGridLines: true,
//  granularityEnabled: true,
//  granularity: 1,
//  gridDashedLine: {
//  lineLength: 8,
//  spaceLength: 4,
//  phase: 8,
//  }​​​​​​​​,
//  }​​​​​​​​,
//  right: {
//  enabled: false,
//  }​​​​​​​​,
//  }​​​​​​​​}
//  //zoom
//  pinchZoom={​​​​​​​​true}
//  doubleTapToZoomEnabled={​​​​​​​​false}
//  zoom={​​​​​​​​zoom}
//  //touch
//  touchEnabled={​​​​​​​​true}
//  //drag
//  dragEnabled={​​​​​​​​true}
//  dragDecelerationEnabled={​​​​​​​​true}
//  dragDecelerationFrictionCoef={​​​​​​​​0.6}
//  //hightlight
//  highlightPerTapEnabled={​​​​​​​​true}
//  highlightPerDragEnabled={​​​​​​​​true}
//  //
//  scaleEnabled={​​​​​​​​false}
//  scaleXEnabled={​​​​​​​​false}
//  scaleYEnabled={​​​​​​​​false}
//  autoScaleMinMaxEnabled={​​​​​​​​true}
//  //
//  visibleRange={​​​​​​​​{
//  x: {
//  min: 86400,
//  max: 86400,
//  }​​​​​​​​,
//  }​​​​​​​​}
//  onChange={​​​​​​​​e => {
//  const nativeEventName =
//  Platform.OS === 'ios' ? 'chartPanEnd' : 'chartGestureEnd';
//  if (e.nativeEvent.action === nativeEventName) {
//  let {​​​​​​​​left, right, centerX}​​​​​​​​ = e.nativeEvent;
//  if (!isLoading.current) {
//  if (
//  xMin.current > left - distanceToLoadMore ||
//  right + distanceToLoadMore > xMax.current
//  ) {
//  isLoading.current = true;
//  fetchData(
//  parseInt(centerX - pageSize, 10),
//  parseInt(centerX + pageSize, 10),
//  centerX,
//  );
//  }
//  }
//  }
//  }​​​​​​​​}
//  />


