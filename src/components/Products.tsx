import { COLORS } from '@/utils/color';
import { SECTION_TITLES, TEXT_CONTENT } from '@/utils/constants';

export default function Products() {
  return (
    <section id="products" className="w-100 py-24" style={{ background: '#f8faf5' }}>
      <div className="container max-w-7xl px-4">
        <div className="text-center mb-5">
          <p className="text-uppercase fw-semibold tracking-widest mb-3" style={{ color: 'var(--brand-500)', fontSize: '0.75rem' }}>{SECTION_TITLES.PRODUCTS}</p>
          <h2 id="products-heading" className="font-display fw-bold" style={{ color: 'var(--brand-900)', fontSize: 'clamp(1.875rem, 4vw, 2.25rem)' }}>
            {TEXT_CONTENT.PRODUCTS_TITLE}
          </h2>
        </div>
        <div className="row g-5">
          {/* IV Cannula */}
          <div className="col-12 col-md-4">
            <div className="product-card rounded-4 overflow-hidden h-100">
              <div className="d-flex align-items-center justify-content-center position-relative" style={{ height: '14rem', background: COLORS.productGradient1 }}>
                <img
                  src="/IV Cannula.jpeg"
                  alt="IV Cannula"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <span className="position-absolute top-0 end-0 mt-3 me-3 px-3 py-1 rounded-pill fw-semibold" style={{ background: 'rgba(200, 169, 126, 0.12)', color: 'var(--brand-500)', fontSize: '0.75rem' }}>
                  Best Seller
                </span>
              </div>
              <div className="p-4 d-flex flex-column" style={{ height: 'calc(100% - 14rem)' }}>
                <h3 className="font-display fw-bold fs-5 mb-3" style={{ color: 'var(--brand-900)' }}>IV Cannula</h3>
                <p className="small leading-relaxed text-gray-500 mb-4 flex-grow-1">
                  High-quality intravenous cannulas designed for smooth insertion and minimal patient discomfort. Available in multiple gauge sizes (16G–26G) with colour-coded wings for easy identification. Features a sharp, tri-bevel needle and transparent flashback chamber.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-pill fw-medium" style={{ background: '#ecfeff', color: 'var(--brand-500)', fontSize: '0.75rem' }}>Sterile EO</span>
                  <span className="px-3 py-1 rounded-pill fw-medium" style={{ background: '#f0fdf4', color: '#14532d', fontSize: '0.75rem' }}>Colour Coded</span>
                  <span className="px-3 py-1 rounded-pill fw-medium" style={{ background: '#f0f9ff', color: '#1e40af', fontSize: '0.75rem' }}>CE Marked</span>
                </div>
              </div>
            </div>
          </div>

          {/* IV Infusion Set */}
          <div className="col-12 col-md-4">
            <div className="product-card rounded-4 overflow-hidden h-100">
              <div className="d-flex align-items-center justify-content-center position-relative" style={{ height: '14rem', background: COLORS.productGradient2 }}>
                <img
                  src="/⁠Iv infusion set.jpeg"
                  alt="⁠Iv infusion set"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <span className="position-absolute top-0 end-0 mt-3 me-3 px-3 py-1 rounded-pill fw-semibold" style={{ background: 'rgba(232, 232, 232, 0.1)', color: '#efefefff', fontSize: '0.75rem' }}>
                  Essential
                </span>
              </div>
              <div className="p-4 d-flex flex-column" style={{ height: 'calc(100% - 14rem)' }}>
                <h3 className="font-display fw-bold fs-5 mb-3" style={{ color: 'var(--brand-900)' }}>IV Infusion Set</h3>
                <p className="small leading-relaxed text-gray-500 mb-4 flex-grow-1">
                  Precision-engineered infusion sets for accurate and safe fluid delivery. Features a standard 20-drop/ml drip chamber, roller clamp for precise flow control, and a Luer-lock connector for secure attachment. Available with or without needle and air vent.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-pill fw-medium" style={{ background: '#ecfeff', color: 'var(--brand-500)', fontSize: '0.75rem' }}>Luer Lock</span>
                  <span className="px-3 py-1 rounded-pill fw-medium" style={{ background: '#f0fdf4', color: '#14532d', fontSize: '0.75rem' }}>150cm Tube</span>
                  <span className="px-3 py-1 rounded-pill fw-medium" style={{ background: '#f0f9ff', color: '#1e40af', fontSize: '0.75rem' }}>Non-Toxic</span>
                </div>
              </div>
            </div>
          </div>

          {/* Syringes */}
          <div className="col-12 col-md-4">
            <div className="product-card rounded-4 overflow-hidden h-100">
              <div className="d-flex align-items-center justify-content-center position-relative" style={{ height: '14rem', background: COLORS.productGradient3 }}>
                <img
                  src="/Syringes.jpeg"
                  alt="Disposable Syringes"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <span className="position-absolute top-0 end-0 mt-3 me-3 px-3 py-1 rounded-pill fw-semibold" style={{ background: 'rgba(30,64,175,0.1)', color: '#1e40af', fontSize: '0.75rem' }}>
                  High Demand
                </span>
              </div>
              <div className="p-4 d-flex flex-column" style={{ height: 'calc(100% - 14rem)' }}>
                <h3 className="font-display fw-bold fs-5 mb-3" style={{ color: 'var(--brand-900)' }}>Disposable Syringes</h3>
                <p className="small leading-relaxed text-gray-500 mb-4 flex-grow-1">
                  Medical-grade disposable syringes manufactured with transparent, medical-grade polypropylene barrels for clear dosage visibility. Available in 1ml, 2ml, 3ml, 5ml, 10ml, 20ml, and 50ml. Smooth plunger action with latex-free rubber gasket.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-pill fw-medium" style={{ background: '#ecfeff', color: 'var(--brand-500)', fontSize: '0.75rem' }}>Latex Free</span>
                  <span className="px-3 py-1 rounded-pill fw-medium" style={{ background: '#f0fdf4', color: '#14532d', fontSize: '0.75rem' }}>1ml–50ml</span>
                  <span className="px-3 py-1 rounded-pill fw-medium" style={{ background: '#f0f9ff', color: '#1e40af', fontSize: '0.75rem' }}>EO Sterile</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
