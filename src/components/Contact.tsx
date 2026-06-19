import { Mail, Phone, MapPin } from 'lucide-react';
import { COLORS } from '@/utils/color';
import { SECTION_TITLES, CONTACT_INFO } from '@/utils/constants';

export default function Contact() {
  return (
    <section id="contact" className="w-100 py-24" style={{ background: COLORS.sectionDarkBg }}>
      <div className="container max-w-4xl px-4 text-center">
        <p className="text-uppercase fw-semibold tracking-widest mb-3" style={{ color: COLORS.cyanAccent, fontSize: '0.75rem' }}>{SECTION_TITLES.CONTACT}</p>
        <h2 className="font-display fw-bold text-white mb-4" style={{ fontSize: 'clamp(1.875rem, 4vw, 2.25rem)' }}>
          Ready to Partner with HS Dugar Group?
        </h2>
        <p className="fs-5 mb-5 mx-auto" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '540px' }}>
          Reach out to explore our product catalog, request samples, or discuss bulk export orders.
        </p>
        <div className="row g-4">
          <div className="col-12 col-sm-4">
            <div className="rounded-4 p-4 h-100" style={{ background: COLORS.whiteAlpha06, border: `1px solid ${COLORS.whiteAlpha10}` }}>
              <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ background: COLORS.brand500Alpha30, width: '44px', height: '44px' }}>
                <Mail size={18} color={COLORS.cyanAccent} />
              </div>
              <p className="small fw-semibold text-white mb-1">Email</p>
              <p className="small mb-0" style={{ color: COLORS.whiteAlpha65 }}>{CONTACT_INFO.EMAIL}</p>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <div className="rounded-4 p-4 h-100" style={{ background: COLORS.whiteAlpha06, border: `1px solid ${COLORS.whiteAlpha10}` }}>
              <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ background: COLORS.brand500Alpha30, width: '44px', height: '44px' }}>
                <Phone size={18} color={COLORS.cyanAccent} />
              </div>
              <p className="small fw-semibold text-white mb-1">Phone</p>
              <p className="small mb-0" style={{ color: COLORS.whiteAlpha65 }}>{CONTACT_INFO.PHONE}</p>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <div className="rounded-4 p-4 h-100" style={{ background: COLORS.whiteAlpha06, border: `1px solid ${COLORS.whiteAlpha10}` }}>
              <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ background: COLORS.brand500Alpha30, width: '44px', height: '44px' }}>
                <MapPin size={18} color={COLORS.cyanAccent} />
              </div>
              <p className="small fw-semibold text-white mb-1">Location</p>
              <p className="small mb-0" style={{ color: COLORS.whiteAlpha65 }}>{CONTACT_INFO.LOCATION}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
