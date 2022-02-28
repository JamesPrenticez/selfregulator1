import React from "react";
import HabitAdd from "./HabitAdd"

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
      <HabitAdd />
    </main>
  )
}