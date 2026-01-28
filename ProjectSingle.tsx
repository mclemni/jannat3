
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from './App';
import { Calendar, MapPin, User, ChevronLeft } from 'lucide-react';

const ProjectSingle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, lang } = useTranslation();
  const mainImageUrl = "https://exploreengineering.ca/sites/default/files/2020-02/NEM_mechanical.jpg";

  const project = {
    title: lang === 'en' ? "Rumaila Field Dammam Wells Preparation" : "مشروع تهيئة آبار الدمام في حقل الرميلة",
    client: "Ministry of Oil / South Oil Company",
    year: "2024",
    location: "Nasiriyah / Basra, Iraq",
    image: mainImageUrl,
    desc: lang === 'en' 
      ? "Detailed engineering and construction of access roads for industrial oil well isolation stations."
      : "مشروع تهيئة آبار الدمام في حقل الرميلة الشمالية. يتضمن العمل تهيئة الموقع وإنشاء الطرق وفق أعلى المعايير الفنية.",
    specs: lang === 'en'
      ? ["Total Area: 45,000 sqm", "Concrete Poured: 1,200 m3", "Completion Time: 12 months"]
      : ["المساحة الإجمالية: 45,000 م2", "الخرسانة المسلحة: 1,200 م3", "مدة الإنجاز: 12 شهر"]
  };

  return (
    <div className="animate-fadeIn">
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/projects" className="text-corporate-navy flex items-center hover:text-corporate-red transition-colors mb-8 font-bold">
            <ChevronLeft className="mr-2 rtl:ml-2 rtl:rotate-180" />
            {lang === 'en' ? 'Back to Projects' : 'العودة للمشاريع'}
          </Link>
          <h1 className="text-4xl font-bold text-corporate-navy mb-8">{project.title}</h1>
          <img src={project.image} alt={project.title} className="w-full h-[500px] object-cover rounded-2xl shadow-xl mb-12" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-corporate-navy mb-6">{lang === 'en' ? 'Project Overview' : 'نظرة عامة على المشروع'}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">{project.desc}</p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl h-fit">
              <h3 className="text-xl font-bold text-corporate-navy mb-6 border-b pb-2">{lang === 'en' ? 'Project Details' : 'تفاصيل المشروع'}</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <User className="text-corporate-red mt-1" />
                  <div>
                    <div className="font-bold text-corporate-navy">{project.client}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <Calendar className="text-corporate-red mt-1" />
                  <div>
                    <div className="font-bold text-corporate-navy">{project.year}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <MapPin className="text-corporate-red mt-1" />
                  <div>
                    <div className="font-bold text-corporate-navy">{project.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectSingle;
