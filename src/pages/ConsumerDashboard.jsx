import React from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';
import { KPICard } from '../components/ui/KPICard';
import { Button } from '../components/ui/Button';
import { Package, ShieldCheck, Activity, Share2, Database, Network } from 'lucide-react';

const sparkData = [{ value: 30 }, { value: 50 }, { value: 40 }, { value: 60 }, { value: 55 }, { value: 75 }];

export const ConsumerDashboard = () => {
  return (
    <div className="layout-app">
      <Sidebar role="consumer" />
      <div className="layout-main">
        <Header title="Network Signal Ingestion" userName="Analyst Henderson" />
        <main className="layout-content">
          
          <div className="grid-main">
            
            {/* Precision Aligned KPI Row */}
            <div className="grid-main grid-cols-4">
              <KPICard title="Mesh Coverage" value="84.2%" trend="Nominal" isUp={true} color="emerald" data={sparkData} />
              <KPICard title="Active Signals" value="1,240" trend="Stable" isUp={true} color="emerald" data={sparkData} />
              <KPICard title="Security Gates" value="Active" trend="L4" isUp={true} color="emerald" data={sparkData} />
              <KPICard title="Node Latency" value="14ms" trend="Steady" isUp={false} color="emerald" data={sparkData.slice().reverse()} />
            </div>

            {/* Split Content Row: 60/40 Split like Supplier View */}
            <div className="grid-main grid-cols-2" style={{ gridTemplateColumns: '1.6fr 1.4fr' }}>
                
                <div className="card-flat" style={{ padding: '2.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
                        <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(14, 165, 233, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Share2 size={20} color="var(--color-signal)" />
                        </div>
                        <div>
                            <h2 className="h-section" style={{ marginBottom: '2px' }}>Inbound Data Tunnel</h2>
                            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 600 }}>SOURCE: EXTERNAL LSP FEED</p>
                        </div>
                    </div>
                    
                    <p className="text-sub" style={{ marginBottom: '2.5rem', fontSize: '14px', maxWidth: '480px' }}>
                        Establish a high-bandwidth encrypted tunnel to ingest real-time telemetries. 
                        Once connected, the mapping engine will automatically correlate signals to Tier-3 nodes.
                    </p>
                    
                    <div style={{ padding: '4rem 2rem', border: '1px solid var(--border-light)', borderRadius: '12px', borderStyle: 'dashed', textAlign: 'center', backgroundColor: 'white' }}>
                        <Database size={48} color="var(--text-muted)" style={{ marginBottom: '1.5rem', opacity: 0.5 }} />
                        <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '2.5rem' }}>Awaiting External Data Manifest</div>
                        <Button variant="primary" style={{ padding: '0 3rem' }}>Initialize Data Sync</Button>
                    </div>
                </div>

                <div className="card-flat">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <h3 className="h-section">Ingestion Integrity</h3>
                        <ShieldCheck size={20} color="var(--color-emerald)" />
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ padding: '1.5rem', border: '1px solid var(--border-light)', borderRadius: '10px', backgroundColor: 'var(--bg-secondary)' }}>
                            <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>AUTHENTICATION LEVEL</div>
                            <div style={{ fontSize: '16px', fontWeight: 700, marginTop: '4px', color: 'var(--text-primary)' }}>Clearance L4 (Node Operator)</div>
                        </div>
                        <div style={{ padding: '1.5rem', border: '1px solid var(--border-light)', borderRadius: '10px', backgroundColor: 'var(--bg-secondary)' }}>
                            <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>PROTOCOL STACK</div>
                            <div style={{ fontSize: '16px', fontWeight: 700, marginTop: '4px', color: 'var(--text-primary)' }}>gRPC / Protobuf v3</div>
                        </div>
                        <div style={{ padding: '1.5rem', border: '1px solid var(--border-light)', borderRadius: '10px', backgroundColor: 'var(--bg-secondary)' }}>
                            <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>ENCRYPTION STATUS</div>
                            <div style={{ fontSize: '16px', fontWeight: 700, marginTop: '4px', color: 'var(--color-emerald)' }}>Active: TLS 1.3 End-to-End</div>
                        </div>
                    </div>
                    
                    <Button variant="ghost" style={{ width: '100%', marginTop: '3rem', height: '3rem' }}>Review Integrity Logs</Button>
                </div>
            </div>

            {/* Signal Mapping Feed (Full Width) */}
            <div className="card-flat">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem' }}>
                    <Network size={20} color="var(--color-signal)" />
                    <h3 className="h-section">Signal Correlation Queue</h3>
                </div>
                <table className="table-dense">
                    <thead>
                        <tr>
                            <th>Signal Source</th>
                            <th>Correlation ID</th>
                            <th>Timestamp</th>
                            <th>Processing State</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span style={{ fontWeight: 700 }}>LSP-NORTH</span></td>
                            <td style={{ fontFamily: 'monospace', color: 'var(--text-secondary)' }}>8821-SIG-A</td>
                            <td>T-04:00s</td>
                            <td><div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-emerald)', fontWeight: 700 }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-emerald)' }}></div> SYNCED</div></td>
                        </tr>
                        <tr>
                            <td><span style={{ fontWeight: 700 }}>LSP-CENTRAL</span></td>
                            <td style={{ fontFamily: 'monospace', color: 'var(--text-secondary)' }}>4412-SIG-B</td>
                            <td>T-01:22s</td>
                            <td><div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-emerald)', fontWeight: 700 }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-emerald)' }}></div> SYNCED</div></td>
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
