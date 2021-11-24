import React, {useEffect, useState} from "react"
import { useSession, signIn } from "next-auth/react";
import { connect, useDispatch } from "react-redux"
import Task from "./Task";
import TaskAdd from "./TaskAdd";
import { fetchTasks } from "../../redux/actions/tasks"
import {currentDay, days, daysThisWeek, currentWeek, monthName} from "./helpers/dates"
import { fakeTasks } from './data/fakeTasks'

function Tasks({tasks}){
  const { data: session, status } = useSession()
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const uid = session?.user.uid
  // if (status === "loading") {
  //   return (
  //       <>
  //       <div className="absolute flex flex-wrap h-screenNav w-full items-center justify-center ">
  //         <div className="flex flex-wrap h-36 w-full items-center justify-center ">
  //             <img src="/spinner.svg" alt="" />
  //         </div>
  //       </div>
  //       </>
  //   )
  // } 

  // if (status === "unauthenticated") {
  //   return (
  //   <div className="absolute flex flex-wrap h-screenNav w-full items-center justify-center ">
  //     <div className="flex flex-wrap h-36 w-full items-center justify-center ">
  //       <p className="text-red-500 text-3xl w-full text-center">You do not have access to this page! Please sign in.</p>
  //       <button 
  //         className="w-32 text-custom-secondary p-2 font-bold border border-custom-tertiaryAccent rounded hover:bg-custom-secondaryAccent hover:text-custom-quarterAccent" 
  //         onClick={signIn} 
  //       >
  //         Sign In
  //       </button> 
  //     </div>
  //   </div>
  //   )
  // }

  useEffect(() => {
    setTimeout(() => {
      if(!uid){
          setLoading(true)
        } else {
          dispatch(fetchTasks(uid))
          setLoading(false)
        }
    }, 1000)
    },[uid]
  )
  console.log(loading)
  console.log(tasks.length)

  return (
      <main className="bg-custom-background fade grid grid-cols-2 md:max-w-3xl xl:max-w-6xl mx-auto">
        {/* Tasks */}
        <section className="col-span-2 xl:col-span-1">
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

              {/*Show spinner while fetching from DB*/}
              {loading ? (
                <div className="flex justify-center items-center bg-blue-500 w-full transition ease-in-out">
                  <img className="h-24 w-24" src="spinner.svg" alt="" />
                </div>
              ) : (
                ""
              )}

              {!loading && tasks.length == 0 ? (
                <>
                {/* Display Fake Tasks */}
                {fakeTasks.map((item, index) => (
                  <Task 
                    key={index}
                    item={item}
                    session={session}
                    currentDayIndex={currentDay - 1}
                    daysThisWeek={daysThisWeek}
                  />
                ))}
                </>            
              ) : (
                <>
                  {/* Display Real Tasks */}
                  {tasks.map((item, index) => (
                    <Task 
                      key={index}
                      item={item}
                      session={session}
                      currentDayIndex={currentDay - 1}
                      daysThisWeek={daysThisWeek}
                    />
                  ))}
                </>
              )}

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

export default connect(mapStateToProps)(Tasks)