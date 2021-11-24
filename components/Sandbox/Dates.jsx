import {currentDay, days, daysThisWeek, currentWeek, monthName} from "../Tasks/helpers/dates"

function Dates() {
  return (
    <div>
      <p>currentDay: {currentDay}</p>
      <p>days: {days}</p>
      <p>daysThisWeek: {daysThisWeek}</p>
      <p>currentWeek: {currentWeek}</p>
      <p>monthName: {monthName}</p>
    </div>

  )
}

export default Dates
