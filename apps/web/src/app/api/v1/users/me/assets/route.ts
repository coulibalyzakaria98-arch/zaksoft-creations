import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthUser } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type'); // 'image', 'video', 'website', ou null pour tous
    const limit = parseInt(searchParams.get('limit') || '20');
    const cursor = searchParams.get('cursor');

    const userId = authUser.userId;

    // Construire la requête en fonction du type
    const queries: any[] = [];

    if (!type || type === 'image') {
      queries.push(
        prisma.image.findMany({
          where: { userId, status: 'COMPLETED' },
          select: {
            id: true,
            prompt: true,
            imageUrl: true,
            resolution: true,
            createdAt: true,
          },
          orderBy: { createdAt: 'desc' },
          take: limit,
          ...(cursor ? { skip: 1, cursor: { id: cursor } } : {}),
        }).then(images => images.map(img => ({ ...img, type: 'image' })))
      );
    }

    if (!type || type === 'video') {
      queries.push(
        prisma.video.findMany({
          where: { userId, status: 'COMPLETED' },
          select: {
            id: true,
            prompt: true,
            videoUrl: true,
            duration: true,
            aspectRatio: true,
            createdAt: true,
          },
          orderBy: { createdAt: 'desc' },
          take: limit,
          ...(cursor ? { skip: 1, cursor: { id: cursor } } : {}),
        }).then(videos => videos.map(video => ({ ...video, type: 'video' })))
      );
    }

    if (!type || type === 'website') {
      queries.push(
        prisma.website.findMany({
          where: { userId, status: 'COMPLETED' },
          select: {
            id: true,
            description: true,
            template: true,
            previewUrl: true,
            createdAt: true,
          },
          orderBy: { createdAt: 'desc' },
          take: limit,
          ...(cursor ? { skip: 1, cursor: { id: cursor } } : {}),
        }).then(sites => sites.map(site => ({ ...site, type: 'website' })))
      );
    }

    // Attendre toutes les requêtes et fusionner les résultats
    const results = await Promise.all(queries);
    const assets = results.flat().sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    ).slice(0, limit);

    const nextCursor = assets.length === limit ? assets[assets.length - 1].id : null;

    return NextResponse.json({
      assets,
      nextCursor,
      hasMore: !!nextCursor,
    });

  } catch (error) {
    console.error('Erreur récupération historique:', error);
    return NextResponse.json({ error: 'Erreur interne' }, { status: 500 });
  }
}
