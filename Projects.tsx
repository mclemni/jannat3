
import React, { useState } from 'react';
import { useTranslation } from './App';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const { t, lang } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('All');
  const mainImageUrl = "https://exploreengineering.ca/sites/default/files/2020-02/NEM_mechanical.jpg";

  const categories = lang === 'en' 
    ? ["All", "Oil & Gas", "Infrastructure", "Construction"] 
    : ["الكل", "النفط والغاز", "البنية التحتية", "الإنشاءات"];

  const projects = [
    { id: '1', cat: 'Infrastructure', catAr: 'البنية التحتية', title: "Nasiriyah Gas Road Project", titleAr: "مشروع طريق محطة غاز الناصرية", img: mainImageUrl },
    { id: '2', cat: 'Construction', catAr: 'الإنشاءات', title: "1000 Residential Units Basra", titleAr: "مشروع 1000 وحدة سكنية في البصرة", img: mainImageUrl },
    { id: '3', cat: 'Oil & Gas', catAr: 'النفط والغاز', title: "Rumaila Field Well Site Prep", titleAr: "تهيئة مواقع آبار حقل الرميلة", img: mainImageUrl },
    { id: '4', cat: 'Infrastructure', catAr: 'البنية التحتية', title: "Al-Qasim Neighborhood Paving", titleAr: "أعمال تبليط حي القاسم", img: mainImageUrl },
    { id: '5', cat: 'Construction', catAr: 'الإنشاءات', title: "Central Warehousing Facility", titleAr: "مجمع المخازن المركزية", img: mainImageUrl },
    { id: '6', cat: 'Oil & Gas', catAr: 'النفط والغاز', title: "Strategic Pipeline Maintenance", titleAr: "صيانة خطوط الأنابيب الاستراتيجية", img: mainImageUrl },
  ];

  const filtered = projects.filter(p => {
    if (activeFilter === 'All' || activeFilter === 'الكل') return true;
    return p.cat === activeFilter || p.catAr === activeFilter;
  });

  return (
    <div className="animate-fadeIn">
      <section className="bg-corporate-navy py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={mainImageUrl} className="w-full h-full object-cover" alt="bg" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl font-black mb-6 uppercase tracking-tight">{t.nav.projects}</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-4 mb-20">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveFilter(c)}
                className={`px-8 py-3 rounded-full font-bold text-sm transition-all border-2 ${
                  activeFilter === c 
                    ? 'bg-corporate-red text-white border-corporate-red shadow-lg' 
                    : 'bg-transparent text-corporate-navy border-slate-100 hover:border-corporate-navy'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((proj) => (
              <Link 
                key={proj.id} 
                to={`/project/${proj.id}`} 
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-50"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8">
                  <span className="text-corporate-red font-black text-xs uppercase tracking-widest mb-3 block">
                    {lang === 'en' ? proj.cat : proj.catAr}
                  </span>
                  <h3 className="text-xl font-bold text-corporate-navy group-hover:text-corporate-red transition-colors line-clamp-2">
                    {lang === 'en' ? proj.title : proj.titleAr}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
