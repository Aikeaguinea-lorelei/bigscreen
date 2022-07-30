import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';

export const Chart8 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(({
      tooltip: {
        trigger: 'item'
      },
      legend: {
        // 位置
        top: '70%',
        left: 'center',
        textStyle: {
          fontSize: px(15),
          color: "#c4c4c4",
        },
        itemWidth: px(20),
        itemHeight: px(10),
        itemGap:px(5)
      },
      series: [
        {
          // 设置颜色
          itemStyle: {
            normal: {
              color: function (colors) {
                 var colorList = [
                  '#856BED', '#F46064', '#F38E1C', '#1CDB7C', '#33A4FA'
                 ];
                 return colorList[colors.dataIndex];
               }
             },
           },
          name: 'Access From',
          type: 'pie',
          // 内外圈半径
          radius: ['75%', '90%'],
          center: ['50%', '35%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '4',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            {value: 0.07, name: '10-20'},
            {value: 0.10, name: '20-30'},
            {value: 0.23, name: '30-40'},
            {value: 0.28, name: '40-50'},
            {value: 0.32, name: '50-60'},          
          ]
        }
      ]
    }));
  }, []);

  return (
    <div className="年龄段-图2">
      <div className="chart">
        <div className="main" ref={divRef} style={{height:'100px'}}/>
        <div className="text">年龄段</div>
      </div>
    </div>
  );
}