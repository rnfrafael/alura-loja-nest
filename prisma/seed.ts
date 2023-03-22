import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const haha = await prisma.usuarios.create({
    data: {
      nome: 'A',
      email: 'abc@abc.abc',
      senha: '123456',
    },
  });
  console.log(haha);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
