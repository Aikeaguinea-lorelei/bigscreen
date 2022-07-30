import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';

export const Chart13 = () => {
  const divRef = useRef(null);
  const data = [
    {value: 0.08, name: '东岗路'},
    {value: 0.06, name: '段家滩'},
    {value: 0.11, name: '雁北'},
    {value: 0.09, name: '五泉山'},
    {value: 0.12, name: '中山路'},
    {value: 0.06, name: '庆阳路'},
    {value: 0.08, name: '武都路'},
    {value: 0.08, name: '酒泉路'},
    {value: 0.08, name: '天水路'},
  ];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(({
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#0A97FB'
        }, {
          offset: 1,
          color: '#1E34FA'
        }]),
        // 横坐标
        xAxis: {
          data: ['东岗路', '段家滩', '胜北', '五泉山', '中山路', '庆阳路', '武都路', '酒泉路', '天水路'],
          // 不显示坐标轴上的刺
          axisTick:{show:false},
          axisLabel:{
            fontSize:px(12),
            color:'#c4c4c4',
            interval:0,
            // 把超过两个字的坐标值分行显示
            formatter(val){
              if(val.length>2){
                const array=val.split('');
                array.splice(2,0,'\n')
                return array.join('')
              }else{
                return val
              }
            }  
          },
        },
        // 纵坐标
        yAxis: {
          axisLabel:{
            fontSize:px(12),
            color:'#c4c4c4'
          },
          // 去掉辅助线
          splitLine:{
            show:false
          }         
        },
        grid:{
          x:px(60),
          y:px(20),
          x2:px(40),
          y2:px(60),
        },
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [0.18, 0.28, 0.36, 0.41, 0.15, 0.26, 0.37, 0.18, 0.12]
          }
        ]
    }));
  }, []);

  return (
    <div className="案发街道-图2">
      <div className="chart">
        <div className="main" ref={divRef}/>
      </div>
    </div>
  );
};