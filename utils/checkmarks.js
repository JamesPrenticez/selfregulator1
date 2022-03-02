import moment from 'moment'

export function createArrayOfDatesForCurrentWeek(){
  const currentDayIndex = new Date().getDay() - 1 //zero index
  let arrayOfDatesForCurrentWeek = Array.from({length: 7}, () => ({date: '', value: null}))

  for(let i = 0; arrayOfDatesForCurrentWeek.length > i; i++){
    //Handle less than current day
    if(i < currentDayIndex) arrayOfDatesForCurrentWeek[i].date = moment().subtract((currentDayIndex - i), 'days').format("DD MMMM YYYY")
    //Handle exactly current day
    if(i === currentDayIndex) arrayOfDatesForCurrentWeek[i].date = moment().format("DD MMMM YYYY")
    //Handle more than current day
    if(i > currentDayIndex) arrayOfDatesForCurrentWeek[i].date = moment().add((i - currentDayIndex), 'days').format("DD MMMM YYYY")
  }
  //console.log(currentDayIndex)
  return arrayOfDatesForCurrentWeek
}

//console.log(createArrayOfDatesForCurrentWeek())

// node utils/checkmarks.js
// Add "type": "module" to your package.json file.
// https://stackoverflow.com/questions/42307721/how-to-dynamically-create-an-array-of-objects