import Link from 'next/link';
import { COLORS } from '@/utils/color';
import { TEXT_CONTENT, COMPANY_NAME } from '@/utils/constants';

export default function Footer() {
  return (
    <footer className="w-100 py-4 py-md-5" style={{ background: COLORS.footerBg }}>
      <div className="container max-w-7xl px-4">
        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3 mb-4">
          <p id="footer-text" className="small mb-0 text-center text-sm-start" style={{ color: COLORS.whiteAlpha40, fontSize: '0.875rem' }}>
            {TEXT_CONTENT.FOOTER_TEXT}
          </p>
          <div className="d-flex gap-4 small" style={{ color: COLORS.whiteAlpha40, fontSize: '0.875rem' }}>
            <Link href="/#hero" className="text-decoration-none transition-all hover-text-white" style={{ color: 'inherit' }}>Home</Link>
            <Link href="/#products" className="text-decoration-none transition-all hover-text-white" style={{ color: 'inherit' }}>Products</Link>
            <Link href="/#contact" className="text-decoration-none transition-all hover-text-white" style={{ color: 'inherit' }}>Contact</Link>
          </div>
        </div>
        
        <div 
          className="pt-4 mt-2 d-flex justify-content-center align-items-center" 
          style={{ borderTop: `1px solid ${COLORS.whiteAlpha10}` }}
        >
          <p className="small mb-0" style={{ color: COLORS.whiteAlpha40, fontSize: '0.8rem', letterSpacing: '0.5px' }}>
            Developed By:{' '}
            <a 
              href="https://lakshay-saxena-portfolio.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-decoration-none transition-all hover-text-white" 
              style={{ color: COLORS.brand500, fontWeight: 600 }}
            >
              Lakshay Saxena
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
