import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'https://zaksoft-auth-backend.onrender.com';
    
    const response = await fetch(`${backendUrl}/api/v1/users/me/credits`, {
      headers: {
        'Authorization': req.headers.get('Authorization') || '',
        'Cookie': req.headers.get('Cookie') || '',
      },
    });
    
    if (!response.ok) throw new Error('Backend error');
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    // Fallback pour développement / backend indisponible
    return NextResponse.json({
      credits: 10,
      usedCredits: 45,
      limit: 100,
      plan: 'free',
    });
  }
}
