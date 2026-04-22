import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

export const KPICard = ({ title, value, trend, isUp, color = "emerald", data }) => {
  const accentColor = color === "alert" ? "var(--color-alert)" : "var(--color-emerald)";
  
  return (
    <div className="card-flat" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</span>
          <span style={{ fontSize: '1.75rem', fontWeight: 700, color: color === 'alert' ? 'var(--color-alert)' : 'var(--text-primary)', marginTop: '4px' }}>{value}</span>
        </div>
        
        <div style={{ width: '60px', height: '30px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke={accentColor} 
                strokeWidth={2}
                fill="transparent" 
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '11px', fontWeight: 700 }}>
        <span style={{ color: accentColor }}>{isUp ? '↑' : '↓'} {trend}</span>
        <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>SENSITIVITY OFFSET</span>
      </div>
    </div>
  );
};
