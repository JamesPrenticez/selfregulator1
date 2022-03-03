const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

import {getIndexCurrentWeek} from '../../../../utils/checkmarks'

// UPDATE /api/habits/checkmarks/:id
export default async function updateCheckmarksById(req, res) {
  //const habitId = req.query.id
  //console.log(habitId)
  let {habitId, newCheckmarkForSingleDay, indexInWeek} = req.body
  //console.log(habitId, checkmarks)
  
  if(req.method === 'PATCH'){
    
    const result = await prisma.habit.findMany({
      where: {
        id: habitId,
      },
      select: {
        checkmarks: true,
      }
    }).then((fetchedHabit) => {
      let checkmarks = JSON.parse(fetchedHabit[0].checkmarks)
      let firstDayOfWeekIndexInYear = getIndexCurrentWeek(checkmarks)
      checkmarks.splice((firstDayOfWeekIndexInYear + indexInWeek), 1, newCheckmarkForSingleDay)
      
      //console.log(checkmarks)
      let slice = checkmarks.slice(firstDayOfWeekIndexInYear, (firstDayOfWeekIndexInYear + 7)) // just to reduce console output 
      console.log(slice)

      // let updatedData = result.map(x => {x.checkmarks = JSON.stringify(getArrayForCurrentWeek(JSON.parse(x.checkmarks)))
      //   return {...x}
      // })
    })

    // const result = await prisma.habit.update({
    //   where: {
    //     id: String(habitId),
    //   },
    //   data: {
    //     checkmarks: updatedData,
    //   }
    // })
    // //console.log(result)   
    // return res.json(result)
  }
  
  else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}