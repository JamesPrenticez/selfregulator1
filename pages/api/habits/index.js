const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export default async function habits(req, res){
  const userId = '2'
  const {title, description, color} = req.body
  if(req.method === 'GET'){
      const result = await prisma.habit.findMany({
          where: {
            userId: userId,
          },
          select: {
            id: true,
            title: true,
            description: true,
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
          checkmarks: `[
            {
              date: ${Date.now()}
              checkmark: ${true}
            }
          ]`,
          User: { connect: { id: userId } },
        }
      })
    //console.log(result)   
    return res.status(200).json(result)
  }
}