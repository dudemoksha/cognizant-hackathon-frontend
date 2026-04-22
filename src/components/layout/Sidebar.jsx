import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Zap, 
  Truck, 
  Package, 
  Users, 
  FileText, 
  Settings, 
  LogOut,
  Target
} from 'lucide-react';
import './layout.css';

export const Sidebar = ({ role }) => {
  return (
    <aside className="sidebar" style={{ borderRight: '1px solid var(--border-light)' }}>
      <div className="sidebar-header" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ color: 'var(--color-emerald)' }}>
          <Target size={24} strokeWidth={2.5} />
        </div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em' }}>Control Room</h2>
      </div>
      
      <nav className="sidebar-nav">
        {role === 'consumer' && (
          <NavLink to="/consumer" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <Zap size={18} /> Signal Monitor
          </NavLink>
        )}
        
        {role === 'supplier' && (
          <NavLink to="/supplier" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <Zap size={18} /> Operation Control
          </NavLink>
        )}

        {role === 'admin' && (
          <NavLink to="/admin" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <Settings size={18} /> System Core
          </NavLink>
        )}

        <NavLink to="#" className="nav-link">
          <Truck size={18} /> Logistics Flow
        </NavLink>
        
        <NavLink to="#" className="nav-link">
          <Package size={18} /> Node Inventory
        </NavLink>

        <NavLink to="#" className="nav-link">
          <Users size={18} /> Supplier Mesh
        </NavLink>

        <NavLink to="#" className="nav-link">
          <FileText size={18} /> Risk Reports
        </NavLink>
      </nav>

      <div style={{ padding: '1.5rem', marginTop: 'auto' }}>
        <NavLink to="/login" className="nav-link" style={{ padding: '0.75rem 1rem', marginBottom: 0 }}>
          <LogOut size={18} /> Terminate Session
        </NavLink>
      </div>
    </aside>
  );
};
