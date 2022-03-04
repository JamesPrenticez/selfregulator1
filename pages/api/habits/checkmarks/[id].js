const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

import {getIndexCurrentWeek} from '../../../../utils/checkmarks'

// UPDATE /api/habits/checkmarks/:id
export default async function updateCheckmarksById(req, res) {
  let {habitId, newCheckmarkForSingleDay, indexInWeek} = req.body
  let updatedData = []
  let firstDayOfWeekIndexInYear = ''
  if(req.method === 'PATCH'){
    
    await prisma.habit.findMany({
      where: {
        id: habitId,
      },
      select: {
        checkmarks: true,
      }
    }).then((fetchedHabit) => {
      let checkmarks = JSON.parse(fetchedHabit[0].checkmarks)
      firstDayOfWeekIndexInYear = getIndexCurrentWeek(checkmarks)
      checkmarks.splice((firstDayOfWeekIndexInYear + indexInWeek), 1, newCheckmarkForSingleDay)
      updatedData = JSON.stringify(checkmarks)
    })
    //console.log(updatedData)
    const result = await prisma.habit.update({
      where: {
        id: String(habitId),
      },
      data: {
        checkmarks: updatedData,
      }
    }).then((res) => {
      //console.log(JSON.parse(res.checkmarks))
      let slice = JSON.parse(res.checkmarks).slice(firstDayOfWeekIndexInYear, (firstDayOfWeekIndexInYear + 7))
      //console.log(slice) 
      return {...res, checkmarks: JSON.stringify(slice)}
    })
    //console.log(result)
    return res.status(200).json(result)
  }
  
  else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}