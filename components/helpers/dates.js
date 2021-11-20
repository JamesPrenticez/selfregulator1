Date.prototype.getWeek = function() {
  var dt = new Date(this.getFullYear(),0,1); //Get first day of the year
  return Math.ceil((((this - dt) / 86400000) + dt.getDay()+1)/7);
}
export const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const currentDate = new Date()
export const currentDay = currentDate.getDay()
export const currentWeek = currentDate.getWeek()
const currentMonth = currentDate.getMonth()
const currentYear = currentDate.getFullYear()

export const monthName = months[currentMonth]

function daysInMonth (year, month) {
  let days = new Date(year, month, 0).getDate() - 1
  const arrayOfDays = []
  for(let i = 1; i < days + 1; i++){
      arrayOfDays.push(new Date(year, month, i).toLocaleDateString())
  }
  return arrayOfDays
}

export const numberOfDaysInMonth = daysInMonth(currentYear, currentMonth)

function dayOfMonth(year, month, day){
  //let d = currentDate.toLocaleDateString()
  let m = daysInMonth(year, month)
  let d = m.indexOf(day) + 1
  return d
}

export const day = dayOfMonth(currentYear, currentMonth, currentDate.toLocaleDateString())

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

export const daysThisWeek = onlyDaysThisWeek()