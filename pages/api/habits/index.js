const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export default async function getHabits(req, res){
  const userId = req.userId
  const result = await prisma.habit.findMany({
          where: {
            userId: '1',
          },
          select: {
            id: true,
            title: true,
            description: true,
            checkmarks: true,
            createdAt: true,
          }
        })
  return res.status(200).json(result)
}