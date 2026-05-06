'use client';

import { useState, useEffect } from 'react';
import { BarChart3, Zap, DollarSign, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function AnalyticsPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('/api/analytics/dashboard/user', { headers: { 'x-user-id': 'user_1' } })
      .then(r => r.json())
      .then(setData);
  }, []);

  return (
    <div className="p-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-black text-gray-900 mb-12 tracking-tight">Analytique & Consommation</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
          <Zap className="text-indigo-600 mb-4" />
          <div className="text-3xl font-black">1,284</div>
          <div className="text-gray-400 font-bold text-xs uppercase mt-1">Opérations totales</div>
        </div>
        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
          <DollarSign className="text-emerald-600 mb-4" />
          <div className="text-3xl font-black">€42.50</div>
          <div className="text-gray-400 font-bold text-xs uppercase mt-1">Coût estimé</div>
        </div>
        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
          <TrendingUp className="text-amber-600 mb-4" />
          <div className="text-3xl font-black">+12%</div>
          <div className="text-gray-400 font-bold text-xs uppercase mt-1">Croissance usage</div>
        </div>
      </div>

      <div className="bg-white p-10 rounded-[48px] border border-gray-100 shadow-sm h-[400px]">
        <h2 className="text-xl font-black mb-8">Évolution de l'utilisation</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data?.usage || []}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" hide />
            <YAxis hide />
            <Tooltip />
            <Line type="monotone" dataKey="operations" stroke="#4f46e5" strokeWidth={4} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
