import * as echarts from 'echarts'
import React,{ useEffect, useRef } from 'react';
import {px} from '../shared/px'

export const Chart2=()=>{
    const divRef=useRef(null)
    useEffect(()=>{
      // 从echart文档中引入
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(divRef.current);
      // 绘制图表
      myChart.setOption({
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          axisLabel:{
            fontSize:px(12),
            color:'#c4c4c4',
          },
          splitLine:{
            show:false
          }         
        },
        yAxis: {
          type: 'category',
          data: ['新区公安局', '榆中县公安局', '永登县公安局', '红古区公安局', '安宁区公安局', '西固区公安局', '七里河区公安局', '城关区公安局'],
          axisLabel:{
            fontSize:px(12),
            color:'#c4c4c4',
            formatter(val){
              if(val.length>3){
                const array=val.split('');
                array.splice(3,0,'\n')
                return array.join('')
              }else{
                return val
              }
            }  
          },
          axisTick:{show:false},
        },
        // 图标位置和图标大小
        legend: {
          x:'right',
          y:'bottom',
          itemHeight:7,
          itemWidth:10,
          textStyle: {
            fontSize: 8,
            color: "#c4c4c4",
            padding: [0, 0, 0, 0],
          }
        },
        grid:{
          x:px(80),
          y:px(20),
          x2:px(10),
          y2:px(10),
        },
        series: [
          {
            name: '2021年',
            type: 'bar',
            data: [18203, 23489, 29034, 48885, 99454, 104970, 131744, 220230,],
            // 柱形图的颜色渐变
            itemStyle:{
              normal:{
                color:new echarts.graphic.LinearGradient(0,0,1,0,[{
                  offset:0,
                  color:'#2034f9'
                },{
                  offset:1,
                  color:'#04a1ff'
                }])
              }
            }
          },
          {
            name: '2022年',
            type: 'bar',
            data: [19325, 23438, 31000, 75833, 87754, 121594, 134141, 251807],
            itemStyle:{
              normal:{
                color:new echarts.graphic.LinearGradient(0,0,1,0,[{
                  offset:0,
                  color:'#b92ae8'
                },{
                  offset:1,
                  color:'#6773e7'
                }])
              }
            }
          }
        ]
      });
    },[])  
    return (
        <div className='bordered 管辖统计 chart2'>
            <h2>案件破获排名</h2>
            <div ref={divRef} className='chart'></div>
        </div>
    )
}