import { ArrowRight, Globe } from "lucide-react";
import { COLORS } from "@/utils/color";
import { TEXT_CONTENT, COMPANY_NAME } from "@/utils/constants";

export default function Hero() {
  return (
    <section id="hero" className="w-100 mesh-bg hero-pattern position-relative overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      <div className="container max-w-7xl px-4 d-flex flex-column flex-lg-row align-items-center gap-5">
        <div className="flex-grow-1 max-w-2xl">
          <div className="anim-fade-up d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill fw-semibold tracking-wide mb-4" style={{ background: COLORS.brand500Alpha10, color: 'var(--brand-500)', fontSize: '0.75rem' }}>
            <Globe size={14} /> {TEXT_CONTENT.HERO_BADGE}
          </div>
          <h1 id="hero-title" className="anim-fade-up-d1 font-display fw-bold leading-tight mb-4" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: 'var(--brand-900)' }}>
            {TEXT_CONTENT.HERO_TITLE}
          </h1>
          <p id="hero-subtitle" className="anim-fade-up-d2 fs-5 leading-relaxed mb-5" style={{ color: COLORS.textGray600, maxWidth: '540px' }}>
            {TEXT_CONTENT.HERO_SUBTITLE}
          </p>
          <div className="anim-fade-up-d3 d-flex flex-wrap gap-3">
            <a href="#products" className="d-inline-flex align-items-center gap-2 px-4 py-3 rounded-3 text-white fw-semibold text-decoration-none transition-all hover:shadow-lg" style={{ background: 'var(--brand-500)', fontSize: '0.875rem' }}>
              View Products <ArrowRight size={16} />
            </a>
            <a href="#contact" className="d-inline-flex align-items-center gap-2 px-4 py-3 rounded-3 fw-semibold text-decoration-none transition-all border border-2 border-gray-300 hover:bg-light" style={{ color: 'var(--brand-800)', fontSize: '0.875rem' }}>
              Get in Touch
            </a>
          </div>
        </div>
        <div className="flex-grow-1 anim-scale position-relative w-100">
          <div className="position-relative w-100 max-w-md mx-auto">
            <div className="position-absolute inset-0 rounded-4" style={{ background: COLORS.heroMeshGradient, transform: 'rotate(3deg)', top: 0, left: 0, right: 0, bottom: 0 }}></div>
            <div className="position-relative rounded-4 p-5 d-flex flex-column align-items-center gap-4 bg-white" style={{ boxShadow: `0 20px 60px -15px ${COLORS.shadowColor}` }}>
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <circle cx="60" cy="60" r="56" stroke="#C8A97E" strokeWidth="2" strokeDasharray="6 4" opacity="0.3" />
                <circle cx="60" cy="60" r="40" fill="#ecfeff" />
                <path d="M60 30v60M35 60h50" stroke="#C8A97E" strokeWidth="4" strokeLinecap="round" />
                <circle cx="60" cy="60" r="8" fill="#C8A97E" opacity="0.2" />
              </svg>
              <div className="text-center">
                <p className="font-display fw-bold fs-4 mb-1" style={{ color: 'var(--brand-900)' }}>{COMPANY_NAME}</p>
                <p className="small mb-0 text-gray-500">Medical Excellence Since Inception</p>
              </div>
              <div className="d-flex gap-4 text-center">
                <div>
                  <p className="fw-bold fs-5 mb-0 text-brand-500">50+</p>
                  <p className="small text-gray-500 mb-0" style={{ fontSize: '0.75rem' }}>Countries</p>
                </div>
                <div className="vr" style={{ backgroundColor: '#e5e7eb' }}></div>
                <div>
                  <p className="fw-bold fs-5 mb-0 text-brand-500">ISO</p>
                  <p className="small text-gray-500 mb-0" style={{ fontSize: '0.75rem' }}>Certified</p>
                </div>
                <div className="vr" style={{ backgroundColor: '#e5e7eb' }}></div>
                <div>
                  <p className="fw-bold fs-5 mb-0 text-brand-500">CE</p>
                  <p className="small text-gray-500 mb-0" style={{ fontSize: '0.75rem' }}>Marked</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
