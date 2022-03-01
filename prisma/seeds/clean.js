const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

console.log("~~~ Clean.js ~~~")
async function clean() {  
    await prisma.habit.deleteMany({})
    await prisma.user.deleteMany({})
    const a = await prisma.user.findMany()
    const b = await prisma.habit.findMany()

    console.log("users: " + a.length, " | ", "habits: " + b.length)
  }

  clean()

module.exports = {clean}