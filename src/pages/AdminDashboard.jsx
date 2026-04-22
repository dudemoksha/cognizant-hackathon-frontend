import React from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';
import { KPICard } from '../components/ui/KPICard';
import { ShieldCheck, Activity, Users, Settings } from 'lucide-react';

const sparkData = [{ value: 90 }, { value: 95 }, { value: 92 }, { value: 98 }, { value: 99 }, { value: 99.9 }];

export const AdminDashboard = () => {
  return (
    <div className="layout-app">
      <Sidebar role="admin" />
      <div className="layout-main">
        <Header title="System Integrity Core" userName="Root Architect" />
        <main className="layout-content">
          
          <div className="grid-main">
            
            <div className="grid-main grid-cols-4">
              <KPICard title="System Uptime" value="99.98%" trend="Nominal" isUp={true} color="emerald" data={sparkData} />
              <KPICard title="Total mesh size" value="4.2 TB" trend="Synced" isUp={true} color="emerald" data={sparkData} />
              <KPICard title="Security Gates" value="Active" trend="L5" isUp={true} color="emerald" data={sparkData} />
              <KPICard title="Logic Latency" value="0.4ms" trend="Steady" isUp={true} color="emerald" data={sparkData} />
            </div>

            <div className="card-flat">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2 className="h-section">Access Management Node</h2>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-emerald)' }}></div>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-emerald)' }}>SECURE CHANNEL</span>
                </div>
              </div>
              
              <table className="table-dense">
                <thead>
                  <tr>
                    <th>Operator ID</th>
                    <th>Signal Level</th>
                    <th>Audit Status</th>
                    <th>Authorization</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span style={{ fontWeight: 700 }}>USR-8821</span> (Root)</td>
                    <td>Level 5 (Full)</td>
                    <td><span style={{ color: 'var(--color-emerald)' }}>CLEARED</span></td>
                    <td><span style={{ fontSize: '12px', fontWeight: 700 }}>2FA ENABLED</span></td>
                  </tr>
                  <tr>
                    <td><span style={{ fontWeight: 700 }}>USR-4412</span> (Analyst)</td>
                    <td>Level 4 (Regional)</td>
                    <td><span style={{ color: 'var(--color-emerald)' }}>CLEARED</span></td>
                    <td><span style={{ fontSize: '12px', fontWeight: 700 }}>2FA ENABLED</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};
