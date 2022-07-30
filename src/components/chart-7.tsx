import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';

export const Chart7 = () => {
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
          fontSize: px(20),
          color: "#c4c4c4",
        },
        itemWidth: px(30),
        itemHeight: px(15)
      },
      series: [
        {
          // 设置颜色
          itemStyle: {
            normal: {
              color: function (colors) {
                 var colorList = [
                  '#33a4fa',
                  '#8d70f8'
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
            { value: 0.2, name: '女' },
            { value: 0.8, name: '男' },
          ]
        }
      ]
    }));
  }, []);

  return (
    <div className="年龄段-图1">
      <div className="chart">
        <div className="main" ref={divRef} style={{height:'100px'}}/>
        <div className="text">性别</div>
      </div>
    </div>
  );
}