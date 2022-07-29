import * as echarts from 'echarts'
import React,{ useEffect, useRef } from 'react';

const px=(n: number)=>n/2420*(window as any).pageWidth
export const Chart2=()=>{
    const divRef=useRef(null)
    useEffect(()=>{
      // 从echart文档中引入
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(divRef.current);
      // 绘制图表
      myChart.setOption({
        // 横坐标
        xAxis: {
          data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区'],
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
          }
        },
        grid:{
          x:px(40),
          y:px(20),
          x2:px(40),
          y2:px(60),
        },
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [18, 28, 36, 41, 15, 26, 37, 18, 29]
          }
        ]
      });
    },[])  
    return (
        <div className='bordered 管辖统计'>
            <h2>案件破获排名</h2>
            <div ref={divRef} className='chart'></div>
        </div>
    )
}