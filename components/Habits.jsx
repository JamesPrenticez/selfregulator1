import React, { useEffect } from "react";
import {
  currentDay,
  days,
  daysThisWeek,
  currentWeek,
  monthName,
} from "./helpers/dates";

function Habit({habit}){
  return(
    <div>
      <h1>{habit.title}</h1>
      <h1>{habit.description}</h1>
    </div>
  )
}

export default function Habits({habits}) {
  return (
    <main>
      {habits.map((habit) => (
        <Habit key={habit.id} habit={habit}/>
      ))}
    </main>
  )
}