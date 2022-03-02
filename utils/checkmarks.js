import moment from 'moment'

Date.prototype.getWeek = function() {
  var dt = new Date(this.getFullYear(),0,1); //Get first day of the year
  return Math.ceil((((this - dt) / 86400000) + dt.getDay()+1)/7);
}

export function createArrayOfDatesForCurrentWeek(){
  const currentDayIndex = new Date().getDay() - 1 //zero index
  let arrayOfDatesForCurrentWeek = [{day: 'Mon', date: null}, {day: 'Tue', date: null}, {day: 'Wed', date: null}, {day: 'Thu', date: null}, {day: 'Fri', date: null}, {day: 'Sat', date: null}, {day: 'Sun', date: null}]

  for(let i = 0; arrayOfDatesForCurrentWeek.length > i; i++){
    //Handle less than current day
    if(i < currentDayIndex) arrayOfDatesForCurrentWeek[i].date = moment().subtract((currentDayIndex - i), 'days').format("DD")
    //Handle exactly current day
    if(i === currentDayIndex) arrayOfDatesForCurrentWeek[i].date = moment().format("DD")
    //Handle more than current day
    if(i > currentDayIndex) arrayOfDatesForCurrentWeek[i].date = moment().add((i - currentDayIndex), 'days').format("DD")
  }
  //console.log(currentDayIndex)
  return arrayOfDatesForCurrentWeek
}


export function createCheckmarksForCurrentWeek(){
  const currentDayIndex = new Date().getDay() - 1 //zero index
  let arrayOfDatesForCurrentWeek = Array.from({length: 7}, () => ({date: '', value: null}))

  for(let i = 0; arrayOfDatesForCurrentWeek.length > i; i++){
    //Handle less than current day
    if(i < currentDayIndex) arrayOfDatesForCurrentWeek[i].date = moment().subtract((currentDayIndex - i), 'days').format("DD MMM YYYY")
    //Handle exactly current day
    if(i === currentDayIndex) arrayOfDatesForCurrentWeek[i].date = moment().format("DD MMM YYYY")
    //Handle more than current day
    if(i > currentDayIndex) arrayOfDatesForCurrentWeek[i].date = moment().add((i - currentDayIndex), 'days').format("DD MMM YYYY")
  }
  //console.log(currentDayIndex)
  return arrayOfDatesForCurrentWeek
}

//console.log(createArrayOfDatesForCurrentWeek())

// node utils/checkmarks.js
// Add "type": "module" to your package.json file.
// https://stackoverflow.com/questions/42307721/how-to-dynamically-create-an-array-of-objects