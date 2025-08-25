import 'dotenv/config'   // ✅ loads your .env file
import { PrismaClient } from '@prisma/client' 
const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'demo@promptnest.app' },
    update: {},
    create: {
      email: 'demo@promptnest.app',
      username: 'demo',
      name: 'Demo User',
    },
  })

  await prisma.tag.createMany({
    data: [{ name: 'marketing' }, { name: 'coding' }, { name: 'design' }],
    skipDuplicates: true,
  })

  // fetch the tag you want
  const marketingTag = await prisma.tag.findUnique({
    where: { name: 'marketing' },
  })

  // create the prompt
  const prompt = await prisma.prompt.create({
    data: {
      authorId: user.id,
      title: 'Cold Email Generator',
      body: 'Write a concise cold email to ${company} about ${offer}.',
      description: 'Starter cold email template with variables.',
      visibility: 'public',
    },
  })

  // link prompt <-> tag via PromptTag
  if (marketingTag) {
    await prisma.promptTag.create({
      data: {
        promptId: prompt.id,
        tagId: marketingTag.id,
      },
    })
  }

  console.log({ user, prompt, marketingTag })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
