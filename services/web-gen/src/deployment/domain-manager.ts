import { prisma } from '../db';
import dns from 'dns';
import { promisify } from 'util';

const resolveTxt = promisify(dns.resolveTxt);

export class DomainManager {
  async verifyDomain(domainId: string): Promise<boolean> {
    const domain = await prisma.customDomain.findUnique({ where: { id: domainId } });
    if (!domain) return false;
    
    try {
      const txtRecords = await resolveTxt(domain.domain);
      const isVerified = txtRecords.some(records => 
        records.some(record => record.includes(domain.verificationToken || ''))
      );
      
      if (isVerified) {
        await prisma.customDomain.update({ where: { id: domainId }, data: { verified: true } });
      }
      return isVerified;
    } catch { return false; }
  }
}

export const domainManager = new DomainManager();
