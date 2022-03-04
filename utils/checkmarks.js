// node utils/checkmarks.js
// Add "type": "module" to your package.json file to run this in the terminal.
// https://stackoverflow.com/questions/42307721/how-to-dynamically-create-an-array-of-objects
let moment = require('moment') //ES5 ..
//import moment from 'moment'
//import fs from 'fs'
//import {data} from './data.js';

//Get Current Week - returns number - you dont need to import or export it jsut works with Date.getWeek() anywhere in the app
Date.prototype.getWeek = function() {
  var dt = new Date(this.getFullYear(),0,1); //Get first day of the year
  return Math.ceil((((this - dt) / 86400000) + dt.getDay()+1)/7);
}


//This is a bit overkill
function createArrayOfDatesForCurrentWeek(){
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

const createCheckmarksForCurrentYear = Array.from(new Array(365)).map((_, index) => {
  //let startDate = moment().add(-364, 'days')
  let startDate = moment().startOf('year')
  return {
    date: moment(startDate).add(index, 'day').format('DD MM YYYY'),
    value: null,
  }
})
//console.log(createCheckmarksForCurrentYear)

//Print to JSON
// let json = JSON.stringify(createCheckmarksForCurrentYear);
// fs.writeFileSync('utils/data.js', json);

function getIndexCurrentWeek(data){
  const startOfWeek = moment().startOf('isoweek').format('DD MM YYYY') //iso makes the first day Monday not Sunday =)
  let obj = data.find(x => x.date === startOfWeek)
  let index = data.indexOf(obj)
  return index
}

//const currentDate = new Date()
//export const startOfCurrentWeek = currentDate.getWeek()

const currentWeek = moment(moment().toDate(), "DD MM YYYY").week()

function getArrayForCurrentWeek(data){
  const startOfWeek = moment().startOf('isoweek').format('DD MM YYYY') //iso makes the first day Monday not Sunday =)
  let obj = data.find(x => x.date === startOfWeek)
  let index = data.indexOf(obj)
  return data.slice(index, (index + 7))
}
//console.log(getArrayOfCurrentWeek())

//ES5 Syntax
module.exports = {
  getIndexCurrentWeek,
  createArrayOfDatesForCurrentWeek,
  createCheckmarksForCurrentYear,
  getArrayForCurrentWeek,
  currentWeek,
}