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
          <Chart7/>
        </section>
        <section className='bordered section5'></section>
      </main>
      <footer>@rrrr 2021-2022</footer>
    </div>
  );
};