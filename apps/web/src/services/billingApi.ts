import axios from 'axios';

const BILLING_API_URL = process.env.NEXT_PUBLIC_BILLING_API_URL || 'http://localhost:3005';

function getAuthHeaders() {
  if (typeof window === 'undefined') return {};
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function createCheckoutSession(tier: string): Promise<{ url: string }> {
  const response = await axios.post(
    `${BILLING_API_URL}/billing/create-checkout`,
    { tier },
    { headers: { 'Content-Type': 'application/json', ...getAuthHeaders() } }
  );
  return response.data;
}
