const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
import { createCheckmarksForCurrentWeek } from '../../../utils/checkmarks'

// api/habits
export default async function habits(req, res){
  const userId = '1'
  const {habitId, title, description, color, checkmarks} = req.body
  if(req.method === 'GET'){
    const result = await prisma.habit.findMany({
        where: {
          userId: userId,
        },
        select: {
          id: true,
          title: true,
          description: true,
          color: true,
          checkmarks: true,
          //createdAt: true,
        }
      })
      //console.log(result) 
      return res.status(200).json(result)
    }

    else if(req.method === 'POST'){
      const result = await prisma.habit.create({
        data: {
          title: title,
          description: description,
          color: color,
          checkmarks: JSON.stringify(createCheckmarksForCurrentWeek()),
          User: { connect: { id: userId } },
        }
      })
      //console.log(result)   
      return res.status(200).json(result)
    }

    // else if(req.method === 'PATCH'){
    //   const result = await prisma.habit.update({
    //     where: {
    //       userId: userId,
    //       id: habitId
    //     },
    //     data: {
    //       title: title,
    //       description: description,
    //       color: color,
    //       checkmarks: JSON.stringify(createArrayOfDatesForCurrentWeek()),
    //     }
    //   })
    //   //console.log(result)   
    //   return res.status(200).json(result)
    // }

    
}