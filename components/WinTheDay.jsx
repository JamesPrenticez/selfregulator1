import React, {useEffect} from "react"
import { useSession } from "next-auth/react";
import { connect, useDispatch } from "react-redux"
import Task from "./Task";
import TaskAdd from "./TaskAdd";
import { fetchTasks } from "../redux/actions/tasks"
import {currentDay, days, daysThisWeek, currentWeek, monthName} from "./helpers/dates"

function WinTheDay({tasks}){
  const {data: session} = useSession();
  const uid = session.user.uid
  const dispatch = useDispatch()
  
  useEffect(() => {
    if(!uid){
      console.log("loading")
    } else {
      console.log(uid)
      dispatch(fetchTasks(uid))
    }
    },[uid]
  )
  
  return (
      <main className="bg-custom-background fade grid grid-cols-2 md:max-w-3xl xl:max-w-6xl mx-auto">
        {/* Tasks */}
        <section className="col-span-2 md:col-span-1">
          <div className="w-full">
            <div className="p-4 md-p-0 xl:mt-4">
            <h1 className="flex justify-center text-2xl font-bold mb-4 font-kanit">{monthName} - Week {currentWeek}</h1>

            <div className="grid grid-cols-12 text-custom-textColor justify-center items-center text-center xl:text-2xl gap-x-1">

            <p className="col-span-5 !text-left font-semibold text-xs md:text-base">Task</p>
            {days.map((day, index) => {
                return(
                    <div key={index} className={`text-xs md:text-base col-span-1 font-semibold ${currentDay-1 === index && "text-custom-primaryAccent"}`}>
                        {day}
                    </div>
                )
            })}
            </div>

              {/* Display Tasks */}
              {tasks.map((item) => (
                <Task 
                  key={Math.random()}
                  item={item}
                  currentDayIndex={currentDay - 1}
                  daysThisWeek={daysThisWeek}
                />
                ))}

              {/* Add Task */}
              <TaskAdd session={session}/>
            </div>
          </div>
        </section>
      </main>
    )
}

function mapStateToProps(state){
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(WinTheDay)