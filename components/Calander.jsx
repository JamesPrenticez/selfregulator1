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
const d = dayOfMonth(currentYear, currentMonth, currentDate.toLocaleDateString())
//console.log(d)

function onlyDaysThisWeek(){
    let cd = currentDay - 1 // 1-7 eg. the 11th is the 4th day in the week
    let dn = d //acutal index in the month eg. the 11th
    let arr = [0, 0, 0, 0, 0, 0, 0]

    for(let i = 0; i < 7; i++){
        if(i === cd){
            arr[i] = dn
            console.log("here")
        }
        //find day of week and count foward till we hit 7
        else if(i > cd){
            arr[i] = (dn + (i - cd))
        }
        //else count backwards till we hit 1
        else if(i < cd){
            arr[i] = (dn + (i - cd))
        }
    }
    return arr
}

const daysThisWeek = onlyDaysThisWeek()


function Calander() {
    return (
        <>
        <h1 className="flex justify-center font-bold bg-blue-700">{months[currentMonth]} - Week {currentWeek}</h1>

        <div className="grid grid-cols-12 text-custom-textColor gap-x-1">

        <p className="col-span-5 !text-left font-semibold">Task</p>
        {days.map((day, index) => {
            return(
                <div key={index} className={`col-span-1 font-semibold ${currentDay === index + 1 && "text-custom-primaryAccent"}`}>
                    {day}
                </div>
            )
        })}

        <p className="col-span-5 !text-left ">Go to Sleep</p>
        {daysThisWeek.map((day, index) => {
            return(
                <div key={index} className={`col-span-1 ${d === day && "text-custom-primaryAccent"}`}>
                    {day}
                </div>
            )
        })}


      </div>
      </>
    )
}

export default Calander

//className={`${today === index && "text-custom-primaryAccent"}`}