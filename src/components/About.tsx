import { ShieldCheck, Truck, HeartPulse } from 'lucide-react';
import { COLORS } from '@/utils/color';
import { TEXT_CONTENT, SECTION_TITLES } from '@/utils/constants';
import Image from 'next/image';
import aboutBg from '@/assets/about_bg_clear.png';

export default function About() {
  return (
    <section id="about" className="w-100 position-relative py-24 overflow-hidden" style={{ backgroundColor: '#f8fafc' }}>
      {/* Background Image - Reduced Opacity */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0, opacity: 0.6 }}>
        <Image 
          src={aboutBg} 
          alt="HS Dugar Medical Facility" 
          fill 
          style={{ objectFit: 'cover', objectPosition: 'center center' }} 
          priority
        />
      </div>
      
      {/* Gradient Overlay: Left side has a subtle soft blue tint, fading into solid white on the right for text readability */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100" 
        style={{ 
          zIndex: 1,
          background: 'linear-gradient(to right, rgba(240, 248, 255, 0.4) 0%, rgba(255, 255, 255, 0.85) 50%, rgba(255, 255, 255, 1) 100%)' 
        }}
      ></div>

      <div className="container max-w-7xl px-4 position-relative z-2 py-5">
        <div className="row justify-content-end">
          {/* Content aligned to the right side */}
          <div className="col-12 col-lg-9 col-xl-8 text-end">
            <p className="text-uppercase fw-bold tracking-widest mb-3" style={{ color: 'var(--brand-500)', fontSize: '0.875rem', letterSpacing: '0.1em' }}>
              {SECTION_TITLES.ABOUT}
            </p>
            <h2 id="about-heading" className="font-display fw-bold mb-5" style={{ color: 'var(--brand-900)', fontSize: 'clamp(2.25rem, 4vw, 3rem)', lineHeight: 1.2 }}>
              {TEXT_CONTENT.ABOUT_TITLE}
            </h2>
            
            <div id="about-text" className="fs-5 leading-relaxed text-end d-flex flex-column gap-4 mb-5" style={{ color: '#475569' }}>
              {TEXT_CONTENT.ABOUT_TEXT.split('\n').map((paragraph, idx) => (
                <p key={idx} className="mb-0">{paragraph}</p>
              ))}
            </div>

            {/* Feature Cards aligned to the right */}
            <div className="row g-4 mt-2 justify-content-end">
              <div className="col-12 col-md-6 col-xl-4 text-end">
                <div className="rounded-4 p-4 transition hover:shadow-lg h-100 bg-white" style={{ border: `1px solid rgba(226, 232, 240, 0.8)`, boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                  <div className="rounded-circle d-flex align-items-center justify-content-center ms-auto mb-4" style={{ width: '56px', height: '56px', background: 'rgba(200, 169, 126, 0.1)' }}>
                    <ShieldCheck size={26} style={{ color: 'var(--brand-500)' }} />
                  </div>
                  <h3 className="font-display fw-bold fs-5 mb-2" style={{ color: 'var(--brand-900)' }}>Certified Quality</h3>
                  <p className="small mb-0 leading-relaxed" style={{ color: '#64748b' }}>ISO 13485, CE marked, and WHO-GMP compliant processes ensure the highest standards.</p>
                </div>
              </div>
              
              <div className="col-12 col-md-6 col-xl-4 text-end">
                <div className="rounded-4 p-4 transition hover:shadow-lg h-100 bg-white" style={{ border: `1px solid rgba(226, 232, 240, 0.8)`, boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                  <div className="rounded-circle d-flex align-items-center justify-content-center ms-auto mb-4" style={{ width: '56px', height: '56px', background: 'rgba(200, 169, 126, 0.1)' }}>
                    <Truck size={26} style={{ color: 'var(--brand-500)' }} />
                  </div>
                  <h3 className="font-display fw-bold fs-5 mb-2" style={{ color: 'var(--brand-900)' }}>Global Reach</h3>
                  <p className="small mb-0 leading-relaxed" style={{ color: '#64748b' }}>Exporting to 50+ countries across Africa, Asia, the Middle East, Latin America, and Europe.</p>
                </div>
              </div>
              
              <div className="col-12 col-md-6 col-xl-4 text-end">
                <div className="rounded-4 p-4 transition hover:shadow-lg h-100 bg-white" style={{ border: `1px solid rgba(226, 232, 240, 0.8)`, boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                  <div className="rounded-circle d-flex align-items-center justify-content-center ms-auto mb-4" style={{ width: '56px', height: '56px', background: 'rgba(200, 169, 126, 0.1)' }}>
                    <HeartPulse size={26} style={{ color: 'var(--brand-500)' }} />
                  </div>
                  <h3 className="font-display fw-bold fs-5 mb-2" style={{ color: 'var(--brand-900)' }}>Patient Safety</h3>
                  <p className="small mb-0 leading-relaxed" style={{ color: '#64748b' }}>Rigorous testing and sterilization guarantee complete safety for patients worldwide.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
