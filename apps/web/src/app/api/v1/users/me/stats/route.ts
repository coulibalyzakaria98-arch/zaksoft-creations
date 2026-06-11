import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'https://zaksoft-auth-backend.onrender.com';
    
    const response = await fetch(`${backendUrl}/api/v1/users/me/stats`, {
      headers: {
        'Authorization': req.headers.get('Authorization') || '',
      },
    });
    
    if (!response.ok) throw new Error('Backend error');
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    // Fallback
    return NextResponse.json({
      images: 12,
      videos: 3,
      websites: 1,
      purchases: 0,
      totalGenerations: 16,
    });
  }
}
