import { ShieldCheck, Truck, HeartPulse } from 'lucide-react';
import { COLORS } from '@/utils/color';
import { TEXT_CONTENT, SECTION_TITLES } from '@/utils/constants';

export default function About() {
  return (
    <section id="about" className="w-100 py-24 bg-white">
      <div className="container max-w-7xl px-4">
        <div className="max-w-3xl mx-auto text-center mb-5">
          <p className="text-uppercase fw-semibold tracking-widest mb-3" style={{ color: 'var(--brand-500)', fontSize: '0.75rem' }}>{SECTION_TITLES.ABOUT}</p>
          <h2 id="about-heading" className="font-display fw-bold mb-4" style={{ color: 'var(--brand-900)', fontSize: 'clamp(1.875rem, 4vw, 2.25rem)' }}>
            {TEXT_CONTENT.ABOUT_TITLE}
          </h2>
          <p id="about-text" className="fs-5 leading-relaxed text-gray-600 w-100 text-start" style={{ whiteSpace: "pre-line" }}>
            {TEXT_CONTENT.ABOUT_TEXT}
          </p>
        </div>
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="rounded-4 p-5 text-center transition hover:shadow-lg h-100" style={{ background: COLORS.successLight, border: `1px solid ${COLORS.successBorder}` }}>
              <div className="rounded-3 d-flex align-items-center justify-content-center mx-auto mb-4 bg-brand-500" style={{ width: '56px', height: '56px' }}>
                <ShieldCheck size={24} color="white" />
              </div>
              <h3 className="font-display fw-semibold fs-5 mb-2" style={{ color: 'var(--brand-900)' }}>Certified Quality</h3>
              <p className="small text-gray-500 mb-0">ISO 13485, CE marked, and WHO-GMP compliant manufacturing processes ensure the highest standards.</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="rounded-4 p-5 text-center transition hover:shadow-lg h-100" style={{ background: COLORS.infoLight, border: `1px solid ${COLORS.infoBorder}` }}>
              <div className="rounded-3 d-flex align-items-center justify-content-center mx-auto mb-4 bg-brand-500" style={{ width: '56px', height: '56px' }}>
                <Truck size={24} color="white" />
              </div>
              <h3 className="font-display fw-semibold fs-5 mb-2" style={{ color: 'var(--brand-900)' }}>Global Reach</h3>
              <p className="small text-gray-500 mb-0">Exporting to 50+ countries across Africa, Asia, the Middle East, Latin America, and Europe.</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="rounded-4 p-5 text-center transition hover:shadow-lg h-100" style={{ background: COLORS.primaryLight, border: `1px solid ${COLORS.primaryBorder}` }}>
              <div className="rounded-3 d-flex align-items-center justify-content-center mx-auto mb-4 bg-brand-500" style={{ width: '56px', height: '56px' }}>
                <HeartPulse size={24} color="white" />
              </div>
              <h3 className="font-display fw-semibold fs-5 mb-2" style={{ color: 'var(--brand-900)' }}>Patient Safety</h3>
              <p className="small text-gray-500 mb-0">Every product undergoes rigorous testing and sterilization to ensure complete safety for patients.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
