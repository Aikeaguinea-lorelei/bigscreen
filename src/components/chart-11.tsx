import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';

export const Chart11 = () => {
  const divRef = useRef(null);
  const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(({
      color: colors,
      legend:{
        top:'bottom',
        textStyle: {
          fontSize: px(15),
          color: "#c4c4c4",
        },
        itemWidth: px(20),
        itemHeight: px(10),
        itemGap:px(15)
      },
      series: [
        {
          startAngle: -20,
          type: 'pie',
          radius: ['25%', '60%'],
          center: ['50%', '45%'],
          labelLine: {show: true, length: 3},
          roseType: 'area',
          itemStyle: {
            shadowBlur: px(200),
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: px(2)
          },
          data: [
            {value: 0.38, name: '刑事'},
            {value: 0.20, name: '民事'},
            {value: 0.18, name: '经济'},
            {value: 0.24, name: '其他'},
          ]
        }
      ]
    }));
  }, []);

  return (
    <div className="案发类型-图2">
      <div className="chart">
        <div className="main" ref={divRef}/>
      </div>
    </div>
  );
};