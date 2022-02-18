//https://www.youtube.com/watch?v=xmfcI2mjy4s&t=3685s 36.23
//https://jsitor.com/zdrqOxaWK
import React from "react";
import moment from 'moment'

const dayNames = {
  0: "Mon",
  1: " ",
  2: "Wed",
  3: " ",
  4: "Fri",
  5: " ",
  6: "Sun",
}

const data = Array.from(new Array(365)).map((_, index) => {
  let startDate = moment().add(-364, 'days')
  return {
    date: moment(startDate).add(index, 'day'),
    value: Math.floor(Math.random() * 100), //needs to be a pecentage 1/4 or 4/4
    task: 'Mediate' //needs to me a array
  };
});

function Cell({ dataPoint, alpha }) {
  let style = {
    backgroundColor: `${dataPoint.value === 0 ? /*'rgb(255, 0, 0, 6)'*/'' : "rgb(0,255,0," + alpha + ")" }`
  }
  return (
    <>
    <div className="tooltip h-4 w-4 text-xs border rounded-sm cursor-pointer hover:border-green-600" style={style}>
      <span className="tooltiptext text-left">
          <p>Date: {dataPoint.date.format('DD/MM/YYYY')}</p>
          <br />
          <p>Task: {dataPoint.task}</p> 
          <br />
          <p>Value: {dataPoint.value}</p> 
      </span>
    </div>
    </>
  );
}

function WeekDay({ index }) {
  return <div className="h-4 text-xs mr-5">{dayNames[index]}</div>;
}

function Month({index, startDate}) {
  let date = moment(startDate).add(index * 7, 'day')
  let monthName = date.format('MMM')
  return (
    <div className={`h-4 w-4 text-xs month ${monthName}`}>{monthName}</div>
  )
}




export default function Heatmap() {
  let startDate = moment().add(-364, 'days')
  let dateRange = [startDate, moment()]
  let days = Math.abs(dateRange[0].diff(dateRange[1], 'days'))
  let cells = Array.from(new Array(365)); //days
  let weeks = Array.from(new Array(7));
  let months = Array.from(new Array(Math.floor(days / 7)))

  let min = Math.min(0, ...data.map(d => d.value))
  let max = Math.max(...data.map(d => d.value))
  let colorMultiplier = 1 / (max - min)


  return (
    <div className="ml-[775px] sm:ml-0">
      <div className="flex justify-center mt-2 ">
        <div className="grid grid-rows-1 grid-flow-col gap-1 mt-2 ml-8">
          {months.map((_, index) => (
            <Month key={index} index={index} />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-2">
        <div className="grid grid-rows-7 grid-flow-col gap-1  ">
          {weeks.map((_, index) => (
            <WeekDay key={index} index={index} />
          ))}

          {cells.map((_, index) => {
            let date = moment(startDate).add(index, 'day')
            let dataPoint = data.find(d => moment(date).format('DDMMYYYY') === moment(d.date).format('DDMMYYYY'))
            let alpha = colorMultiplier * dataPoint.value;
            
            return (
              <Cell 
                key={index}
                index={index}
                dataPoint={dataPoint}
                alpha={alpha} //color rgb(0,255,0, alpha)
              />
            )
          })}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <p className="italic text-xs">Currently Randomly Generated Data</p>
      </div>
    </div>
  );
}
