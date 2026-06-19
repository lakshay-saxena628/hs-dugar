'use client';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { COLORS } from '@/utils/color';
import { COMPANY_NAME, SECTION_TITLES } from '@/utils/constants';
import { classNames } from '@/utils/helper';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="main-nav"
      className={classNames('fixed-top w-100 z-3 transition-all', isScrolled ? 'glass' : '')}
      style={{
        background: isScrolled ? COLORS.whiteAlpha92 : COLORS.transparent,
        boxShadow: isScrolled ? '0 1px 12px rgba(0,0,0,0.06)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container max-w-7xl px-4 py-3 d-flex align-items-center justify-content-between">
        <Link href="/#hero" className="d-flex align-items-center gap-3 text-decoration-none">
          <div className="rounded-3 d-flex align-items-center justify-content-center bg-brand-500" style={{ width: '40px', height: '40px' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17" />
            </svg>
          </div>
          <span className="font-display fw-bold fs-5 tracking-tight text-brand-900" id="nav-brand">
            {COMPANY_NAME}
          </span>
        </Link>
        <div className="d-none d-md-flex align-items-center gap-4 text-sm fw-medium text-brand-800" style={{ fontSize: '0.875rem' }}>
          <Link href="/#about" className="nav-link py-1">About</Link>
          <Link href="/#products" className="nav-link py-1">Products</Link>
          <Link href="/#why-us" className="nav-link py-1">Why Us</Link>
          <Link href="/#contact" className="nav-link py-1">Contact</Link>
        </div>
        <button
          className="d-md-none btn btn-light border-0 p-2 rounded-3 transition-all"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <Menu size={24} className="text-brand-800" />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="d-md-none px-4 pb-3 d-flex flex-column gap-2 bg-white" style={{ fontSize: '0.875rem' }}>
          <Link href="/#about" className="d-block py-2 border-bottom border-gray-100 text-decoration-none text-brand-800 fw-medium" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link href="/#products" className="d-block py-2 border-bottom border-gray-100 text-decoration-none text-brand-800 fw-medium" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
          <Link href="/#why-us" className="d-block py-2 border-bottom border-gray-100 text-decoration-none text-brand-800 fw-medium" onClick={() => setIsMobileMenuOpen(false)}>Why Us</Link>
          <Link href="/#contact" className="d-block py-2 text-decoration-none text-brand-800 fw-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
