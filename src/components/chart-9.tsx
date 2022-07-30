import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';

export const Chart9 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(({
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0, 10, 20, 30, 40, 50, 60],
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
            fontSize:px(18),
            color:'#c4c4c4',
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
            fontSize:px(18),
            color:'#c4c4c4',
          formatter(val) {
            return val * 100 + '%';
          }
        }
      },
      grid:{
        x:px(80),
        y:px(8),
        x2:px(20),
        y2:px(90)
      },
      series: [{
        name: '故意伤人',
        type: 'line',
        data: [
          0.19, 0.20, 0.26,
          0.35, 0.26, 0.20,
          0.08, 0.06
        ],
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)},
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#F7A110'
          }, {
            offset: 1,
            color: '#1b1d52'
          }]),
        }
      }]
    }));
  }, []);

  return (
    <div className="年龄段-图3">
      <h3>犯罪年龄趋势图</h3>
      <div ref={divRef} className="chart" style={{height:'100%',width:'100%'}}/>
    </div>
  );
};