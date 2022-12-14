import React from 'react';
import './home.scss';
import headerBg from '../components/images/header.png'  //在custom.d.ts里面使png可以被调用
import { Chart1 } from '../components/chart-1';
import { Chart2 } from '../components/chart-2';
import { Chart3 } from '../components/chart-3';
import { Chart4 } from '../components/chart-4';
import { Chart5 } from '../components/chart-5';
import { Chart6 } from '../components/chart-6';
import { Chart7 } from '../components/chart-7';
import { Chart8 } from '../components/chart-8';
import { Chart9 } from '../components/chart-9';
import { Chart10 } from '../components/chart-10';
import { Chart11 } from '../components/chart-11';
import { Chart12 } from '../components/chart-12';
import { Chart13 } from '../components/chart-13';
import { Chart14 } from '../components/chart-14';

export const Home = () => {
  return (
    <div className='home'>
      <header style={{backgroundImage:`url(${headerBg})`}}/>
      <main>
        <section className='section1'>
          <Chart1/>
          <Chart2/>
        </section>
        <section className='section2'>
          <Chart3/>
          <Chart4/>
        </section>
        <section className='section3'>
          <Chart5/>
        </section>
        <section className='section4'>
          <Chart6/>
          <div className='bordered 年龄段'>
            <h2>人员年龄段分布</h2>
            <div className='年龄元素'>
              <Chart7/>
              <Chart8/>
              <Chart9/>
            </div>
          </div>
        </section>
        <section className='section5'>
          <div className='bordered 案发类型'>
            <h2>案发类型统计</h2>
            <div className='类型元素'>
              <Chart10/>
              <Chart11/>
            </div>
          </div>
          <div className='bordered 案发街道'>
            <h2>案发街道统计</h2>
            <div className='街道元素'>
              <Chart12/>
              <Chart13/>
            </div>
          </div>
          <div className='bordered 作案手段'>
            <Chart14/>
          </div>
        </section>
      </main>
      <footer>@rrrr 2021-2022</footer>
    </div>
  );
};