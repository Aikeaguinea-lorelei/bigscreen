import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';

export const Chart10 = () => {
  const divRef = useRef(null);
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
          data: ['入室抢劫', '当街偷盗', '团伙诈骗', '刑事案件', '民事案件'],
          // 不显示坐标轴上的刺
          axisTick:{show:false},
          axisLabel:{
            fontSize:px(12),
            color:'#c4c4c4',
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
            data: [41, 15, 26, 37, 18]
          }
        ]
    }));
  }, []);

  return (
    <div ref={divRef} className="案发类型-图1">
      10
    </div>
  );
};