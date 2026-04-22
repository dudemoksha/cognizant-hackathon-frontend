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
            
            {/* Top Metrics Row - Refined with Revenue, Orders, Pending */}
            <div className="grid-main grid-cols-3" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <KPICard title="Revenue Generated" value="$24.8M" trend="+14%" isUp={true} color="emerald" data={sparkData} />
                <KPICard title="Total Orders" value="3,842" trend="+8%" isUp={true} color="emerald" data={sparkData} />
                <KPICard title="Pending Fulfillment" value="124" trend="-5%" isUp={false} color="alert" data={sparkData.slice().reverse()} />
            </div>

            {/* Content Row: Operation Charts */}
            <div className="grid-main grid-cols-2" style={{ gridTemplateColumns: '1.6fr 1.4fr' }}>
                
                <div className="card-flat">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <div>
                            <h3 className="h-section" style={{ marginBottom: '4px' }}>Supply Chain Throughput</h3>
                            <p style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 700 }}>MONTHLY PERFORMANCE METRICS</p>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px', fontWeight: 700 }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-signal)' }}></div> ACTUAL
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px', fontWeight: 700 }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#e2e8f0' }}></div> TARGET
                            </div>
                        </div>
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
                    <h3 className="h-section">Inventory Distribution</h3>
                    <div style={{ width: '100%', height: '320px', marginTop: '1rem' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={inventoryData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
                                <Bar dataKey="current" fill="var(--color-signal)" radius={[4, 4, 0, 0]} barSize={32} />
                                <Bar dataKey="optimal" fill="#e2e8f0" radius={[4, 4, 0, 0]} barSize={32} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Operational Tables (Structured) */}
            <div className="grid-main grid-cols-2">
                <div className="card-flat">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem' }}>
                        <Cpu size={20} color="var(--color-signal)" />
                        <h3 className="h-section">Active Order Queue</h3>
                    </div>
                    <table className="table-dense">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Destination</th>
                                <th>Status</th>
                                <th>Priority</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span style={{ fontWeight: 700 }}>#ORD-9921</span></td>
                                <td>Berlin Hub</td>
                                <td><div style={{ color: 'var(--color-emerald)', fontWeight: 700, fontSize: '12px' }}>SHIPPED</div></td>
                                <td>High</td>
                            </tr>
                            <tr>
                                <td><span style={{ fontWeight: 700 }}>#ORD-9925</span></td>
                                <td>Tokyo Port</td>
                                <td><div style={{ color: 'var(--color-signal)', fontWeight: 700, fontSize: '12px' }}>PROCESSING</div></td>
                                <td>Normal</td>
                            </tr>
                            <tr>
                                <td><span style={{ fontWeight: 700 }}>#ORD-9930</span></td>
                                <td>London DC</td>
                                <td><div style={{ color: 'var(--color-alert)', fontWeight: 700, fontSize: '12px' }}>DELAYED</div></td>
                                <td>Critical</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="card-flat">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem' }}>
                        <Globe size={20} color="var(--color-emerald)" />
                        <h3 className="h-section">Supplier Performance</h3>
                    </div>
                    <table className="table-dense">
                        <thead>
                            <tr>
                                <th>Supplier</th>
                                <th>Compliance</th>
                                <th>Lead Time</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span style={{ fontWeight: 700 }}>TechFlow Ltd</span></td>
                                <td>98.2%</td>
                                <td>4 Days</td>
                                <td>★★★★★</td>
                            </tr>
                            <tr>
                                <td><span style={{ fontWeight: 700 }}>MacroLogix</span></td>
                                <td>84.5%</td>
                                <td>12 Days</td>
                                <td>★★★☆☆</td>
                            </tr>
                            <tr>
                                <td><span style={{ fontWeight: 700 }}>Nova Systems</span></td>
                                <td>92.1%</td>
                                <td>7 Days</td>
                                <td>★★★★☆</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};
