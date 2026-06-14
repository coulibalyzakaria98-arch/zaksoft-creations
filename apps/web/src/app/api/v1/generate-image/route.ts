import { NextRequest, NextResponse } from 'next/server';
import { getAuthUser } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { addToQueue } from '@/lib/queue';

export async function POST(req: NextRequest) {
  try {
    const user = await getAuthUser(req);
    if (!user) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
    }
    
    const body = await req.json();
    const { prompt, resolution, negativePrompt } = body;
    
    if (!prompt) {
      return NextResponse.json({ error: 'Prompt requis' }, { status: 400 });
    }
    
    // Vérifier les crédits via Prisma
    const dbUser = await prisma.user.findUnique({
      where: { id: user.userId },
      select: { credits: true },
    });
    
    if (!dbUser || dbUser.credits < 1) {
      return NextResponse.json({ error: 'Crédits insuffisants' }, { status: 402 });
    }
    
    // Créer le job
    const job = await prisma.job.create({
      data: {
        type: 'IMAGE',
        userId: user.userId,
        status: 'PENDING',
        input: { prompt, resolution, negativePrompt },
        creditsCost: 1,
      },
    });
    
    // Ajouter à la file d'attente
    await addToQueue('image-generation', {
      jobId: job.id,
      userId: user.userId,
      prompt,
      resolution,
      negativePrompt,
    });
    
    return NextResponse.json({ jobId: job.id });
    
  } catch (error) {
    console.error('Erreur API:', error);
    return NextResponse.json({ error: 'Erreur interne' }, { status: 500 });
  }
}
