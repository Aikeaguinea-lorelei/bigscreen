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
        top: '85%',
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
              },
              "borderWidth": px(3), // 板块间间距的宽度
              "borderColor": '#0c1139', //背景色
            },
          },
          name: 'Access From',
          type: 'pie',
          // 内外圈半径
          radius: ['70%', '85%'],
          center: ['50%', '40%'],
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
        <div className="main" ref={divRef} style={{height:'100%'}}/>
        <div className="text">性别</div>
      </div>
    </div>
  );
}