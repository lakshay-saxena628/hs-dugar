import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Products from '@/components/Products';
import WhyUs from '@/components/WhyUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.hsdugargroup.com/#organization",
        "name": "HS Dugar Group",
        "url": "https://www.hsdugargroup.com",
        "logo": "https://www.hsdugargroup.com/favicon.ico",
        "description": "HS Dugar Group is a leading exporter of high-quality IV Cannulas, IV Infusion Sets, and Syringes serving hospitals worldwide.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-7827219147",
          "contactType": "sales",
          "email": "jaindr.archi@gmail.com"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.hsdugargroup.com/#website",
        "url": "https://www.hsdugargroup.com",
        "name": "HS Dugar Group",
        "publisher": {
          "@id": "https://www.hsdugargroup.com/#organization"
        }
      }
    ]
  };

  return (
    <div id="app-wrapper" className="w-100 h-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Products />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}
