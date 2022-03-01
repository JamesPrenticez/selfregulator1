import React from "react";

function Habit({habit}){
  return(
    <div className="flex items-center p-4 bg-neutral-700 space-x-4">
      <div className="h-16 w-16 rounded-full bg-neutral-900"></div>
      <div className='h-16'>
        <h1 className="text-3xl" style={{color: habit.color}}>{habit.title}</h1>
        <h2 className="text-xl text-neutral-400">{habit.description}</h2>
      </div>
    </div>
  )
}

export default function Habits({habits}) {
  return (
    <>
      {habits.map((habit) => (
        <Habit key={habit.id} habit={habit}/>
      ))}
    </>
  )
}