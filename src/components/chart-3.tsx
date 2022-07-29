import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';

export const Chart3 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(({
      legend: {
        height:px(20),
        bottom: px(-10),
        textStyle: {
            fontSize: 4,
            color: "#c4c4c4",
        },
        itemWidth: px(30),
        itemHeight: px(15)
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel:{
            fontSize:px(18),
            color:'#c4c4c4',
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
            fontSize:px(16),
            color:'#c4c4c4',
          formatter(val) {
            return val * 100 + '%';
          }
        }
      },
      grid:{
        x:px(65),
        y:px(8),
        y2:px(150)
      },
      series: [
        {
          name: '抢劫',
          type: 'line',
          data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09].reverse()
        },
        {
          name: '醉驾',
          type: 'line',
          data: [0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10].reverse()
        },
        {
          name: '盗窃',
          type: 'line',
          data: [0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11].reverse()
        },
        {
          name: '故意杀人',
          type: 'line',
          data: [0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11, 0.12].reverse()
        },
        {
          name: '故意伤人',
          type: 'line',
          data: [0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11, 0.12, 0.13].reverse()
        }
      ].map(obj => ({
        ...obj,
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)}
      }))
    }));
  }, []);

  return (
    <div className="bordered 发案趋势 chart3">
      <h2>发案趋势分析</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};