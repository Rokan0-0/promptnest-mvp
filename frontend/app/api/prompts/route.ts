import { NextRequest, NextResponse } from 'next/server'

// GET /api/prompts - Fetch all prompts
export async function GET() {
  try {
    console.log('📖 GET /api/prompts - Fetching prompts...')
    
    // For now, return mock data to test the API structure
    // Replace this with actual Prisma calls once database is properly connected
    const mockPrompts = [
      {
        id: '1',
        title: 'Sample Prompt 1',
        content: 'This is a sample prompt content',
        description: 'A sample prompt for testing',
        author: {
          id: 'demo-user-1',
          name: 'Demo User',
          username: 'demo',
          avatarUrl: null
        },
        tags: [],
        visibility: 'public',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        views: 0,
        favoritesCount: 0,
        runsCount: 0
      }
    ]

    console.log('✅ Returning mock prompts:', mockPrompts.length)
    return NextResponse.json(mockPrompts)
  } catch (error) {
    console.error('❌ Error fetching prompts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch prompts' },
      { status: 500 }
    )
  }
}

// POST /api/prompts - Create a new prompt
export async function POST(request: NextRequest) {
  try {
    console.log('📝 POST /api/prompts - Creating new prompt...')
    
    const body = await request.json()
    console.log('📦 Request body received:', body)
    
    const { title, content, description, visibility = 'public', authorId, tags = [] } = body

    // Validate required fields from frontend
    if (!title || !content) {
      console.error('❌ Validation failed: Missing required fields')
      console.error('   - title:', !!title, title)
      console.error('   - content:', !!content, content)
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      )
    }

    // Use a default author ID if not provided (for demo purposes)
    const defaultAuthorId = authorId || 'demo-user-1'
    
    console.log('👤 Using authorId:', defaultAuthorId)
    console.log('🏷️  Tags:', tags)

    // For now, return a mock created prompt
    // Replace this with actual Prisma create call once database is properly connected
    const mockCreatedPrompt = {
      id: `prompt-${Date.now()}`,
      title,
      content,
      description: description || null,
      author: {
        id: defaultAuthorId,
        name: 'Demo User',
        username: 'demo',
        avatarUrl: null
      },
      tags: [],
      visibility,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      views: 0,
      favoritesCount: 0,
      runsCount: 0
    }

    console.log('✅ Mock prompt created successfully:', {
      id: mockCreatedPrompt.id,
      title: mockCreatedPrompt.title,
      author: mockCreatedPrompt.author.name
    })

    return NextResponse.json(mockCreatedPrompt, { status: 201 })
  } catch (error) {
    console.error('❌ Error creating prompt:', error)
    
    // More detailed error logging
    if (error instanceof Error) {
      console.error('   - Error name:', error.name)
      console.error('   - Error message:', error.message)
      console.error('   - Error stack:', error.stack)
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to create prompt',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    )
  }
}