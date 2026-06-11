import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const limit = searchParams.get('limit') || '3';
  
  try {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'https://zaksoft-auth-backend.onrender.com';
    
    const response = await fetch(`${backendUrl}/api/v1/users/me/activities?limit=${limit}`, {
      headers: {
        'Authorization': req.headers.get('Authorization') || '',
      },
    });
    
    if (!response.ok) throw new Error('Backend error');
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    // Fallback mock
    return NextResponse.json([
      { type: 'image', title: 'Image générée', description: 'Paysage futuriste avec néons', time: 'Il y a 2 minutes', timestamp: new Date() },
      { type: 'video', title: 'Vidéo créée', description: 'Coucher de soleil cinématique', time: 'Il y a 1 heure', timestamp: new Date() },
      { type: 'purchase', title: 'Template acheté', description: 'Logo Tech Startup', time: 'Il y a 3 heures', timestamp: new Date() },
    ]);
  }
}
