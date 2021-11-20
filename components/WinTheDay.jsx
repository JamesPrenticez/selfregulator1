import React, {useEffect} from "react"
import { connect, useDispatch } from "react-redux"
import Task from "./Task";
import TaskAdd from "./TaskAdd";
import { fetchTasks } from "../redux/actions/tasks"

Date.prototype.getWeek = function() {
  var dt = new Date(this.getFullYear(),0,1); //Get first day of the year
  return Math.ceil((((this - dt) / 86400000) + dt.getDay()+1)/7);
}
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const currentDate = new Date()
const currentYear = currentDate.getFullYear()
const currentMonth = currentDate.getMonth()
const currentWeek = currentDate.getWeek()
const currentDay = currentDate.getDay()

function daysInMonth (year, month) {
  let days = new Date(year, month, 0).getDate() - 1
  const arrayOfDays = []
  for(let i = 1; i < days + 1; i++){
      arrayOfDays.push(new Date(year, month, i).toLocaleDateString())
  }
  return arrayOfDays
}
const numberOfDaysInMonth = daysInMonth(currentYear, currentMonth)

function dayOfMonth(year, month, day){
  //let d = currentDate.toLocaleDateString()
  let m = daysInMonth(year, month)
  let d = m.indexOf(day) + 1
  return d
}
const day = dayOfMonth(currentYear, currentMonth, currentDate.toLocaleDateString())
//console.log(d)

function onlyDaysThisWeek(){
  let cd = currentDay - 1 // 1-7 eg. the 11th is the 4th day in the week
  let d = day //gives us the acutal index in the month eg. the 11th
  let arr = [0, 0, 0, 0, 0, 0, 0]

  for(let i = 0; i < 7; i++){
      if(i === cd){
          arr[i] = d
          console.log("here")
      }
      //find day of week and count foward till we hit 7
      else if(i > cd){
          arr[i] = (d + (i - cd))
      }
      //else count backwards till we hit 1
      else if(i < cd){
          arr[i] = (d + (i - cd))
      }
  }
  return arr
}

const daysThisWeek = onlyDaysThisWeek()

function WinTheDay({tasks}){
  const dispatch = useDispatch()

  // const tasks = [{
  //     task: "Hardcode",
  //     boxes: [null, null, null, null, null, null, null]
  // }]   

  useEffect(() => {
    console.log("useEffect"),
    dispatch(fetchTasks())
    },[]
  )
  
  
  return (
      <main className="bg-custom-background fade grid grid-cols-2 md:max-w-3xl xl:max-w-6xl mx-auto">
        {/* Tasks */}
        <section className="col-span-2 md:col-span-1">
          <div className="w-full">
            <div className="p-4 md-p-0 xl:mt-4">
            <h1 className="flex justify-center text-2xl font-bold mb-4 font-kanit">{months[currentMonth]} - Week {currentWeek}</h1>

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
              <TaskAdd />
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