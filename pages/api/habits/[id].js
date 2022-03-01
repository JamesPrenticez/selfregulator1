const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// DELETE /api/habit/:id
export default async function deleteHabitById(req, res) {
  const habitId = req.query.id;
  if (req.method === 'DELETE') {
    const habit = await prisma.habit.delete({
      where: { id: String(habitId) },
    });
    res.json(habit)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}