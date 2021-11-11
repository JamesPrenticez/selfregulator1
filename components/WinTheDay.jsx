import React from "react"
import Task from "./Task";
import TaskAdd from "./TaskAdd";

import { useRecoilValue } from 'recoil';
import { tasksState } from '../atoms/task';



const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const today = 3

function WinTheDay(){
  const tasksList = useRecoilValue(tasksState)
    return (
<main className="bg-custom-background fade grid grid-cols-2 md:max-w-3xl xl:max-w-6xl mx-auto">
        {/* Tasks */}
        <section className="col-span-2 md:col-span-1">
          <div className="w-full">
            <>
            <div className="p-4 xl:mt-4 xl:ml-4 ">
              {/* Header */}
              <div className="grid grid-cols-12 text-custom-textColor justify-center items-center text-center font-semibold xl:text-3xl mb-4">
                <h1 className="col-span-5 !text-left">TASK</h1>
                {days.map((day, index) => {
                  return(
                    <h1 key={index}className={`${today === index && "text-custom-primaryAccent"}`}>{day}</h1>
                  )
                })}
              </div>

              {/* Display Tasks */}
              {tasksList.map((item) => (
                <Task 
                key={Math.random()}
                item={item}
                />
                ))}

              {/* Add Task */}
              <TaskAdd />
            </div>
            </>
          </div>
        </section>
      </main>



























    );
}

export default WinTheDay

//https://www.py4u.net/discuss/313716