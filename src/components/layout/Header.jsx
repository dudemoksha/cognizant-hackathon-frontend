import React from 'react';
import { Calendar, ChevronDown, User, ShieldAlert } from 'lucide-react';
import './layout.css';

export const Header = ({ title, userName }) => {
  return (
    <header className="header" style={{ padding: '2rem 2.5rem 1.5rem 2.5rem', borderBottom: '1px solid var(--border-light)', backgroundColor: 'white' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <h1 className="header-title" style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>{title}</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 10px', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--color-emerald)', borderRadius: '100px', fontSize: '11px', fontWeight: 700 }}>
            LIVE FEED ACTIVE
        </div>
      </div>
      
      <div className="header-controls">
        <div className="control-item" style={{ borderColor: 'var(--border-light)', borderRadius: '100px', padding: '6px 16px' }}>
          <Calendar size={14} color="var(--text-secondary)" />
          <span style={{ fontSize: '12px' }}>Session Range: Oct 2023</span>
          <ChevronDown size={14} color="var(--text-secondary)" />
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: '1rem', paddingLeft: '1rem', borderLeft: '1px solid var(--border-light)' }}>
            <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '12px', fontWeight: 700 }}>{userName}</div>
                <div style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Signal Level 4</div>
            </div>
            <div className="user-avatar" style={{ border: '1px solid var(--color-emerald)' }}>
                <User size={18} />
            </div>
        </div>
      </div>
    </header>
  );
};
