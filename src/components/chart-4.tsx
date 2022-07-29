import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';

export const Chart4 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(({
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
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
        y2:px(70)
      },
      series: [{
        name: '故意伤人',
        type: 'line',
        data: [
          0.15, 0.13, 0.11,
          0.13, 0.14, 0.15,
          0.16, 0.18, 0.21,
          0.19, 0.17, 0.16,
          0.15
        ],
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)},
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#414a9f'
          }, {
            offset: 1,
            color: '#1b1d52'
          }]),
        }
      }]
    }));
  }, []);

  return (
    <div className="bordered 案发时段 chart4">
      <h2>案发时段分析</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};