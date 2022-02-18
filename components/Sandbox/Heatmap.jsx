//https://www.youtube.com/watch?v=xmfcI2mjy4s&t=3685s 36.23
//https://jsitor.com/zdrqOxaWK
import { json } from "d3";
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

function Cell({index, startDate}) {
  let date = moment(startDate).add(index, 'day')
  return (
    <>
    <div className="tooltip h-4 w-4 text-xs border rounded-sm cursor-pointer hover:border-green-600">
      <span className="tooltiptext">{date.format('DD/MM/YYYY')}</span>
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
  let days = Math.abs(dateRange[0].diff(dateRange[1], 'days'));
  let cells = Array.from(new Array(365)); //days
  let weeks = Array.from(new Array(7));
  let months = Array.from(new Array(Math.floor(days / 7)));
  let currentMonth = moment().format('MMM')
  console.log(currentMonth)
  return (
    <>
      <div className="flex justify-center mt-20">
        <h1 className="font-kanit">Win The Day</h1>
      </div>
      <div className="flex justify-center mt-2">
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

          {cells.map((_, index) => (
            <Cell key={index} index={index} startDate={startDate} />
          ))}
        </div>
      </div>
    </>
  );
}
