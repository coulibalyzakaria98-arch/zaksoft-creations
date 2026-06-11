import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'https://zaksoft-auth-backend.onrender.com';
    const response = await fetch(`${backendUrl}/api/v1/users/me/assets${req.nextUrl.search}`, {
      headers: {
        'Authorization': req.headers.get('Authorization') || '',
        'Cookie': req.headers.get('Cookie') || '',
      },
    });
    
    if (!response.ok) throw new Error('Backend error');
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ assets: [], hasMore: false }, { status: 200 });
  }
}
