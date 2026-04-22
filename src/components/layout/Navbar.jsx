import React from 'react';
import { NavLink } from 'react-router-dom';
import { Apple, Search, ShoppingBag } from 'lucide-react';

export const Navbar = () => {
  const navLinks = [
    { name: 'Store', path: '#' },
    { name: 'Mac', path: '#' },
    { name: 'iPad', path: '#' },
    { name: 'iPhone', path: '#' },
    { name: 'Watch', path: '#' },
    { name: 'Vision', path: '#' },
    { name: 'AirPods', path: '#' },
    { name: 'TV & Home', path: '#' },
    { name: 'Entertainment', path: '#' },
    { name: 'Accessories', path: '#' },
    { name: 'Support', path: '#' },
  ];

  return (
    <nav className="navbar-blur">
      <div className="container-large" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', padding: '0 20px' }}>
        <NavLink to="/" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center' }}>
          <Apple size={18} />
        </NavLink>
        
        <div style={{ display: 'flex', gap: '24px' }}>
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              style={{ 
                color: 'var(--text-primary)', 
                textDecoration: 'none', 
                fontSize: '12px', 
                fontWeight: 400,
                opacity: 0.8
              }}
              onMouseEnter={(e) => e.target.style.opacity = 1}
              onMouseLeave={(e) => e.target.style.opacity = 0.8}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', opacity: 0.8 }}>
          <Search size={16} cursor="pointer" />
          <ShoppingBag size={16} cursor="pointer" />
        </div>
      </div>
    </nav>
  );
};
