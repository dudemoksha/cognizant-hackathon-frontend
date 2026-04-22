import React from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';
import { KPICard } from '../components/ui/KPICard';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts';
import { Globe, MoreHorizontal, Cpu } from 'lucide-react';

const sparkData = [{ value: 40 }, { value: 60 }, { value: 45 }, { value: 70 }, { value: 65 }, { value: 80 }];

const inventoryData = [
  { name: 'Node 1', current: 200, optimal: 300 },
  { name: 'Node 2', current: 250, optimal: 320 },
  { name: 'Node 3', current: 180, optimal: 280 },
];

export const SupplierDashboard = () => {
  return (
    <div className="layout-app">
      <Sidebar role="supplier" />
      <div className="layout-main">
        <Header title="Resilience Control Mesh" userName="Sr. Analyst One" />
        <main className="layout-content">
          
          <div className="grid-main">
            
            {/* Top Metrics Row */}
            <div className="grid-main grid-cols-4">
                <KPICard title="Revenue at Risk" value="$18.7M" trend="High" isUp={true} color="alert" data={sparkData} />
                <KPICard title="Monitored Nodes" value="1,248" trend="Stable" isUp={true} color="emerald" data={sparkData} />
                <KPICard title="Signal Health" value="99.9%" trend="Nominal" isUp={true} color="emerald" data={sparkData} />
                <KPICard title="System Latency" value="12ms" trend="Steady" isUp={false} color="emerald" data={sparkData.slice().reverse()} />
            </div>

            {/* Content Row: Data over Drawins */}
            <div className="grid-main grid-cols-2" style={{ gridTemplateColumns: '1.6fr 1.4fr' }}>
                
                <div className="card-flat">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <h3 className="h-section">Network Stability Over Time</h3>
                        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)' }}>LAST 24 HOURS</div>
                    </div>
                    <div style={{ width: '100%', height: '320px' }}>
                        <ResponsiveContainer>
                            <AreaChart data={sparkData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" hide />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: 'var(--shadow-premium)' }} />
                                <Area type="monotone" dataKey="value" stroke="var(--color-signal)" fill="rgba(14, 165, 233, 0.05)" strokeWidth={3} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="card-flat">
                    <h3 className="h-section">Critical Node Alerts</h3>
                    <table className="table-dense">
                        <thead>
                            <tr>
                                <th>Source</th>
                                <th>Risk Score</th>
                                <th>Impact</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span style={{ fontWeight: 700 }}>CN-8821</span> (Taiwan)</td>
                                <td><span style={{ color: 'var(--color-alert)', fontWeight: 700 }}>9.2</span></td>
                                <td style={{ color: 'var(--text-secondary)' }}>$4.2M / day</td>
                            </tr>
                            <tr>
                                <td><span style={{ fontWeight: 700 }}>CN-4412</span> (Suez)</td>
                                <td><span style={{ color: 'var(--color-emerald)', fontWeight: 700 }}>2.1</span></td>
                                <td style={{ color: 'var(--text-secondary)' }}>$0.8M / day</td>
                            </tr>
                            <tr>
                                <td><span style={{ fontWeight: 700 }}>CN-1102</span> (Rotterdam)</td>
                                <td><span style={{ color: '#ffae00', fontWeight: 700 }}>4.5</span></td>
                                <td style={{ color: 'var(--text-secondary)' }}>$1.4M / day</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Multi-Tier Mapping View */}
            <div className="card-flat">
                <h3 className="h-section">Multi-Tier Inventory Depth</h3>
                <div style={{ width: '100%', height: '240px' }}>
                    <ResponsiveContainer>
                        <BarChart data={inventoryData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
                            <Tooltip />
                            <Bar dataKey="current" fill="var(--color-signal)" radius={[4, 4, 0, 0]} barSize={40} />
                            <Bar dataKey="optimal" fill="#e2e8f0" radius={[4, 4, 0, 0]} barSize={40} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};
