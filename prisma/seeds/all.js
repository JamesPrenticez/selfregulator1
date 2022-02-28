const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const {users} = require('./1-users')
const {habits} = require('./2-habits')

async function main() {
  //Users
  for( i = 0; i < users.length; i++){
    const item = users[i]
    await prisma.user.create({
      data: item
    });
  }

  const a = await prisma.user.findMany()
  console.log(a)

  //Habits
  for( i = 0; i < habits.length; i++){
    const item = habits[i]
    await prisma.habit.create({
      data: item
    });
  }

  const b = await prisma.habit.findMany()
  console.log(b)
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

  //https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany-preview