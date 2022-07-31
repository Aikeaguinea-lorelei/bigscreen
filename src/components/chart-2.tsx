import * as echarts from 'echarts'
import React,{ useEffect, useRef } from 'react';
import {px} from '../shared/px'

export const Chart2=()=>{
    const divRef=useRef(null)
    const myChart=useRef(null)
    // 自动更新数据装置
    const data=[
      {name:'新区公安局',2021:16372,2022:13420},
      {name:'榆中县公安局',2021:20362,2022:16211},
      {name:'永登县公安局',2021:32263,2022:29123},
      {name:'红古区公安局',2021:34462,2022:32832},
      {name:'安宁区公安局',2021:43725,2022:36442},
      {name:'西固区公安局',2021:45272,2022:42821},
      {name:'七里河区公安局',2021:47651,2022:44313},
      {name:'城关区公安局',2021:52637,2022:53245},
    ]
    // 定时器,里面是新的数据
    useEffect(()=>{
      setInterval(()=>{  // setInterval:根据时间周期来调用表达式
        const newData=[
          {name:'新区公安局',2021:17372,2022:13420},    
          {name:'榆中县公安局',2021:19362,2022:17211},
          {name:'永登县公安局',2021:34263,2022:27123},
          {name:'红古区公安局',2021:35462,2022:33832},
          {name:'安宁区公安局',2021:42725,2022:35442},
          {name:'西固区公安局',2021:44272,2022:46821},
          {name:'七里河区公安局',2021:47651,2022:44313},
          {name:'城关区公安局',2021:58637,2022:Math.random()*100000},
        ]
        x(newData)  // 3秒后引用newData显示新值
      },3000)
    },[])
    // 封装渲染的函数
    const x=(data)=>{
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
          data:data.map(i=>i.name), // 拿到data的所有name
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
            data: data.map(i=>i[2021]),  // 拿到data2021年的值
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
            data: data.map(i=>i[2022]),  // 拿到data2022年的值
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
    }
    useEffect(()=>{
      myChart.current=echarts.init(divRef.current)  // 对mychart初始化
      x(data)  // 最开始的时候执行旧data,显示旧值
    },[])  
    return (
        <div className='bordered 管辖统计 chart2'>
            <h2>案件破获排名</h2>
            <div ref={divRef} className='chart'></div>
        </div>
    )
}