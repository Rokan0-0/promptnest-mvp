import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Ensure Node.js runtime for Prisma
export const runtime = 'nodejs'

// POST /api/prompts - Create a new prompt
export async function POST(request: NextRequest) {
  const requestId = `req-${Date.now()}`
  try {
    console.log(`📝 [${requestId}] POST /api/prompts - Creating new prompt...`)

    const body = await request.json().catch((err) => {
      console.error(`❌ [${requestId}] Failed to parse JSON body:`, err)
      return null
    })

    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    const { title, content } = body as { title?: string; content?: string }

    if (!title || !content) {
      console.error(`❌ [${requestId}] Validation failed: title/content missing`, { title, contentLength: content?.length })
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 })
    }

    // Ensure a demo user exists (for unauthenticated flows)
    const demoUserId = 'demo-user-1'
    const demoEmail = 'demo@example.com'
    await prisma.user.upsert({
      where: { id: demoUserId },
      update: {},
      create: {
        id: demoUserId,
        email: demoEmail,
        username: 'demo',
        name: 'Demo User',
      },
    })

    // Create the prompt; schema uses `body` field for content
    const created = await prisma.prompt.create({
      data: {
        authorId: demoUserId,
        title,
        body: content,
        visibility: 'public',
      },
      select: {
        id: true,
        title: true,
        body: true,
        description: true,
        visibility: true,
        createdAt: true,
        updatedAt: true,
        views: true,
        favoritesC: true,
        runsC: true,
        author: {
          select: { id: true, name: true, username: true, avatarUrl: true },
        },
      },
    })

    console.log(`✅ [${requestId}] Prompt created`, { id: created.id, title: created.title })

    // Map `body` back to `content` for API ergonomics
    const responsePayload = {
      ...created,
      content: created.body,
    }

    return NextResponse.json(responsePayload, { status: 201 })
  } catch (error) {
    console.error(`❌ [${requestId}] Error creating prompt:`, error)
    if (error instanceof Error) {
      console.error(`   - name: ${error.name}`)
      console.error(`   - message: ${error.message}`)
      console.error(`   - stack: ${error.stack}`)
    }

    // Attempt to surface Prisma error codes if present
    const anyErr = error as any
    const prismaCode = anyErr?.code
    const details = anyErr?.meta || undefined

    return NextResponse.json(
      {
        error: 'Failed to create prompt',
        code: prismaCode,
        details,
      },
      { status: 500 }
    )
  }
}


