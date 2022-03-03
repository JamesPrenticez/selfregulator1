const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
import { createCheckmarksForCurrentYear, getArrayForCurrentWeek } from '../../../utils/checkmarks'

// api/habits
export default async function habits(req, res){
  const userId = '1'
  const {habitId, title, description, color, checkmarks, checkmarkForSingleDay} = req.body
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
      }).then((result) => {
        result.map(x => {
          x.checkmarks = JSON.stringify(getArrayForCurrentWeek(JSON.parse(x.checkmarks)))
          return {...x}
        })
        //console.log(result) 
        return res.status(200).json(result)
      })
    }

    else if(req.method === 'POST'){
      const result = await prisma.habit.create({
        data: {
          title: title,
          description: description,
          color: color,
          checkmarks: JSON.stringify(createCheckmarksForCurrentYear),
          User: { connect: { id: userId } },
        }
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