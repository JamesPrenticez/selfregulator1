import React from "react"
import { useDispatch } from "react-redux"
import { TrashIcon } from "@heroicons/react/outline";
import { deleteHabitById } from "../../redux/habits/actions";
import { createArrayOfDatesForCurrentWeek, currentWeek } from "../../utils/checkmarks";

function HabitHeadings(){
  const arrayOfDatesForCurrentWeek = createArrayOfDatesForCurrentWeek()
  
  return(
    <div className="flex items-center p-4 bg-green-600 space-x-4">
      <div className="w-full flex justify-between items-center">
          <h1 className="text-4xl font-bold text-black">Habits for Week: {currentWeek}</h1>

        <div className="flex space-x-4">
          {arrayOfDatesForCurrentWeek.map((item, index) => (
            <div 
            key={index}
            className="h-16 w-16 bg-neutral-900 flex items-center justify-center cursor-pointer "
            >
              <div className="text-center">
                <h2 className="text-sm font-bold text-gray-400">{item.day.toUpperCase()}</h2>
                <h1 className="text-md">{item.date}</h1>
              </div>
            </div>
          ))}
          {/* Placeholder */}
          <div className="h-16 w-16 mx-auto my-auto"></div>
        </div>

      </div>
    </div>
  )
}


function Habit({habit}){
  const checkmarks = JSON.parse(habit.checkmarks)
  const dispatch = useDispatch()

  const updateCheckmark = (index) => {
    // cycle through: true, false, null 
    checkmarks[index].value === null ? checkmarks[index].value = true
    : checkmarks[index].value === true ? checkmarks[index].value = false
    : checkmarks[index].value = null
    console.log(checkmarks[index].value )
    //dispatch(updateCheckmarks(habit.id, checkmarks)
  }
  
  return(
    <div className="flex items-center p-4 bg-neutral-700 space-x-4">
      <div className="h-16 w-16 rounded-full bg-neutral-900"></div>
      
      <div className="w-full flex justify-between">
        <div className='h-16'>
          <h1 className="text-3xl" style={{color: habit.color}}>{habit.title}</h1>
          <h2 className="text-xl text-neutral-400">{habit.description}</h2>
        </div>
        
        <div className="flex space-x-4">
          {checkmarks.map((checkmark, index) => {
            return (
              <div 
                key={index}
                className="inline-flex h-16 w-16 bg-neutral-900 items-center justify-center cursor-pointer"
                onClick={() => updateCheckmark(index)}
              >
                {checkmark.value === true ? 
                  <svg 
                    className="text-green-600"
                    viewBox="0 0 500 500"
                    xmlns="http://www.w3.org/2000/svg"
                    height="100%"
                    width="100%"
                  >
                    <line fill="currentColor" strokeWidth="33px" strokeLinecap="round" stroke="currentColor" x1="138.462" y1="293.49" x2="207.1" y2="343.787"/>
                    <line fill="currentColor" strokeWidth="33px" strokeLinecap="round" stroke="currentColor" x1="207.1" y1="343.787" x2="367.455" y2="151.282" transform="matrix(-1, 0, 0, -1, 574.554993, 495.068985)"/>
                  </svg> 
                : checkmark.value === false ? 
                  <svg 
                    className="text-red-600"
                    viewBox="0 0 500 500"
                    xmlns="http://www.w3.org/2000/svg"
                    height="100%"
                    width="100%"
                  >
                    <line fill="currentColor" strokeWidth="33px" strokeLinecap="round" stroke="currentColor" x1="161.538" y1="159.762" x2="344.97" y2="341.616"/>
                    <line fill="currentColor" strokeWidth="33px" strokeLinecap="round" stroke="currentColor" x1="161.538" y1="341.616" x2="344.97" y2="159.762" transform="matrix(-1, 0, 0, -1, 506.507996, 501.377991)"/>
                  </svg>
                : //checkmark.value === null
                  <svg 
                    className="text-yellow-600"
                    viewBox="0 0 500 500"
                    xmlns="http://www.w3.org/2000/svg"
                    height="100%"
                    width="100%"
                  >
                    <rect x="140.828" y="222.485" width="221.893" height="39.053" fill="currentColor"/>
                  </svg>
                }
              </div> 
            )
          })}

          <TrashIcon className="navBtn my-auto w-16" onClick={() => dispatch(deleteHabitById(habit.id))} />

        </div>
      </div>
    </div>
  )
}

export default function Habits({habits}) {
  return (
    <>
      <HabitHeadings/>
      {habits.map((habit) => (
        <Habit key={habit.id} habit={habit}/>
      ))}
    </>
  )
}