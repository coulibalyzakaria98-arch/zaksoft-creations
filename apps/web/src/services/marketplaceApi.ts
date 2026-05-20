import axios from 'axios';

const MARKETPLACE_API_URL = process.env.NEXT_PUBLIC_MARKETPLACE_API_URL || 'http://localhost:3006';

export interface TemplateSummary {
  id: string;
  name: string;
  description?: string;
  price: number;
}

export const marketplaceService = {
  async getTemplates(): Promise<TemplateSummary[]> {
    const response = await axios.get(`${MARKETPLACE_API_URL}/templates`);
    return response.data;
  },
};
