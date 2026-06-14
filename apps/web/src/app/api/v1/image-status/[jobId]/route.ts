import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  req: NextRequest, 
  { params }: { params: { jobId: string } }
) {
  const { jobId } = params;
  
  try {
    const dbJob = await prisma.job.findUnique({
      where: { id: jobId },
      include: { image: true }
    });
    
    if (!dbJob) {
      return NextResponse.json({ error: 'Job non trouvé' }, { status: 404 });
    }

    if (dbJob.status === 'COMPLETED') {
      return NextResponse.json({
        status: 'completed',
        result: { imageUrl: dbJob.image?.imageUrl || null }
      });
    }

    if (dbJob.status === 'FAILED') {
      return NextResponse.json({
        status: 'failed',
        error: dbJob.error
      });
    }

    return NextResponse.json({
      status: dbJob.status.toLowerCase(),
      progress: dbJob.progress
    });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur lors de la récupération du statut' }, { status: 500 });
  }
}
