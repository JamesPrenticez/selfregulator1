import React from 'react';
import ReactECharts from 'echarts-for-react';
import data from './data'
import info from './info'

 export default function Heatmap(){
  // function getVirtulData(year) {
  //   year = year || "2022";
  //   let date = newDate().parseDate(year + "-01-01");
  //   let end = date.parseDate(+ year + 1 + "-01-01");
  //   let dayTime = 3600 * 24 * 1000;
  //   let data = [];
  //   for (var time = date; time < end; time += dayTime) {
  //     data.push([
  //       echarts.format.formatTime("yyyy-MM-dd", time),
  //       Math.floor(Math.random() * 10000)
  //     ]);
  //   }
  //   return data;
  // }


  const options = {
    title: {
      top: 30,
      left: "center",
      text: "Win the Day",
      color: 'white'
    },
    tooltip: {},
    //https://echarts.apache.org/en/option.html#%2Fsearch%2FvisualMap
    visualMap: {
      min: 0,
      max: 10000,
      inRange : {   
        color: ['#00FF00', '#009000' ] //From smaller to bigger value ->
      },
      type: "piecewise",
      orient: "horizontal",
      left: "center",
      top: 65
    },
    calendar: {
      top: 120,
      left: 30,
      right: 30,
      cellSize: ["auto", 13],
      range: "2022",
      itemStyle: {
        color: 'white',
        borderWidth: 0.5
      },
      yearLabel: { show: false }
    },
    series: {
      type: "heatmap",
      coordinateSystem: "calendar",
      data: info,
    }
  };

  return (
    <div className='h-screen text-white'>
      
      <ReactECharts 
        className='text-white'
        style={{ height: '900px', color: '000' }}
        option={options} 
        
        />
    </div>
    )
};