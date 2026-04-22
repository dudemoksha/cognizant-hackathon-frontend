# Frontend Implementation Plan (Laptop 1)

This plan is for **Laptop 1**, which will focus solely on the **Frontend UI Design and Component Architecture**.

> [!NOTE]
> Ensure you run `npm install` and `npm run dev` in this directory to begin viewing your work.

## Goal Description
Build the professional, production-grade UI for the Supply Chain Digital Twin Platform, matching an **Apple-inspired minimalist aesthetic** and **Relume-style component-driven layouts**.

## Execution Steps

### 1. Configuration & Infrastructure
- [ ] Initialize `react-router-dom` and `lucide-react`.
- [ ] Set up the routing wrapper in `src/main.jsx`.

### 2. Core Design System (Vanilla CSS)
- [ ] Edit `src/index.css` to define the root CSS variables for the color palette (very light neutral backgrounds, soft gray borders).
- [ ] Implement `Inter` natively via Google Fonts.
- [ ] Build structural classes mimicking Relume (`.container`, `.grid`, `.card`).

### 3. Shared Components
- [ ] Build `src/components/ui/Button.jsx` (Subtle active states, soft radius).
- [ ] Build `src/components/ui/Card.jsx` (Thin borders, zero extreme drop shadows).
- [ ] Build layout framework in `src/components/layout/Header.jsx` and `src/components/layout/Sidebar.jsx`.

### 4. Application Pages
- [ ] **Landing Page**: Build `src/pages/Landing.jsx` with a minimal hero, sparse abstracts, and clean "Get Started" buttons.
- [ ] **Login Page**: Build `src/pages/Login.jsx` featuring a centered role-selection dropdown.
- [ ] **Dashboards**: Implement structured grids for Consumer, Supplier, and Admin dashboards relying on sidebars and top headers.

## API Integration Protocol
- [ ] Establish `src/services/api.js` (or similar) that will eventually be configured to point to the backend IP (where Laptop 2 will be hosting the API).

---
*Once these are complete, this frontend will be ready to communicate seamlessly with the backend.*
