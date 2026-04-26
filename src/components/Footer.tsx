import { COLORS } from '@/utils/color';
import { TEXT_CONTENT, COMPANY_NAME } from '@/utils/constants';

export default function Footer() {
  return (
    <footer className="w-100 py-4" style={{ background: COLORS.footerBg }}>
      <div className="container max-w-7xl px-4 d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3">
        <p id="footer-text" className="small mb-0" style={{ color: COLORS.whiteAlpha40, fontSize: '0.875rem' }}>
          {TEXT_CONTENT.FOOTER_TEXT}
        </p>
        <div className="d-flex gap-4 small" style={{ color: COLORS.whiteAlpha40, fontSize: '0.875rem' }}>
          <a href="#hero" className="text-decoration-none transition-all hover-text-white" style={{ color: 'inherit' }}>Home</a>
          <a href="#products" className="text-decoration-none transition-all hover-text-white" style={{ color: 'inherit' }}>Products</a>
          <a href="#contact" className="text-decoration-none transition-all hover-text-white" style={{ color: 'inherit' }}>Contact</a>
        </div>
      </div>
    </footer>
  );
}
