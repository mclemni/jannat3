
import React, { useState, createContext, useContext, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ChevronRight, ArrowRight } from 'lucide-react';
import { Language, TranslationSchema } from './types';
import { translations } from './translations';

// Pages - Moved to root for better build stability
import Home from './Home';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import ProjectSingle from './ProjectSingle';
import Contact from './Contact';

interface LanguageContextType {
  lang: Language;
  t: TranslationSchema;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useTranslation must be used within LanguageProvider");
  return context;
};

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('en');

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

const Navbar = () => {
  const { lang, t, toggleLang } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.about, path: "/about" },
    { name: t.nav.services, path: "/services" },
    { name: t.nav.projects, path: "/projects" },
    { name: t.nav.contact, path: "/contact" },
  ];

  const logoUrl = "https://pastel.com.iq/wp-content/uploads/2026/01/Asset-1.png";

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="bg-white p-2 flex items-center justify-center min-w-[180px]">
                <img 
                  className="h-16 w-auto object-contain" 
                  src={logoUrl} 
                  alt="Jannat Al-Fayhaa Logo" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.fallback-text')) {
                      const text = document.createElement('span');
                      text.className = 'fallback-text text-corporate-navy font-bold text-lg tracking-wider';
                      text.innerText = 'JANNAT AL-FAYHAA';
                      parent.appendChild(text);
                    }
                  }}
                />
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold uppercase transition-all duration-300 tracking-wider ${
                  location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path))
                    ? 'text-corporate-red' 
                    : 'text-corporate-navy hover:text-corporate-red'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleLang}
              className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 border-2 border-corporate-navy text-corporate-navy hover:bg-corporate-navy hover:text-white rounded-md font-bold transition-all"
            >
              <Globe size={18} />
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-corporate-navy p-2"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t-2 border-slate-100">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-lg font-bold text-corporate-navy border-b border-slate-50 last:border-none"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => { toggleLang(); setIsOpen(false); }}
              className="w-full text-center mt-4 bg-corporate-navy text-white py-4 rounded-lg font-bold flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <Globe size={20} />
              <span>{lang === 'en' ? 'Switch to Arabic' : 'التحويل للإنجليزية'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  const { t, lang } = useTranslation();
  const footerLogoUrl = "https://pastel.com.iq/wp-content/uploads/2026/01/footer.png";

  return (
    <footer className="bg-corporate-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div className="flex flex-col">
             <div className="mb-8 inline-block">
              <img 
                  className="h-16 w-auto object-contain" 
                  src={footerLogoUrl} 
                  alt="Jannat Al-Fayhaa Logo" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.fallback-text')) {
                      const text = document.createElement('span');
                      text.className = 'fallback-text text-white font-black text-xl tracking-tighter';
                      text.innerText = 'JANNAT AL-FAYHAA';
                      parent.appendChild(text);
                    }
                  }}
                />
             </div>
            <p className="text-blue-100/80 text-sm leading-relaxed mb-6">
              {lang === 'en' 
                ? "Jannat Al-Fayhaa Co. is a leader in Iraq's infrastructure and industrial landscape, providing integrated solutions with unwavering quality since 2006."
                : "تعد شركة جنات الفيحاء رائدة في قطاع البنية التحتية والصناعية في العراق، حيث تقدم حلولاً متكاملة بجودة لا تضاهى منذ عام 2006."
              }
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse mt-auto">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-corporate-red transition-all"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-corporate-red transition-all"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-corporate-red transition-all"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 rtl:after:left-auto rtl:after:right-0 after:w-10 after:h-1 after:bg-corporate-red">{t.nav.services}</h3>
            <ul className="space-y-4 text-blue-100/70">
              <li><Link to="/services" className="hover:text-white transition-colors flex items-center"><ChevronRight size={14} className="mr-2 rtl:ml-2 rtl:rotate-180" /> {t.services.items.civil}</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors flex items-center"><ChevronRight size={14} className="mr-2 rtl:ml-2 rtl:rotate-180" /> {t.services.items.oilGas}</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors flex items-center"><ChevronRight size={14} className="mr-2 rtl:ml-2 rtl:rotate-180" /> {t.services.items.mechanical}</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors flex items-center"><ChevronRight size={14} className="mr-2 rtl:ml-2 rtl:rotate-180" /> {t.services.items.supply}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 rtl:after:left-auto rtl:after:right-0 after:w-10 after:h-1 after:bg-corporate-red">{t.nav.contact}</h3>
            <ul className="space-y-6 text-blue-100/70">
              <li className="flex items-start space-x-4 rtl:space-x-reverse">
                <MapPin size={20} className="text-corporate-red flex-shrink-0" />
                <span className="text-sm">{t.contact.address}</span>
              </li>
              <li className="flex items-center space-x-4 rtl:space-x-reverse">
                <Phone size={20} className="text-corporate-red flex-shrink-0" />
                <span className="text-sm tracking-widest">{t.contact.phone}</span>
              </li>
              <li className="flex items-center space-x-4 rtl:space-x-reverse">
                <Mail size={20} className="text-corporate-red flex-shrink-0" />
                <span className="text-sm">info@jannat-alfayhaa.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-blue-900 text-center text-blue-200/50 text-xs">
          <p>© {new Date().getFullYear()} Jannat Al-Fayhaa Co. | All Rights Reserved. Professional Engineering Solutions.</p>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <div className="min-h-screen flex flex-col selection:bg-corporate-red selection:text-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:id" element={<ProjectSingle />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;
