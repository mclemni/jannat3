
import React from 'react';
import { useTranslation } from './App';

const About: React.FC = () => {
  const { t, lang } = useTranslation();

  const timeline = [
    { year: "2006", en: "Established as an individual company in general contracting.", ar: "تأسيس المشروع كشركة فردية، وبدء العمل في مجال المقاولات العامة." },
    { year: "2010", en: "Expanded into service projects and infrastructure for government entities.", ar: "توسيع نطاق الأعمال والمشاركة في تنفيذ مشاريع خدمية وبنى تحتية." },
    { year: "2015", en: "Ownership transfer under a legal documented contract, ensuring business continuity.", ar: "نقل ملكية المشروع بموجب عقد قانوني موثق، بما يضمن استمرارية العمل." },
    { year: "2018", en: "Enhanced technical and administrative capabilities for larger, complex projects.", ar: "تعزيز القدرات الفنية والإدارية، وتطوير أساليب العمل لمشاريع أكبر حجماً." },
    { year: "2023", en: "Institutional restructuring and adopting the trade name: Jannat Al-Fayhaa.", ar: "إعادة الهيكلة المؤسسية واعتماد المسمى التجاري شركة جنات الفيحاء." },
    { year: "2024+", en: "Expansion of operational scope and commitment to quality and safety systems.", ar: "توسيع نطاق الأعمال، وتعزيز الهيكل التنظيمي، والالتزام بأنظمة الجودة." },
  ];

  return (
    <div className="animate-fadeIn">
      <section className="bg-corporate-navy py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.about.title}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">{t.about.subtitle}</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-12 rounded-2xl border-l-4 border-corporate-red">
              <h2 className="text-3xl font-bold text-corporate-navy mb-6">{t.about.vision}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{t.about.visionText}</p>
            </div>
            <div className="bg-slate-50 p-12 rounded-2xl border-l-4 border-corporate-red">
              <h2 className="text-3xl font-bold text-corporate-navy mb-6">{t.about.mission}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{t.about.missionText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-corporate-navy mb-16 text-center">{t.about.history}</h2>
          <div className="relative border-l-2 border-corporate-navy ml-4 md:ml-0 md:before:absolute md:before:left-1/2 md:before:h-full md:before:w-0.5 md:before:bg-corporate-navy rtl:md:before:left-auto rtl:md:before:right-1/2">
            {timeline.map((item, index) => (
              <div key={index} className={`mb-12 relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block absolute left-1/2 -ml-3 w-6 h-6 bg-corporate-red rounded-full border-4 border-white z-10 rtl:-mr-3 rtl:ml-0 rtl:right-1/2"></div>
                <div className={`w-full md:w-1/2 px-8 ${index % 2 === 0 ? 'md:text-left rtl:md:text-right' : 'md:text-right rtl:md:text-left'}`}>
                  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-corporate-red font-black text-2xl mb-2 block">{item.year}</span>
                    <p className="text-gray-700 font-medium">{lang === 'en' ? item.en : item.ar}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
