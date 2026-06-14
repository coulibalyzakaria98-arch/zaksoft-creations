import { NextResponse } from 'next/server';
import { PrismaClient } from '@zaksoft/database';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Agrégation des statistiques depuis la base de données
    const [totalUsers, totalImages, totalVideos, totalWebsites] = await Promise.all([
      prisma.user.count(),
      prisma.image.count(),
      prisma.video.count(),
      prisma.website.count()
    ]);

    const stats = {
      users: totalUsers,
      generations: totalImages + totalVideos + totalWebsites,
      images: totalImages,
      videos: totalVideos,
      projects: totalWebsites,
      growth: {
        users: 15, // Approximation pour le MVP
        images: 20,
        videos: 10,
      }
    };
    
    return NextResponse.json(stats);
    
  } catch (error) {
    console.error('Stats API error:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
