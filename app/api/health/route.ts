import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const result: { now: Date }[] = await prisma.$queryRaw`SELECT NOW() as now`
    const now = result[0]?.now

    return Response.json({ ok: true, now })
  } catch (error) {
    console.error('Health check failed:', error)
    return Response.json({ ok: false, error: 'DB not reachable' }, { status: 500 })
  }
}
