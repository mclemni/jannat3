
import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from './App';
import { ArrowRight, CheckCircle, ShieldCheck, Users, Briefcase, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { t, lang } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const mainImageUrl = "https://exploreengineering.ca/sites/default/files/2020-02/NEM_mechanical.jpg";

  const slides = [
    {
      url: mainImageUrl,
      title: t.home.heroTitle,
      subtitle: t.home.heroSubtitle
    },
    {
      url: mainImageUrl,
      title: lang === 'en' ? "Precision Engineering" : "هندسة دقيقة",
      subtitle: lang === 'en' ? "Implementing the highest standards in oil & gas infrastructure across Basra." : "تطبيق أعلى المعايير في البنية التحتية لقطاع النفط والغاز في البصرة."
    },
    {
      url: mainImageUrl,
      title: lang === 'en' ? "Reliable Logistics" : "خدمات لوجستية موثوقة",
      subtitle: lang === 'en' ? "Integrated supply chain and transport solutions for major Iraqi projects." : "حلول متكاملة لسلاسل التوريد والنقل للمشاريع العراقية الكبرى."
    }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    (e.target as HTMLImageElement).src = mainImageUrl;
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="animate-fadeIn">
      {/* Hero Slider Section */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-corporate-navy">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img
              src={slide.url}
              alt={`Slide ${index}`}
              onError={handleImageError}
              className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-linear ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
            />
            
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
                <div className={`max-w-3xl transition-all duration-1000 transform ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}>
                  <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-blue-50 font-light leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/services"
                      className="bg-corporate-red text-white px-8 py-4 rounded-md text-lg font-bold flex items-center justify-center hover:bg-red-700 transition-all transform hover:scale-105"
                    >
                      {t.home.cta}
                      <ArrowRight className="ml-2 rtl:mr-2 rtl:rotate-180" size={20} />
                    </Link>
                    <Link
                      to="/about"
                      className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-md text-lg font-bold flex items-center justify-center hover:bg-white hover:text-corporate-navy transition-all"
                    >
                      {t.nav.about}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/20 hover:bg-corporate-red text-white transition-all backdrop-blur-sm rtl:left-auto rtl:right-6 group">
          <ChevronLeft size={32} className="rtl:rotate-180 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/20 hover:bg-corporate-red text-white transition-all backdrop-blur-sm rtl:right-auto rtl:left-6 group">
          <ChevronRight size={32} className="rtl:rotate-180 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3 rtl:space-x-reverse">
          {slides.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-500 ${index === currentSlide ? 'bg-corporate-red w-12' : 'bg-white/40 hover:bg-white/70'}`} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border-r border-slate-100 last:border-0">
              <div className="text-5xl font-black text-corporate-navy mb-3">150+</div>
              <div className="text-slate-500 font-bold tracking-widest uppercase text-sm">{t.home.stats.projects}</div>
            </div>
            <div className="p-8 border-r border-slate-100 last:border-0">
              <div className="text-5xl font-black text-corporate-navy mb-3">18+</div>
              <div className="text-slate-500 font-bold tracking-widest uppercase text-sm">{t.home.stats.experience}</div>
            </div>
            <div className="p-8">
              <div className="text-5xl font-black text-corporate-navy mb-3">50+</div>
              <div className="text-slate-500 font-bold tracking-widest uppercase text-sm">{t.home.stats.clients}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-corporate-red/10 rounded-2xl transform rotate-2 transition-transform group-hover:rotate-0"></div>
              <img 
                src={mainImageUrl} 
                alt="Engineering excellence" 
                onError={handleImageError}
                className="rounded-2xl shadow-2xl relative z-10 w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <span className="text-corporate-red font-black tracking-widest uppercase text-xs mb-4 block">
                {lang === 'en' ? 'Excellence in Execution' : 'التميز في التنفيذ'}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-corporate-navy mb-8 leading-tight">
                {lang === 'en' ? 'Powering Iraq’s Progress' : 'تعزيز تقدم العراق'}
              </h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                {t.about.visionText}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  { en: "Safety First", ar: "السلامة أولاً" },
                  { en: "Quality Guaranteed", ar: "جودة مضمونة" },
                  { en: "Local Expertise", ar: "خبرة محلية" },
                  { en: "Global Standards", ar: "معايير عالمية" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 rtl:space-x-reverse text-corporate-navy font-bold">
                    <CheckCircle className="text-corporate-red flex-shrink-0" size={24} />
                    <span>{lang === 'en' ? item.en : item.ar}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center text-corporate-red font-black hover:translate-x-2 rtl:hover:-translate-x-2 transition-transform">
                {lang === 'en' ? 'Discover Our Story' : 'اكتشف قصتنا'}
                <ArrowRight className="ml-2 rtl:mr-2 rtl:rotate-180" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services (Expertise Section) */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-corporate-navy mb-6 uppercase tracking-tighter">{t.services.title}</h2>
            <div className="w-24 h-2 bg-corporate-red mx-auto mb-6"></div>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">{t.services.desc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: t.services.items.civil, icon: <Briefcase size={36} />, img: mainImageUrl },
              { title: t.services.items.oilGas, icon: <ShieldCheck size={36} />, img: mainImageUrl },
              { title: t.services.items.mechanical, icon: <Users size={36} />, img: mainImageUrl },
              { title: t.services.items.supply, icon: <CheckCircle size={36} />, img: mainImageUrl },
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-slate-100">
                <div className="h-48 overflow-hidden bg-slate-200">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    onError={handleImageError}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="p-8">
                  <div className="text-corporate-red mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-corporate-navy mb-4 group-hover:text-corporate-red transition-colors">{service.title}</h3>
                  <Link to="/services" className="text-xs font-black text-slate-400 uppercase tracking-widest hover:text-corporate-red flex items-center">
                    {lang === 'en' ? 'Full Scope' : 'النطاق الكامل'}
                    <ChevronRight size={14} className="ml-1 rtl:mr-1 rtl:rotate-180" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-corporate-navy">{t.home.featuredProjects}</h2>
            <Link to="/projects" className="bg-corporate-red text-white px-10 py-3 rounded-full font-bold flex items-center hover:bg-corporate-navy transition-all shadow-lg">
              {lang === 'en' ? 'Project Portfolio' : 'معرض المشاريع'}
              <ArrowRight className="ml-2 rtl:mr-2 rtl:rotate-180" size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { id: '1', title: lang === 'en' ? "Nasiriyah Industrial Base" : "قاعدة الناصرية الصناعية", img: mainImageUrl },
              { id: '2', title: lang === 'en' ? "Strategic Housing Units" : "الوحدات السكنية الاستراتيجية", img: mainImageUrl },
              { id: '3', title: lang === 'en' ? "Rumaila Field Expansion" : "توسعة حقل الرميلة", img: mainImageUrl },
            ].map((proj) => (
              <Link key={proj.id} to={`/project/${proj.id}`} className="group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-xl bg-slate-100">
                <img 
                  src={proj.img} 
                  alt={proj.title} 
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:from-corporate-red/90 group-hover:via-corporate-red/40 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-10 text-white w-full">
                  <div className="bg-black/20 backdrop-blur-sm p-4 rounded-xl inline-block w-full">
                    <h3 className="text-xl md:text-2xl font-black mb-4 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">{proj.title}</h3>
                    <div className="flex items-center text-white/90 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      {lang === 'en' ? 'View Details' : 'عرض التفاصيل'}
                      <ChevronRight className="ml-2 rtl:mr-2 rtl:rotate-180" size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
