const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// DELETE /api/habits/:id
export default async function deleteHabitById(req, res) {
  const habitId = req.query.id

  if (req.method === 'DELETE') {
    const habit = await prisma.habit.delete({
      where: { 
        id: String(habitId),
      },
    })
    res.json(habit)
  } 
  
  else if(req.method === 'PATCH'){
    const result = await prisma.habit.update({
      where: {
        id: String(habitId),
      },
      data: {
        title: 'snoop',
      }
    })
    //console.log(result)   
    return res.json(result)
  }

  if(req.method === 'PATCH'){
    const result = await prisma.habit.update({
      where: {
        id: String(habitId),
      },
      data: {
        title: 'snoop',
      }
    })
    //console.log(result)   
    return res.json(result)
  }
  
  else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}


  
